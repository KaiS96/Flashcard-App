import React from 'react';
import Breadcrumb from '../Layout/Breadcrumb';
import { createDeck } from '../utils/api';
import DeckForm from './DeckForm';
import { useHistory } from 'react-router-dom';

function CreateDeck({ deck }) {
  const initialState = {
    name: "",
    description: "",
  }

  const history = useHistory();

  const onCancel = (event) => {
    event.preventDefault();
    history.push(`/`);
  }

  const handleSubmit = async (newDeck) => {
    const createdDeck = await createDeck(newDeck)
    history.push(`/decks/${createdDeck.id}`);
  }

  return (
    <div>
      <div>
        <Breadcrumb
          name="Create Deck"
          link={`/decks/new`}
        />
      </div>

      <h2>Create Deck</h2>

      <DeckForm
        handleSubmit={handleSubmit}
        onCancel={onCancel}
        submitLabel="Save"
        cancelLabel="Done"
        initialState={initialState}
      />
    </div>
  )
}

export default CreateDeck;