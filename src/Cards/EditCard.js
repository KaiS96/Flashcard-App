import React, { useEffect, useState } from "react";
import Breadcrumb from '../Layout/Breadcrumb';
import CardForm from './CardForm';
import { readCard, updateCard } from '../utils/api';
import { useHistory, useParams } from 'react-router-dom';

function EditCard({ deck }) {
    const history = useHistory();
    const { cardId, deckId } = useParams();
    const [currentCardData, setCurrentCardData] = useState({});

    useEffect(() => {
        readCard(cardId).then(card => setCurrentCardData(card))
    }, [cardId])

    // Cancel button to return to current deckId
    const onCancel = (event) => {
        event.preventDefault();
        history.push(`/decks/${deckId}`);
      }

    // Submit button to update current card
    async function handleSubmit(currentCard) {
        await updateCard({
            ...currentCard
        })
        history.push(`/decks/${deckId}`) 
    }

  return (
    <div>
      <div>
        <Breadcrumb
          name="Edit Card"
          link={`/decks/${deck.id}`}
          linkName={deck.name}
        />
      </div>

      <h2>Edit Card</h2>
      <CardForm
        handleSubmit={handleSubmit}
        onCancel={onCancel}
        submitLabel="Submit"
        cancelLabel="Cancel"
        initialState={currentCardData}
      /> 
    </div>
  );
}

export default EditCard;
