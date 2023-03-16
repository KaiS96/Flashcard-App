import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Breadcrumb from "../Layout/Breadcrumb";
import { readDeck, updateDeck } from '../utils/api';
import DeckForm from "./DeckForm";


function EditDeck({ deck, loadPage, setLoadPage }) {
  const history = useHistory();
  const { deckId } = useParams();
  const [currentDeckData, setCurrentDeckData] = useState({});

  useEffect(() => {
    readDeck(deckId).then(deck => setCurrentDeckData(deck))
  }, [deckId]);

  // Cancel button to return to current deckId
  const onCancel = (event) => {
    event.preventDefault();
    history.push(`/decks/${deck.id}`)
  }

  // Submit button to update current deck
  async function handleSubmit(currentDeck) {
    await updateDeck({
      ...currentDeck
    })
    history.push(`/decks/${deck.id}`)
    setLoadPage(!loadPage);
  }

  return (
    <div>
      <div>
        <Breadcrumb
          name="Edit Deck"
          link={`/decks/${deckId}`}
          linkName={deck.name}
        />
      </div>

      <h2>Edit Deck</h2>

      <DeckForm
        handleSubmit={handleSubmit}
        onCancel={onCancel}
        submitLabel="Save"
        cancelLabel="Cancel"
        initialState={currentDeckData}
      />
    </div>
  )

}

export default EditDeck;