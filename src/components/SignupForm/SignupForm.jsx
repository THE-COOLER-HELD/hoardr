import React from "react";
import { useState } from "react";

function SignupForm() {
  const [accountCreated, setAccountCreated] = useState(false);

  if (!accountCreated) {
    return (
      <div>
        <button onClick={() => setAccountCreated(true)}>Create Account</button>
      </div>
    );
  }

  return (
    <div>
      <form>
        <label>What should we call you?</label>
        <input type="text"></input>
        <label>What's your current hoard?</label>
        <p>£</p>
        <input type="number"></input>
        <label>On what day will your funds get replenished?</label>
        <input type="date"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
