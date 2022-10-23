import { useState } from "react"

const useViewExpenses = () => {
    const [openExpense, setOpenExpense] = useState(false);
    const [openIncome, setOpenIncome] = useState(false);
    const [expensesList, setExpensesList] = useState([
        {
            description: "Hamster",
            category: "Lifestyle",
            amount: "5",
            necessary: true,
            date: new Date(Date.now()).toLocaleDateString("EN", "dd/mm/yy"),
            outgoing: true,
        },
        {
            description: "I went to the market and bought an egg",
            category: "Food",
            amount: "0.72",
            necessary: true,
            date: new Date(Date.now()).toLocaleDateString("EN", "dd/mm/yy"),
            outgoing: true,
        },
    ]);

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

    return { openExpense, openIncome, toggleExpenseModal, toggleIncomeModal, expensesList }

}

export default useViewExpenses