import React from "react";
import Dragon from "../../assets/dragon-with-the-coin.png";
import Chart from "react-apexcharts";
import { useState } from "react";

function Homepage() {
  const [options, setOptions] = useState({labels: ["Spend", "B", "C", "D", "E"]});
  const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [allowance, setAllowance] = useState()

  return (
    <div>
      <section>
        <img src={Dragon} height="500" width="500"></img>
        <Chart options={options} series={series} type="donut" width="500" />
      </section>


    </div>
  );
}

export default Homepage;
