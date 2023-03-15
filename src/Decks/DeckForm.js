import React, { useEffect, useState } from 'react';

function DeckForm ({
    onCancel,
    handleSubmit,
    submitLabel,
    cancelLabel,
    initialState,
}) {
const [deckData, setDeckData] = useState(initialState)

// const history = useHistory();

const handleDeckUpdate = (event) => {
    setDeckData({
        ...deckData,
        [event.target.name]: event.target.value
    })
}

useEffect(() => {
    setDeckData(initialState)
}, [initialState]);

const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(deckData);
    setDeckData({ ...initialState })
}

    return (
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="deck-name">Name</label>
            <input
              name="name"
              id="deck-name"
              type="text"
              required={true}
              value={deckData.name}
              placeholder="Deck Name"
              onChange={handleDeckUpdate}
            />
          </div>
          <div>
            <label htmlFor="deck-description">Description</label>
            <textarea
              name="description"
              id="deck-description"
              type="textarea"
              required={true}
              value={deckData.description}
              placeholder="Brief description of deck"
              onChange={handleDeckUpdate}
            />
          </div>
          <div>
            <button type="button" onClick={onCancel}>{cancelLabel}
            </button>
            <button type="submit">{submitLabel}</button>
          </div>
        </form>
      );
}

export default DeckForm;