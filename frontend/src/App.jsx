import "./css/App.css";
import NavBar from "./components/NavBar";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { AnimeProvider } from "./contexts/AnimeContext";

function App() {
  return (
    <AnimeProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </AnimeProvider>
  );
}

export default App;
