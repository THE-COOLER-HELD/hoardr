import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { viewTransactions } from "../supabaseQueries";

const useViewExpenses = () => {
	const { user } = useContext(UserContext);
	const [filter, setFilter] = useState(null);
	const [openExpense, setOpenExpense] = useState(false);
	const [openIncome, setOpenIncome] = useState(false);
	const [expensesList, setExpensesList] = useState([]);
	console.log(user);

	useEffect(() => {
		if (user.id) {
			viewTransactions(user.id, filter).then((data) => {
				console.log({ data });
				setExpensesList(data);
			});
		}
	}, [filter]);

	function filterTransactions(event) {
		if (event.target.value === "Outgoing") {
			setFilter(true);
		} else {
			setFilter(false);
		}
	}

	function toggleExpenseModal() {
		if (openIncome) {
			setOpenIncome(!openIncome);
		}
		setOpenExpense(!openExpense);
	}

	function toggleIncomeModal() {
		if (openExpense) {
			setOpenExpense(!openExpense);
		}
		setOpenIncome(!openIncome);
	}

	return {
		openExpense,
		openIncome,
		toggleExpenseModal,
		toggleIncomeModal,
		expensesList,
		filterTransactions
	};
};

export default useViewExpenses;
