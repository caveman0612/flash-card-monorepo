import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./Components/NavBar";
import CreateDeck from "./routes/CreateDeck";

function App() {
  return (
    <div className="app-routes">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks/new" element={<CreateDeck />} />
        <Route path="/decks/:deckId" element={<Home />} />
        <Route path="/decks/:deckId/study" element={<Home />} />
        <Route path="/decks/:deckId/edit" element={<Home />} />
        <Route path="/decks/:deckId/cards/new" element={<Home />} />
        <Route path="/decks/:deckId/cards/:cardId/edit" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
