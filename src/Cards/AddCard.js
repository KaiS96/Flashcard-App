import React, { useEffect, useState } from "react";
import Breadcrumb from "../Layout/Breadcrumb";
import CardForm from "./CardForm";
import { createCard, readDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

function AddCard({ deck }) {
  //to handle card data
  const initialState = {
    front: "",
    back: "",
  }

  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadDeck() {
        const currentDeck = await readDeck(deck.id);
        setDecks(() => currentDeck);
    }
    loadDeck();
  }, [deck.id]);

  const onCancel = (event) => {
    event.preventDefault();
    history.push(`/decks/${decks.id}`);
  }

  const handleSubmit = async (newCard) => {
    await createCard(decks.id, newCard);
  }
 
  return (
    <div>
      <div>
        <Breadcrumb
          name="Add Card"
          link={`/decks/${decks.id}`}
          linkName={decks.name}
        />
      </div>

      <h1>{deck.name}: Create Card</h1>

      <CardForm
        handleSubmit={handleSubmit}
        onCancel={onCancel}
        submitLabel="Save"
        cancelLabel="Done"
        initialState={initialState}
      />
    </div>
  );
}

export default AddCard;
