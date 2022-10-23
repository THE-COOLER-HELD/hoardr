import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import SignupForm from "../SignupForm/SignupForm";
import Homepage from "../Homepage/Homepage";
import { supabase } from "../../superbaseClient";
import { getUser } from "../../supabaseQueries";
import MagicSignUp from "../MagicSignUp/MagicSignUp";

function SignupLogin() {
	const [session, setSession] = useState(null);
	const [isSignedUp, setIsSignedUp] = useState(false);
	const { user, setUser } = useContext(UserContext);
	console.log({ user });

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

	return (
		<div>
			{isSignedUp ? (
				<Homepage session={session} />
			) : session ? (
				<SignupForm session={session} />
			) : (
				<MagicSignUp />
			)}
		</div>
	);
}

export default SignupLogin;
