import React, { useEffect, useState } from "react";

function DeckForm({
  onCancel,
  handleSubmit,
  submitLabel,
  cancelLabel,
  initialState,
}) {
  const [deckData, setDeckData] = useState(initialState);

  // const history = useHistory();

  const handleDeckUpdate = (event) => {
    setDeckData({
      ...deckData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setDeckData(initialState);
  }, [initialState]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(deckData);
    setDeckData({ ...initialState });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="deck-name">Name</label>
        <input
          className="form-control"
          name="name"
          id="deck-name"
          type="text"
          required={true}
          value={deckData.name || ''}
          placeholder="Deck Name"
          onChange={handleDeckUpdate}
        />
      </div>
      <div className="form-group">
        <label htmlFor="deck-description">Description</label>
        <textarea
          className="form-control row-3"
          name="description"
          id="deck-description"
          type="textarea"
          required={true}
          value={deckData.description || ''}
          placeholder="Brief description of deck"
          onChange={handleDeckUpdate}
        />
      </div>
      <div>
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={onCancel}
        >
          {cancelLabel}
        </button>
        <button type="submit" className="btn btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

export default DeckForm;
