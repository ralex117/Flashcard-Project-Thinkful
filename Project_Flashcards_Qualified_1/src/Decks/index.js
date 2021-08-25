import React from "react";
import { NewDeck } from "./NewDeck";
import { ViewDeck } from "./ViewDeck";
import { EditDeck } from "./EditDeck";
import { Cards } from "./Cards";
import { Study } from "./Study";
import { Switch, Route } from "react-router-dom";


export function Decks({ decks }) {

    
  return (
    <div>
      <Switch>
        <Route path="/decks/new">
          <NewDeck />
        </Route>
        <Route path="/decks/:deckId/study">
          <Study decks={decks} />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route path="/decks/:deckId/cards">
          <Cards />
        </Route>
        <Route path="/decks/:deckId">
          <ViewDeck />
        </Route>
      </Switch>
    </div>
  );
}