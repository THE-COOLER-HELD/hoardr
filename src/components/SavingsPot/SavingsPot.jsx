import React, { useEffect, useContext, useState } from "react";
import useHomepage from "../../hooks/useHomepage";
import { calcTotals } from "../../supabaseQueries";
import UserContext from "../../contexts/UserContext";
import PotOfGold from "../../assets/potogold.png";
import { addToSavings } from "../../supabaseQueries";

function SavingsPot({ setSeries }) {
  const { user } = useContext(UserContext);
  const [showSavings, setShowSavings] = useState(false);

  const { availableFunds, nextPaymentDate, setAvailableFunds, setBoyShake } =
    useHomepage();

  function toggleSavings(event) {
    setShowSavings(!showSavings);
  }
  function shakeTheBoy() {
    setBoyShake(true);
    addToSavings(user.id, 1).then((data) => {
      console.log({ data }, "in the shaekboy");
      setSeries((currSeries) => {
        console.log(currSeries);
        const copy = [...currSeries];
        copy[0] += 2;
        return copy;
      });
      setAvailableFunds(availableFunds - 2);
    });
  }

  useEffect(() => {
    calcTotals(user.id)
      .then((data) => {
        setAvailableFunds(data[1] - data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="funds-text">
      <img onClick={toggleSavings} className="potogold" src={PotOfGold} />
      {showSavings && (
        <p className="savings-desc">£{user.savings} in the pot!</p>
      )}
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
