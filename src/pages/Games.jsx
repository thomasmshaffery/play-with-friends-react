import PageNav from "../components/PageNav";
import styles from "./Games.module.css";

function Games({ games, onAddGame, onRemoveGame, numOfGames }) {
  return (
    <main className={styles.games}>
      <PageNav />
      Your games here!
    </main>
  );
}
export default Games;
