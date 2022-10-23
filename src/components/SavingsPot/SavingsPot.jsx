import React, {useEffect, useContext, useState} from "react";
import useHomepage from "../../hooks/useHomepage";
import { calcTotals } from "../../supabaseQueries"
import UserContext from "../../contexts/UserContext";
import PotOfGold from "../../assets/potogold.png"

function SavingsPot() {
  const { user } = useContext(UserContext)
  const [showSavings, setShowSavings] = useState(false);

  const {
    availableFunds,
    nextPaymentDate,
    setAvailableFunds,
    shakeTheBoy
  } = useHomepage();

  function toggleSavings(event) {
    setShowSavings(!showSavings)
  }

useEffect(() => {
    calcTotals(user.id).then((data) => {
        setAvailableFunds(data[1]-data[0])
    }).catch((err) => {
        console.log(err)
    })
}, [])

  return (
      <section className="funds-text">
      <img onClick={toggleSavings} className="potogold" src={PotOfGold} />
      {showSavings && <p className="savings-desc">£{user.savings} in the pot!</p>}
        <p className="available-funds-p">
          You have £{availableFunds} left until <br />
          {nextPaymentDate}
        </p>

        <button onClick={shakeTheBoy} className="feed-button">
          Feed £1
        </button>
      </section>
  );
}

export default SavingsPot;
