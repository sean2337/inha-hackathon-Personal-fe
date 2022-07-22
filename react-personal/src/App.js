import ColorMainpage from "./pages/ColorMainpage";
import MusicMainpage from "./pages/MusicMainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ColorMainpage />} />
        <Route path="/musicMain" element={<MusicMainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
