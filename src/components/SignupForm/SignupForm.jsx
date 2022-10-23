import React from "react";
import useSignupForm from "../../hooks/useSignupForm";

function SignupForm({ session }) {
	const { name, currAmount, nextPaymentDate, onSubmit } = useSignupForm()

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label>What should we call you?</label>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				></input>
				<label>What's your current hoard?</label>
				<p>£</p>
				<input
					type='number'
					value={currAmount}
					onChange={(e) => setCurrAmount(e.target.value)}
				></input>
				<label>On what day will your funds get replenished?</label>
				<input
					type='date'
					value={nextPaymentDate}
					onChange={(e) => setNextPaymentDate(e.target.value)}
				></input>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default SignupForm;
