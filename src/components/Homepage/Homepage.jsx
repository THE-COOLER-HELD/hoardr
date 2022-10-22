import React from "react";
import Dragon from "../../assets/dragon-with-the-coin.png";
import Chart from "react-apexcharts";
import { useState } from "react";

function Homepage() {
  const [options, setOptions] = useState({
    labels: ["Spend", "B", "C", "D", "E"],
  });
  const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [maxFunds, setMaxFunds] = useState(1000);
  const [availableFunds, setAvailableFunds] = useState(1000);

  const [nextPaymentDate, setNextPaymentDate] = useState(
    new Date(Date.now() + 604800000)
  );
  console.log(nextPaymentDate);

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
    <div>
      <section>
        <img src={Dragon} height="500" width="500"></img>
        <Chart options={options} series={series} type="donut" width="500" />

        <form>
          <label>
            You have £{availableFunds} left until{" "}
            {nextPaymentDate.toDateString("dd/mm/yyyy")}
          </label>
        </form>
      </section>
    </div>
  );
}

export default Homepage;