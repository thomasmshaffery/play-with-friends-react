import PageNav from "../components/PageNav";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <main className={styles.pagenotfound}>
      <PageNav />
      <section>
        <h1>Oops! Page Not Found!</h1>
      </section>
    </main>
  );
}
export default PageNotFound;
