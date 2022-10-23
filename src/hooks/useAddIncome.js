import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { addTransaction } from "../supabaseQueries"

const useAddIncome = () => {
    const [expense, setExpense] = useState({ category: null, isOutgoing: false, description: "" })
    const { user } = useContext(UserContext)

    const onChange = (key, value) => {
        setExpense((currentState) => {
            const expense = { ...currentState }
            expense[key] = value
            return expense
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const expenseCopy = { ...expense }
        expenseCopy.uuid = user.id
        addTransaction(expenseCopy).then((data) => {
        })
    }

    return { onChange, onSubmit }
}

export default useAddIncome