import { useState, useContext } from "react";
import { createUser } from "../supabaseQueries";
import UserContext from "../contexts/UserContext";

const useSignupForm = () => {
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
    
    return { name, currAmount, nextPaymentDate, onSubmit }
}

export default useSignupForm