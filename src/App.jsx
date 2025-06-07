import { BrowserRouter, Routes, Route } from "react-router-dom";
import Party from "./pages/Party";
import Homepage from "./pages/Homepage";
import Games from "./pages/Games";
import PageNotFound from "./pages/PageNotFound";
import { useReducer } from "react";

const initialState = {
  partyMembers: [
    // {
    //   name: "tom",
    //   age: 34,
    // },
    // {
    //   name: "matt",
    //   age: 35,
    // },
    // {
    //   name: "Mooch",
    //   age: "babby",
    // },
    // {
    //   name: "Noodles",
    //   age: "babby",
    // },
  ],
  games: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addUser":
      return {
        ...state,
        partySize: state.partySize + 1,
      };
    default:
      return { state };
  }
}

function App() {
  const [{ partyMembers, games }, dispatch] = useReducer(reducer, initialState);
  const partySize = partyMembers.length;
  const numOfGames = games.length;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="party"
          element={
            <Party
              partyMembers={partyMembers}
              partySize={partySize}
              dispatch={dispatch}
            />
          }
        />
        <Route
          path="games"
          element={
            <Games games={games} numOfGames={numOfGames} dispatch={dispatch} />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
