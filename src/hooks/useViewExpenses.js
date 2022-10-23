import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { viewTransactions } from "../supabaseQueries";

const useViewExpenses = () => {
	const { user } = useContext(UserContext);
	const [filter, setFilter] = useState(null);
	const [openExpense, setOpenExpense] = useState(false);
	const [openIncome, setOpenIncome] = useState(false);
	const [openSavings, setOpenSavings] = useState(false);
	const [expensesList, setExpensesList] = useState([]);

	useEffect(() => {
		if (user.id) {
			viewTransactions(user.id, filter).then((data) => {
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
		if (openIncome || openSavings) {
			setOpenIncome(false);
			setOpenSavings(false);
		}
		setOpenExpense(!openExpense);
	}

	function toggleIncomeModal() {
		if (openExpense || openSavings) {
			setOpenExpense(false);
			setOpenSavings(false);
		}
		setOpenIncome(!openIncome);
	}

	function toggleSavingsModal() {
		if (openSavings || openExpense) {
			setOpenExpense(false);
			setOpenIncome(false);
		}
		setOpenSavings(!openSavings);
	}

	return {
		openExpense,
		openIncome,
		toggleExpenseModal,
		toggleIncomeModal,
		expensesList,
		filterTransactions,
		toggleSavingsModal,
		openSavings
	};
};

export default useViewExpenses;
