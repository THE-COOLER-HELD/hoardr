import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { supabase } from "../superbaseClient";
import { getUser } from "../supabaseQueries";
import SessionContext from "../contexts/SessionContext";

const useSignupLogin = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const { setUser } = useContext(UserContext);
  const { session, setSession } = useContext(SessionContext);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session?.user?.id) {
      getUser(session.user.id).then((userData) => {
        if (userData.length > 0) {
          setIsSignedUp(true);
          setUser(userData[0]);
        }
      });
    }
  }, [session]);

  return { session, isSignedUp };
};

export default useSignupLogin;
