import React from "react";
import { Link } from "react-router-dom";

function SignupLogin() {
  return (
    <div>
      <form>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </form>
    </div>
  );
}

export default SignupLogin;
