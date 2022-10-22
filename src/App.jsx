
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import SignupForm from './components/SignupForm/SignupForm'
import SignupLogin from './components/SignupLogin/SignupLogin'
import LoginPage from './components/LoginPage/LoginPage'
import NavMenu from './components/NavMenu/Navmenu'
import AddExpense from './components/AddExpense/AddExpense'
import AddIncome from './components/AddIncome/AddIncome'
import ViewExpenses from './components/ViewExpenses/ViewExpenses'


function App() {

  return (
		<div className="App">
			<NavMenu />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/expenses" element={<ViewExpenses/>} />
				<Route path="/add" element={<AddIncome />} />
			</Routes>
		</div>
  );
}

export default App;
