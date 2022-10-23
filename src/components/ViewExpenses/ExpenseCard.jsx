import React, { useState } from "react";

function ExpenseCard({
  expense: { description, category, amount, necessary, date, outgoing },
}) {
  const [showInfo, setShowInfo] = useState(false);

  //transaction_id, INT
  //category TEXT *
  //amount FLOAT *
  //user_id STR
  //necessary BOOL *
  //description STR *
  //date TIMESTAMP *
  //outgoing BOOL
  function toggleInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <>
      <div className="expense-card">
        <p>{new Date(date).toDateString("dd-mm-yy")}</p>
        <p>{category}</p>
        <p>£{amount}</p>
        <p>{outgoing ? "OUT" : "IN"}</p>
        <button className="expand-button" onClick={toggleInfo}>
          {showInfo ? "-" : "+"}
        </button>
      </div>
      {showInfo && (
        <div className="expense-info">
          <p>Description</p>
          <p>{description}</p>
        </div>
      )}
    </>
  );
}

export default ExpenseCard;
