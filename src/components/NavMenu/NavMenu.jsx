import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function NavMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function navigateTo(path) {
    return function () {
      navigate(path);
      setOpen(false);
    };
  }

  function toggleMenu() {
    setOpen(!open);
  }
  if (open) {
    return (
      <div className="header-container">
        <section className="header-bar">
          <h1 className="hoardr-text">Hoardr</h1>
          <button onClick={toggleMenu}>
            {open ? (
              <span class="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </button>
        </section>
        <ul className="nav-list">
          <button className="nav-button" onClick={navigateTo("/")}>
            Home
          </button>

          <button className="nav-button" onClick={navigateTo("/expenses")}>
            Hoard
          </button>

          <button className="nav-button">Log Out</button>
        </ul>
        <section></section>
      </div>
    );
  } else {
    return (
      <div className="header-container">
        <section className="header-bar">
          <h1 className="hoardr-text">Hoardr</h1>
          <button onClick={toggleMenu}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </section>
      </div>
    );
  }
}

export default NavMenu;
