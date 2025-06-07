import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="Play With Friends"
        className={styles.logo}
      ></img>
    </Link>
  );
}

export default Logo;
