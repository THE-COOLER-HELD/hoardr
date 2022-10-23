import React, { useEffect, useContext, useState } from "react";
import useHomepage from "../../hooks/useHomepage";
import { calcTotals } from "../../supabaseQueries";
import UserContext from "../../contexts/UserContext";
import PotOfGold from "../../assets/potogold.png";
import { addToSavings } from "../../supabaseQueries";

function SavingsPot({ setSeries }) {
  const { user } = useContext(UserContext);
  const [showSavings, setShowSavings] = useState(false);
  const [savings, setSavings] = useState(0);
  const { availableFunds, nextPaymentDate, setAvailableFunds, setBoyShake } =
    useHomepage();

  useEffect(() => {
    if (user.id) {
      setSavings(user.savings);
    }
  }, []);

  function toggleSavings(event) {
    setShowSavings(!showSavings);
  }
  function shakeTheBoy() {
    setBoyShake(true);
    addToSavings(user.id, 1).then((data) => {
      setSeries((currSeries) => {
        const copy = [...currSeries];
        copy[0] += 2;
        return copy;
      });
      setAvailableFunds(availableFunds - 2);
      setSavings(savings + 2);
    });
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
        {nextPaymentDate}
      </p>

      <button onClick={shakeTheBoy} className="feed-button">
        Feed £2
      </button>
    </section>
  );
}

export default SavingsPot;
