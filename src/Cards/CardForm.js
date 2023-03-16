import React, { useEffect, useState } from "react";

function CardForm({
  onCancel,
  handleSubmit,
  submitLabel,
  cancelLabel,
  initialState,
}) {
  const [cardData, setCardData] = useState(initialState);
  // console.log(initialState)
  // const history = useHistory();

  const handleCardUpdate = (event) => {
    setCardData({
      ...cardData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setCardData(initialState);
  }, [initialState]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(cardData);
    setCardData({ ...initialState });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="card-front">Front:</label>
        <textarea
          className="form-control"
          name="front"
          id="card-front"
          type="textarea"
          required={true}
          value={cardData.front}
          placeholder="Front side of card"
          onChange={handleCardUpdate}
        />
      </div>
      <div className="form-group">
        <label htmlFor="card-back">Back:</label>
        <textarea
          className="form-control"
          name="back"
          id="card-back"
          type="textarea"
          required={true}
          value={cardData.back}
          placeholder="Back side of card"
          onChange={handleCardUpdate}
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

export default CardForm;
