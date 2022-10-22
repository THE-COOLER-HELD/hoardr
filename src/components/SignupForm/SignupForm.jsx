import React from "react";
import { useState, useContext } from "react";
import { createUser } from "../../supabaseQueries";
import UserContext from "../../contexts/UserContext";

function SignupForm({ session }) {
	const [name, setName] = useState("");
	const [currAmount, setCurrAmount] = useState(0);
	const [nextPaymentDate, setNextPaymentDate] = useState("2000-01-01");
	const { user, setUser } = useContext(UserContext);

	const onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			id: session.user.id,
			first_name: name,
			current_funds: currAmount,
			next_payment_date: nextPaymentDate
		};

		createUser(userData)
			.then((user) => {
				setUser(user);
				setName("");
				setCurrAmount(0);
				setNextPaymentDate("2000-01-01");
			})
			.catch((e) => console.log(e));
	};

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
