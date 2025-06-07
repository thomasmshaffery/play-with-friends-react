import { useState } from "react";
import Find from "../components/Find";
import PageNav from "../components/PageNav";
import Search from "../components/Search";
import styles from "./FindFriends.module.css";

function FindFriends() {
  const [query, setQuery] = useState([]);

  return (
    <main className={styles.findfriends}>
      <PageNav />
      <section>
        <h1>Let's find your friends!</h1>
        <br />
        <h2>
          <span>Step 1:</span> Find your friends Steam ID using{" "}
          <a href="https://steamcommunity.com/search/users" target="_blank">
            {" "}
            this tool
          </a>
          .<br />
          <br />
          <span>Step 2:</span> Paste your friends Steam ID into the search bar.{" "}
          <br />
          <br />
          <span>Step 3:</span> Find your friend!
        </h2>
        <Search query={query} setQuery={setQuery} />
        <Find query={query} />
      </section>
    </main>
  );
}

export default FindFriends;
