import React, { useEffect } from "react";
import DragonHappy from "../../assets/dragon-happy.gif";
import DragonHearts from "../../assets/dragon-hearts.gif";
import DragonNeutral from "../../assets/dragon-neutral.gif";
import DragonSad from "../../assets/dragon-sad.gif";
import Chart from "react-apexcharts";
import SavingsPot from "../SavingsPot/SavingsPot";
import useHomepage from "../../hooks/useHomepage.js";

function Homepage() {
  const { options, series, boyShake, shakeTheBoy, dragon, setSeries } =
    useHomepage();

  return (
    <div className="homepage">
      <section className="chart-container">
        <img
          className={`dragon-img ${boyShake ? "shakeyBoy" : ""}`}
          alt="dragon logo"
          src={dragon}
        ></img>
        <Chart
          className="donut-chart"
          options={options}
          series={series}
          type="donut"
        ></Chart>
      </section>
      <SavingsPot shakeTheBoy={shakeTheBoy} setSeries={setSeries} />
    </div>
  );
}

export default Homepage;
