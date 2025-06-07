import PageNav from "../components/PageNav";
import Search from "../components/Search";
import styles from "./Party.module.css";

function Party({ partyMembers, partySize }) {
  return (
    <main className={styles.party}>
      <PageNav />
      <section>
        {partySize > 0 ? (
          (<h1>Here are your party members:</h1>)(
            partyMembers.map((member) => console.log(member.name))
          )
        ) : (
          <>
            <h1>There is no one in your party! 🥺</h1>
            <h2>Let's find you some party members!</h2>
            <Search />
          </>
        )}
      </section>
    </main>
  );
}
export default Party;
