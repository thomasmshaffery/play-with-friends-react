import PageNav from "../components/PageNav";
import styles from "./Party.module.css";

function Party({ partyMembers, partySize, dispatch }) {
  return (
    <main className={styles.party}>
      <PageNav />
      <section>
        {partySize > 0 ? (
          (<h1>Here are your party members:</h1>)(
            partyMembers.map((member) => console.log(member.name))
          )
        ) : (
          <h1>There is no one in your party!</h1>
        )}
      </section>
    </main>
  );
}
export default Party;
