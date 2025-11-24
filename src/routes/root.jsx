import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./root.css";

export default function Root() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/arts"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Arts
        </NavLink>
        <NavLink
          to="/kupata"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          to get Art
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          
        </NavLink>
      </nav>
      <hr />
      <Outlet /> {/* Renders child routes here */}
    </>
  );
}
