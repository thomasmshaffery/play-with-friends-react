import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/party">Party</NavLink>
        </li>
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;
