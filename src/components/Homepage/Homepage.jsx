import React from "react";
import Dragon from "../../assets/dragon-with-the-coin.png";
import Chart from "react-apexcharts";
import { useState } from "react";

function Homepage() {
  const [options, setOptions] = useState({
    legend: { show: false },
    labels: ["Spent", "Left"],
  });
  const [series, setSeries] = useState([24, 50]);
  const [maxFunds, setMaxFunds] = useState(1000);
  const [availableFunds, setAvailableFunds] = useState(1000);

  const [nextPaymentDate, setNextPaymentDate] = useState(
    new Date(Date.now() + 604800000)
  );

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
        <img className="dragon-img" alt="dragon logo" src={Dragon}></img>
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
      </section>
    </div>
  );
}

export default Homepage;
