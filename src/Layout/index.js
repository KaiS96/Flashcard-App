import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import AddCard from "../Cards/AddCard";
import CreateDeck from "../Decks/CreateDeck";
import Deck from "../Decks/Deck";
import EditCard from "../Cards/EditCard";
import Header from "./Header";
import Home from "./Home";
import { listDecks } from "../utils/api";
import NotFound from "./NotFound";
import Study from "../Decks/Study";
import EditDeck from "../Decks/EditDeck";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState([]);
  const [loadPage, setLoadPage] = useState(false);

  useEffect(() => {
    async function loadDecks() {
      const response = await listDecks();
      const deckFromAPI = response;
      setDecks(deckFromAPI);
    }
    loadDecks();
  }, [loadPage]);

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home decks={decks} loadPage={loadPage} setLoadPage={setLoadPage} />
          </Route>

          <Route exact path="/decks/new">
            <CreateDeck deck={deck}/>
          </Route>

          <Route exact path="/decks/:deckId">
            <Deck deck={deck} setDeck={setDeck} loadPage={loadPage} setLoadPage={setLoadPage} />
          </Route>

          <Route exact path="/decks/:deckId/new">
            <CreateDeck deck={deck} setDeck={setDeck} />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck deck={deck} loadPage={loadPage} setLoadPage={setLoadPage} />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard deck={deck} />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard deck={deck} />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
