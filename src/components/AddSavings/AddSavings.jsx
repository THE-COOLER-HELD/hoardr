import React from "react";
import useAddSavings from "../../hooks/useAddSavings";

const AddSavings = () => {
	const { savings, setAmount, addSavings, withdrawSavings } = useAddSavings();
	return (
		<div className='add-savings-modal'>
			<h1 className='income-head'>Savings</h1>
			<form className='savings-form'>
				<p>Savings:</p>
				<p>£{savings}</p>
				<label> How much?</label>
				<input
					onChange={(event) => {
						setAmount(event.target.value);
					}}
					type='number'
					aria-label='amount of money to add'
				></input>

				<button onClick={addSavings} className='savings-button'>
					Add
				</button>
				<button onClick={withdrawSavings} className='savings-button'>
					Withdraw
				</button>
			</form>
		</div>
	);
};

export default AddSavings;
