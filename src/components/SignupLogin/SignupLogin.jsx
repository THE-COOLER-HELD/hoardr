import React, { useState, useEffect } from "react";
import SignupForm from "../SignupForm/SignupForm";
import Homepage from "../Homepage/Homepage";
import { supabase } from "../../superbaseClient";
import { getUser } from "../../supabaseQueries";
import MagicSignUp from "../MagicSignUp/MagicSignUp";

function SignupLogin() {
	const [session, setSession] = useState(null);
	const [isSignedUp, setIsSignedUp] = useState(false);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			getUser(session?.user?.id).then((userData) => {
				if (userData) setIsSignedUp(true);
			});
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			getUser(session?.user?.id).then((userData) => {
				if (userData) setIsSignedUp(true);
			});
		});
	}, []);

	return (
		<div>
			{isSignedUp ? (
				<Homepage key={session.user.id} session={session} />
			) : session ? (
				<SignupForm key={session.user.id} session={session} />
			) : (
				<MagicSignUp />
			)}
		</div>
	);
}

export default SignupLogin;
