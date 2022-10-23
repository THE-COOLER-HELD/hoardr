import { useState, useEffect } from "react";
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
import SessionContext from "./contexts/SessionContext";
import AddExpense from "./components/AddExpense/AddExpense";

function App() {
	const [user, setUser] = useState({});
	const [session, setSession] = useState({});

	useEffect(() => {
		if (!user.id) {
			const sessionUser = window.sessionStorage.getItem("user");
			setUser(JSON.parse(sessionUser));
		}
		if (user.id) {
			window.sessionStorage.setItem("user", JSON.stringify(user));
		}
	}, [user]);

	return (
		<SessionContext.Provider value={{ session, setSession }}>
			<UserContext.Provider value={{ user, setUser }}>
				<div className='App'>
					<NavMenu user={user} />
					<Routes>
						{!user.id ? (
							<>
								<Route path='/' element={<SignupLogin />} />
								<Route path='/signup' element={<SignupForm />} />
								<Route path='/login' element={<LoginPage />} />
							</>
						) : (
							<>
								<Route path='/' element={<Homepage />} />
								<Route path='/expenses' element={<ViewExpenses />} />
								<Route path='/add' element={<AddIncome />} />
							</>
						)}
					</Routes>
				</div>
			</UserContext.Provider>
		</SessionContext.Provider>
	);
}

export default App;
