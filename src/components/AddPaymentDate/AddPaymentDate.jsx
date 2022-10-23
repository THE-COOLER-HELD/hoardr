import React from "react";
import useHomepage from "../../hooks/useHomepage";

const AddPaymentDate = () => {
	const { changeDate, submitNewDate, newNextPaymentDate } = useHomepage();
	return (
		<div className='add-income-modal'>
			<h1 className='income-head'>Update Your Next Payment Date</h1>
			<form onSubmit={submitNewDate} className='add-income-form'>
				<label>When is your next payment date?</label>
				<input
					onChange={changeDate}
					type='date'
					aria-label='date of income'
					value={newNextPaymentDate}
				></input>

				<button type='submit' className='add-hoard-button'>
					Add new date!
				</button>
			</form>
		</div>
	);
};

export default AddPaymentDate;
