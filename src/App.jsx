import { BrowserRouter, Routes, Route } from "react-router-dom";
import Party from "./pages/Party";
import Homepage from "./pages/Homepage";
import Games from "./pages/Games";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import FindFriends from "./pages/FindFriends";

function App() {
  const [partyMembers, setPartyMembers] = useState([]);
  const [games, setGames] = useState([]);
  const partySize = partyMembers.length;
  const numOfGames = games.length;

  function handleAddPartyMember(member) {
    setPartyMembers((partyMembers) => [...partyMembers, member]);
  }

  function handleRemovePartyMember(id) {
    setPartyMembers((partyMembers) =>
      partyMembers.filter((member) => member.id !== id)
    );
  }

  function handleAddGame(game) {
    setGames([...games, game]);
  }

  function handleRemoveGame(id) {
    setGames((games) => games.filter((game) => game.id !== id));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="findfriends" element={<FindFriends />} />
        <Route
          path="party"
          element={
            <Party
              partyMembers={partyMembers}
              onAddPartyMember={handleAddPartyMember}
              onRemovePartyMember={handleRemovePartyMember}
              partySize={partySize}
            />
          }
        />
        <Route
          path="games"
          element={
            <Games
              games={games}
              onAddGame={handleAddGame}
              onRemoveGame={handleRemoveGame}
              numOfGames={numOfGames}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
