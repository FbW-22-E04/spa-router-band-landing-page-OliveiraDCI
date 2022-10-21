import { Outlet, NavLink } from "react-router-dom";

function Header() {
  return (
    <main>
      <header>
        <div className="img">
          <img
            className="logo"
            src="https://metallica.com/on/demandware.static/Sites-Metallica-Site/-/default/dw815c8465/images/header/logo-homepage.svg"
            alt="Metallica logo"
          />
        </div>
        <ul>
          <NavLink
            to="/james"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            James
          </NavLink>
          <span>|</span>
          <NavLink
            to="/lars"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Lars
          </NavLink>
          <span>|</span>
          <NavLink
            to="/kirk"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Kirk
          </NavLink>
          <span>|</span>
          <NavLink
            to="/robert"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Robert
          </NavLink>
        </ul>
      </header>
      <Outlet />
    </main>
  );
}

export default Header;
