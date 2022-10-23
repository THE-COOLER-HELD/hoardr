import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { addToSavings, getUser, withdrawFromSavings } from "../supabaseQueries";

const useAddSavings = () => {
	const [savings, setSavings] = useState(0);
	const [amount, setAmount] = useState(0);

	const { user } = useContext(UserContext);

	useEffect(() => {
		getUser(user.id).then(([user]) => {
			console.log({ user });
			setSavings(user.savings);
		});
	}, []);

	const addSavings = async (e) => {
		e.preventDefault();
		const newTransaction = await addToSavings(user.id, amount);

		return newTransaction;
	};

	const withdrawSavings = async (e) => {
		e.preventDefault();
		const newTransaction = await withdrawFromSavings(user.id, amount);

		return newTransaction;
	};

	return { savings, setAmount, addSavings, withdrawSavings };
};

export default useAddSavings;
