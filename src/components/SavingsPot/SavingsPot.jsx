import React, { useEffect, useContext, useState } from "react";
import useHomepage from "../../hooks/useHomepage";
import { calcTotals } from "../../supabaseQueries";
import UserContext from "../../contexts/UserContext";
import PotOfGold from "../../assets/potogold.png";
import AddPaymentDate from "../AddPaymentDate/AddPaymentDate";
import { addToSavings } from "../../supabaseQueries";

function SavingsPot({ setSeries, shakeTheBoy }) {
  const { user } = useContext(UserContext);
  const [showSavings, setShowSavings] = useState(false);
  const [savings, setSavings] = useState(0);
  const {
    availableFunds,

    setAvailableFunds,
    setBoyShake,
    openDate,
    setOpenDate,
    nextDate,
    setNextDate,
  } = useHomepage();

  useEffect(() => {
    if (user.id) {
      setSavings(user.savings);
    }
  }, []);

  function toggleSavings(event) {
    setShowSavings(!showSavings);
  }

  useEffect(() => {
    calcTotals(user.id)
      .then((data) => {
        setAvailableFunds(data[1] - data[0]);
      })
      .catch((err) => {});
  }, []);

  return (
    <section className="funds-text">
      <img onClick={toggleSavings} className="potogold" src={PotOfGold} />
      {showSavings && <p className="savings-desc">£{savings} in the pot!</p>}
      <p className="available-funds-p">
        You have £{availableFunds} left until <br />
        {nextDate}{" "}
        <button className="date-button" onClick={() => setOpenDate(!openDate)}>
          ✏️
        </button>
      </p>
      {openDate && (
        <AddPaymentDate setOpenDate={setOpenDate} setNextDate={setNextDate} />
      )}

      <button
        onClick={() => shakeTheBoy(setSavings, savings)}
        className="feed-button"
      >
        Feed £1
      </button>
    </section>
  );
}

export default SavingsPot;
