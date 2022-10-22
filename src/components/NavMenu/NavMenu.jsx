import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import AddExpense from '../AddExpense/AddExpense';
import AddIncome from '../AddIncome/AddIncome';
import ViewExpenses from '../ViewExpenses/ViewExpenses';


function NavMenu() {
    const [open, setOpen] = useState(false);
    function toggleMenu() {
        console.log(open, "<<<<<")
        setOpen(!open)
    }
    if (open) {
        return (
            <div>
			<button onClick={toggleMenu}>
				<span className="material-symbols-outlined">menu</span>
                </button>
                <ul>
                    <Link to='/' ><button>Home</button></Link>
                    <Link to='/expenses' ><button>Hoard</button></Link> 
                    <button>Log Out</button>
                </ul>
            </div>
		);
    } else {
        return (
              <div>
                  <button onClick={toggleMenu}>
                      <span className="material-symbols-outlined">menu</span>
                  </button>
              </div>
        );
    }
}

export default NavMenu