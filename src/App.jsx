import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm";
import SignupLogin from "./components/SignupLogin/SignupLogin";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<SignupLogin />} />
				<Route path='/signup' element={<SignupForm />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</div>
	);
}

export default App;
