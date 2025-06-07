import { BrowserRouter, Routes, Route } from "react-router-dom";
import Party from "./pages/Party";
import Homepage from "./pages/Homepage";
import Games from "./pages/Games";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="party" element={<Party />} />
        <Route path="games" element={<Games />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
