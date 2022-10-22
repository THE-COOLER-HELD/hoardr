import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import IncomePage from "./components/IncomePage/IncomePage";
import AddExpense from "./components/AddExpense/AddExpense";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AddExpense />
    </div>
  );
}

export default App;
