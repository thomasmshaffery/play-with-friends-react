import { BrowserRouter, Routes, Route } from "react-router-dom";
import Party from "./pages/Party";
import Homepage from "./pages/Homepage";
import Games from "./pages/Games";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="party" element={<Party />} />
      </Routes>
      <Routes>
        <Route path="games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
