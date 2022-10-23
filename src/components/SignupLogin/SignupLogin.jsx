import React from "react";
import SignupForm from "../SignupForm/SignupForm";

import MagicSignUp from "../MagicSignUp/MagicSignUp";
import useSignupLogin from "../../hooks/useSignupLogin";

function SignupLogin() {
  const { session, isSignedUp } = useSignupLogin();
  return (
    <div>
      {!session ? <MagicSignUp /> : !isSignedUp ? <SignupForm /> : null}
    </div>
  );
}

export default SignupLogin;
