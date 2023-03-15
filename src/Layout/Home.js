import React from "react";
import DeckList from "../Decks/DeckList";
import { Link } from "react-router-dom";

function Home({ decks, loadPage, setLoadPage }) {
  return (
    <div>
      <div className="container">
        <Link to="/decks/new">
          <button type="button" className="btn btn-secondary">
            Create Deck
          </button>
        </Link>
      </div>
      <DeckList decks={decks} loadPage={loadPage} setLoadPage={setLoadPage} />
    </div>
  );
}

export default Home;
