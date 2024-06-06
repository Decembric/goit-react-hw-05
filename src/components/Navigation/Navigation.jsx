import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import clsx from "clsx";

const Navigation = () => {

  const getActiveLink = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

  return (
    <nav className={css.nav}>
      <NavLink className={getActiveLink} to="/">HOME PAGE</NavLink>
      <NavLink className={getActiveLink} to="/movies">MOVIES PAGE</NavLink>

    </nav>
  )
}

export default Navigation