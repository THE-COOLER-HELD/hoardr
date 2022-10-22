import React from "react";

function IncomePage() {
  return (
    <div>
      <h1>Income</h1>
      <form onSubmit={}>
        <label>What is your income?</label>
        <p>£</p>
        <input type="number" placeholder="0"></input><br></br>
        <label>When is your next income payment?</label>
        <input type="date"></input>
        <label>Show me my remaining allowance;</label>
        <input type="radio" value="daily"></input>
        <label>Daily</label>
        <input type="radio" value="weekly"></input>
        <label>Weekly</label>
        <input type="radio" value="monthly"></input>
        <label>Monthly</label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default IncomePage;
