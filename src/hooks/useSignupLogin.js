import { useState, useEffect, useContext } from "react"
import UserContext from "../contexts/UserContext";
import { supabase } from "../superbaseClient";
import { getUser } from "../supabaseQueries";

const useSignupLogin = () => {
    const [session, setSession] = useState(null);
	const [isSignedUp, setIsSignedUp] = useState(false);
	const { setUser } = useContext(UserContext);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	useEffect(() => {
		if (session) {
			getUser(session.user.id).then((userData) => {
				console.log(userData)
				if (userData.length > 0) {
					setIsSignedUp(true);
					setUser(userData[0]);
				}
			});
		}
	}, [session]);

    return { session, isSignedUp }

}

export default useSignupLogin