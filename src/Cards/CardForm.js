import React, { useEffect, useState } from "react";

function CardForm({
  onCancel,
  handleSubmit,
  submitLabel,
  cancelLabel,
  initialState,
}) {
  const [cardData, setCardData] = useState(initialState)
  // console.log(initialState)
  // const history = useHistory();

  const handleCardUpdate = (event) => {
    setCardData({
      ...cardData,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    setCardData(initialState)
  }, [initialState])

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(cardData);
    setCardData({ ...initialState })
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="card-front">Front:</label>
        <textarea
          name="front"
          id="card-front"
          type="textarea"
          required={true}
          value={cardData.front}
          placeholder="Front side of card"
          onChange={handleCardUpdate}
        />
      </div>
      <div>
        <label htmlFor="card-back">Back:</label>
        <textarea
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
        <button type="button" onClick={onCancel}>{cancelLabel}
        </button>
        <button type="submit">{submitLabel}</button>
      </div>
    </form>
  );
}

export default CardForm;
