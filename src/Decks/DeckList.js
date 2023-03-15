import React from "react";
import { Link} from "react-router-dom";
import { deleteDeck } from "../utils/api";

function DeckList({ decks, loadPage, setLoadPage }) {
  //handle delete deck
  const handleDeleteDeck = async (deck) => {
    if(window.confirm("Delete this deck?\n\nYou will not be able to recover it?"))
    {
      await deleteDeck(deck.id);
      setLoadPage(!loadPage);
    }
  };

if(decks) {
  return decks.map((deck) => (
    <div class="card w-75">
      <div class="card-body">
        <h5 class="card-title">{deck.name}</h5>
        <p>{deck.cards.length} cards</p>
        <p class="card-text">{deck.description}</p>
        {/* {decks.cards.length} */}
        <Link to={`/decks/${deck.id}`}>
          <button type="button" className="btn btn-secondary">
            View
          </button>
        </Link>
        <Link to={`/decks/${deck.id}/study`}>
          <button type="button" className="btn btn-primary">
            Study
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDeleteDeck(deck)}
        >
          Delete
        </button>
      </div>
    </div>
  ));
} else {
  return <p>Loading...</p>
}
}

export default DeckList;
