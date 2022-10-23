import React, {useEffect, useContext, useState} from "react";
import useHomepage from "../../hooks/useHomepage";
import { calcTotals } from "../../supabaseQueries"
import UserContext from "../../contexts/UserContext";
import PotOfGold from "../../assets/potogold.png"

function SavingsPot() {
    const { user } = useContext(UserContext)

  const {
    availableFunds,
    nextPaymentDate,
    setAvailableFunds,
    setNextPaymentDate,
    shakeTheBoy
  } = useHomepage();

useEffect(() => {
    calcTotals(user.id).then((data) => {
        setAvailableFunds(data[1]-data[0])
    }).catch((err) => {
        console.log(err)
    })
}, [])

  return (
      <section className="funds-text">
        <img src={PotOfGold} width="250"/>
        <p className="available-funds-p">
          You have £{availableFunds} left until <br />
          {nextPaymentDate.toDateString("dd/mm/yyyy")}
        </p>

        <button onClick={shakeTheBoy} className="feed-button">
          Feed £1
        </button>
      </section>
  );
}

export default SavingsPot;
