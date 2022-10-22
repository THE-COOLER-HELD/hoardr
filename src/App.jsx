import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm";
import SignupLogin from "./components/SignupLogin/SignupLogin";
import LoginPage from "./components/LoginPage/LoginPage";
import UserContext from "./contexts/UserContext";

function App() {
	const [user, setUser] = useState({});
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<div className='App'>
				<Routes>
					<Route path='/' element={<SignupLogin />} />
					<Route path='/signup' element={<SignupForm />} />
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</div>
		</UserContext.Provider>
	);
}

export default App;
