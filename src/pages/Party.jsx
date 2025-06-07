import { useState } from "react";
import PageNav from "../components/PageNav";
import Search from "../components/Search";
import styles from "./Party.module.css";
import Find from "../components/Find";

function Party({ partyMembers, partySize }) {
  const [query, setQuery] = useState("");
  return (
    <main className={styles.party}>
      <PageNav />
      <section>
        {partySize > 0 ? (
          (<h1>Here are your party members:</h1>)(
            partyMembers.map((member) => console.log(member.name))
          )
        ) : (
          <h1>There is no one in your party! 🥺</h1>
        )}
        <Search query={query} setQuery={setQuery} />
        <Find />
      </section>
    </main>
  );
}
export default Party;
