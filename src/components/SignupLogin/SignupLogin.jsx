import React from "react";
import SignupForm from "../SignupForm/SignupForm";
import Homepage from "../Homepage/Homepage";
import MagicSignUp from "../MagicSignUp/MagicSignUp";
import useSignupLogin from "../../hooks/useSignupLogin";

function SignupLogin() {
	const { session, isSignedUp } = useSignupLogin()
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
