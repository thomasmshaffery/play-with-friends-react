import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>Spend less time searching and more time playing.</h1>
        <h2>
          Playing games just got easier. You can search for your friends, build
          your party and start playing faster than ever. The best part? You can
          do it all in one place.
        </h2>
        <Link to="/findfriends" className="cta">
          Get Started
        </Link>
      </section>
    </main>
  );
}
export default Homepage;
