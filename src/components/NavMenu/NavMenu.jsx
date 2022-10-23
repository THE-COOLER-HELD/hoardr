import React from "react";
import useNavMenu from "../../hooks/useNavMenu";

function NavMenu() {
  const { open, navigateTo, toggleMenu } = useNavMenu();

  return (
    <div className="header-container">
      <section className="header-bar">
        <h1 className="hoardr-text">hoardr</h1>
        <button onClick={toggleMenu} className="nav-menu-toggle">
          {open ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </button>
      </section>
      {open && (
        <ul className="nav-list">
          <button className="nav-button" onClick={navigateTo("/")}>
            Home
          </button>

          <button className="nav-button" onClick={navigateTo("/expenses")}>
            Hoard
          </button>

          <button className="nav-button">Log Out</button>
        </ul>
      )}
    </div>
  );
}

export default NavMenu;
