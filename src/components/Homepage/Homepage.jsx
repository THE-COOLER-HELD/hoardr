import React, { useEffect } from "react";
import Dragon from "../../assets/dragon-with-the-coin.png";
import Chart from "react-apexcharts";
import { useState } from "react";

function Homepage() {
  const [options, setOptions] = useState({
    legend: { show: false },
    labels: ["Spent", "Left", "Savings"],
  });
  const [series, setSeries] = useState([24, 50, 20]);
  const [maxFunds, setMaxFunds] = useState(1000);
  const [availableFunds, setAvailableFunds] = useState(1000);

  const [nextPaymentDate, setNextPaymentDate] = useState(
    new Date(Date.now() + 604800000)
  );

  const [boyShake, setBoyShake] = useState(false);

  useEffect(() => {
    if (boyShake) {
      setTimeout(() => {
        setBoyShake(false);
      }, 1500);
    }
  }, [boyShake]);

  function shakeTheBoy() {
    setBoyShake(true);
  }

  function chooseDragon() {
    const percentage = maxFunds / availableFunds;
    const thirdOfMax = maxFunds / 3;
    if (percentage > thirdOfMax * 2) {
      return Dragon1;
    }

    if (percentage > thirdOfMax) {
      return Dragon2;
    }

    if (percentage < thirdOfMax) {
      return Dragon3;
    }
  }
  return (
    <div className="homepage">
      <section className="chart-container">
        <img
          className={`dragon-img ${boyShake ? "shakeyBoy" : ""}`}
          alt="dragon logo"
          src={Dragon}
        ></img>
        <Chart
          className="donut-chart"
          options={options}
          series={series}
          type="donut"
        ></Chart>
      </section>
      <section className="funds-text">
        <p className="available-funds-p">
          You have £{availableFunds} left until <br />
          {nextPaymentDate.toDateString("dd/mm/yyyy")}
        </p>

        <button onClick={shakeTheBoy} className="feed-button">
          Feed £1
        </button>
      </section>
    </div>
  );
}

export default Homepage;
