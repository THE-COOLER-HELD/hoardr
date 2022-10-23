
import { useState, useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import SignupForm from "./components/SignupForm/SignupForm";
import SignupLogin from "./components/SignupLogin/SignupLogin";
import LoginPage from "./components/LoginPage/LoginPage";

import NavMenu from "./components/NavMenu/NavMenu.jsx";
import AddIncome from "./components/AddIncome/AddIncome";
import ViewExpenses from "./components/ViewExpenses/ViewExpenses";
import UserContext from "./contexts/UserContext";
import AddExpense from "./components/AddExpense/AddExpense";

function App() {
	const [user, setUser] = useState({});
  console.log(user)
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<div className='App'>
				<NavMenu />
				<Routes>
					<Route path='/' element={<SignupLogin />} />
					<Route path='/signup' element={<SignupForm />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/expenses' element={<ViewExpenses />} />
					<Route path='/add' element={<AddIncome />} />
				</Routes>
			</div>
		</UserContext.Provider>
	);

}

export default App;
