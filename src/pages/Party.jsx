import PageNav from "../components/PageNav";
import styles from "./Party.module.css";

function Party() {
  return (
    <main className={styles.party}>
      <PageNav />
      <section>
        <h1>Party Creator</h1>
      </section>
    </main>
  );
}
export default Party;
