import React from "react";
import Dragon from "../../assets/dragon-with-the-coin.png";
import Chart from "react-apexcharts";
import { useState } from "react";

function Homepage() {
  const [options, setOptions] = useState({
    labels: ["Spend", "B", "C", "D", "E"],
  });
  const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [availableFunds, setAvailableFunds] = useState(1000);

  const [length, setLength] = useState("m"); // m, w, d

  const [nextPaymentDate, setNextPaymentDate] = useState(
    new Date(Date.now() + 604800000)
  );
  console.log(nextPaymentDate);

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
