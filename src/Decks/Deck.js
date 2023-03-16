import React, { useEffect } from "react";

import Breadcrumb from "../Layout/Breadcrumb";
import CardList from "../Cards/CardList";
import NotFound from "../Layout/NotFound";
import { deleteDeck, readDeck } from "../utils/api";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";

// path="/decks/:deckId"
function Deck({ deck, setDeck, loadPage, setLoadPage }) {
  const { deckId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();

  // Must use readDeck()
  useEffect(() => {
    async function loadDeck() {
      if (deckId) {
        const currentDeck = await readDeck(deckId);
        setDeck(() => currentDeck);
      }
    }
    loadDeck();
  }, [deckId, setDeck, loadPage]);

  //handle delete deck
  const handleDeleteDeck = async () => {
    if(window.confirm("Delete this deck?\n\nYou will not be able to recover it?"))
    {
      await deleteDeck(deckId);
      history.push("/");
    }
  };

  // console.log(deck);

  // Edit button -> Edit Deck Screen
  // Study button -> Study Screen
  // Add Cards button -> Add Card Screen
  // Delete button -> Show warning message (window.confirm())

  if (deck.id) {
    return (
      // Screen includes Deck Name and Deck Description
      <div>
          <Breadcrumb name={deck.name}
          link={"/decks/:deckId"}/>
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
        <Link to={`${url}/edit`}>
          <button type="button" className="btn btn-secondary mr-2">
            Edit
          </button>
        </Link>
        <Link to={`${url}/study`}>
          <button type="button" className="btn btn-primary mr-2">
            Study
          </button>
        </Link>
        <Link to={`${url}/cards/new`}>
          <button type="button" className="btn btn-primary mr-2">
            Add Cards
          </button>
        </Link>
        <button type="button" class="btn btn-danger" onClick={() => handleDeleteDeck(deck)}>
          Delete
        </button>
          <h3>Cards</h3>
          <CardList deck={deck} loadPage={loadPage} setLoadPage={setLoadPage} />
      </div>
    );
  } else {
    return (
      <NotFound />
    )
  }
}

export default Deck;
