import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { addToSavings, getUser, withdrawFromSavings } from "../supabaseQueries";

const useAddSavings = (setExpensesList) => {
  const [savings, setSavings] = useState(0);
  const [amount, setAmount] = useState(0);

  const { user } = useContext(UserContext);

  useEffect(() => {
    getUser(user.id).then(([user]) => {
      setSavings(user.savings);
    });
  }, []);

  const addSavings = async (e) => {
    e.preventDefault();
    const newTransaction = await addToSavings(user.id, amount);

    setExpensesList((currExp) => [newTransaction[0], ...currExp]);
  };

  const withdrawSavings = async (e) => {
    e.preventDefault();
    const newTransaction = await withdrawFromSavings(user.id, amount);

    setExpensesList((currExp) => [newTransaction[0], ...currExp]);
  };

  return { savings, setAmount, addSavings, withdrawSavings };
};

export default useAddSavings;
