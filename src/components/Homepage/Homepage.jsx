import React, { useEffect } from "react";
import DragonHappy from "../../assets/dragon-happy.gif";
import DragonHearts from "../../assets/dragon-hearts.gif";
import DragonNeutral from "../../assets/dragon-neutral.gif";
import DragonSad from "../../assets/dragon-sad.gif";
import Chart from "react-apexcharts";
import useHomepage from "../../hooks/useHomepage.js"

function Homepage() {
  const { options, series, maxFunds, availableFunds, nextPaymentDate, boyShake, shakeTheBoy, chooseDragon } = useHomepage()

  return (
    <div className="homepage">
      <section className="chart-container">
        <img
          className={`dragon-img ${boyShake ? "shakeyBoy" : ""}`}
          alt="dragon logo"
          src={DragonHappy}
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
