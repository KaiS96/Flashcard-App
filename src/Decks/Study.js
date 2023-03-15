import React, { useEffect, useState } from "react";
import Breadcrumb from "../Layout/Breadcrumb";
import CardView from "../Cards/CardView";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";
import NotFound from "../Layout/NotFound";

function Study() {
    //find studyDeck
  const [studyDeck, setStudyDeck] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
    async function loadDeck() {
      if (deckId) {
        const currentDeck = await readDeck(deckId);
        setStudyDeck(() => currentDeck);
      }
    }
    loadDeck();
  }, [deckId]);

  // console.log(studyDeck)

  if(studyDeck.id){
      return (
        <div>
            <Breadcrumb name="Study"
            link={`/decks/${deckId}`}
            linkName={studyDeck.name}/>
            <h2>{studyDeck.name}: Study</h2>
          <CardView studyDeck={studyDeck} />
        </div>
      );
  } else {
      return (
          <NotFound />
      )

  }
}

export default Study;
