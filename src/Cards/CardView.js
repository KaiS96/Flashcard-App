import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

function CardView({ studyDeck }) {
  // display one card a time to study
  //   const [card, setCard] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [front, setFront] = useState(true);
  const { deckId } = useParams();
  const history = useHistory();

  //cards shown one at a time - "front" side first
  //flip button to show "back" of card
  function flipHandler(event) {
    event.preventDefault();
    if (front === true) {
      setFront(false);
    } else {
      setFront(true);
    }
  }

  //next button to go to next card
  const nextHandler = (event) => {
    event.preventDefault();
    if (currentIndex < studyDeck.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFront(true);
    } else {
      //after final card, window.confirm()
      //either restart deck or go to home screen
      if (
        window.confirm(
          "Restart cards? \n Click 'cancel to return to the home page"
        )
      ) {
        setCurrentIndex(0);
        setFront(true);
      } else {
        history.push("/");
      }
    }
  };

  //2 or fewer cards - display message "Not enough cards" and button to add more cards
  if (studyDeck.cards.length > 2) {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            Card {currentIndex + 1} of {studyDeck.cards.length}
          </h5>
          {front === true ? (
            <div>
              <p class="card-text">
                {studyDeck.cards[currentIndex].front}
              </p>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={flipHandler}
              >
                Flip
              </button>
            </div>
          ) : (
            <div>
              <p class="card-text">
              {studyDeck.cards[currentIndex].back}
              </p>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={flipHandler}
              >
                Flip
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={nextHandler}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Not enough cards</h3>
        <p>
          You need at least 3 cards to study. There are {studyDeck.cards.length} cards in this deck.
        </p>
        <Link to={`/decks/${deckId}/cards/new`}>
          <button className="btn btn-primary">+ Add Cards</button>
        </Link>
      </div>
    );
  }
}

export default CardView;
