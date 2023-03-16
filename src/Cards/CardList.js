import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { deleteCard } from "../utils/api";

function CardList({ deck, loadPage, setLoadPage }) {
  const { url } = useRouteMatch();

  const handleDeleteCard = async (card) => {
    if(window.confirm("Delete this card?\n\nYou will not be able to recover it?"))
    {
      await deleteCard(card.id);
      setLoadPage(!loadPage);
    }
  };

  // show the list of cards in current deck being viewed
  return (
    <div>
        {deck.cards.map((card) => (
      <div class="card">
        <div class="card-body">
          <div class="card-text">
            <p>{card.front}</p>
            <p>{card.back}</p>
          </div>
          <Link to={`${url}/cards/${card.id}/edit`}>
          <button type="button" class="btn btn-secondary mr-2">
            Edit
          </button>
            </Link>
          <button type="button" class="btn btn-danger" onClick={() => handleDeleteCard(card)}>
            Delete
          </button> 
        </div>
      </div>
      ))}
    </div>
  
  );
}

export default CardList;
