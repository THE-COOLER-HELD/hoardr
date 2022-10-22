import React from "react";
import SignupForm from "../SignupForm/SignupForm";
import LoginPage from "../LoginPage/LoginPage";
import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

function SignupLogin() {
	const [session, setSession] = useState(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	return (
		<div className='container' style={{ padding: "50px 0 100px 0" }}>
			{!session ? (
				<SignupForm />
			) : (
				<LoginPage key={session.user.id} session={session} />
			)}
		</div>
	);
}

export default SignupLogin;
