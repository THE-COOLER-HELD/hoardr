import React from "react";
import useHomepage from "../../hooks/useHomepage";

const AddPaymentDate = ({ setOpenDate, setNextDate }) => {
  const { changeDate, submitNewDate, newNextPaymentDate } = useHomepage();
  return (
    <div className="change-date-modal">
      <h1 className="income-head">Update Your Next Payment Date</h1>
      <form
        onSubmit={(e) => submitNewDate(e, setOpenDate, setNextDate)}
        className="change-date-form"
      >
        <label>When is your next payment date?</label>
        <input
          onChange={changeDate}
          type="date"
          aria-label="date of income"
          value={newNextPaymentDate}
        ></input>

        <button type="submit" className="change-date-button">
          Add new date!
        </button>
      </form>
    </div>
  );
};

export default AddPaymentDate;
