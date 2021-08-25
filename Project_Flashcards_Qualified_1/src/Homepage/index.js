import React from "react";
import { CreateButton } from "./CreateButton";
import { Decklist } from "./DeckList";
import { Route, Switch } from "react-router";
import { Decks } from "../Decks";


export function Homepage({ decks }) {
  return (
    <div>
      <CreateButton />
      <Switch>
        <Route exact path="/">
          <Decklist decks={decks} />
        </Route>
        <Route path="/decks">
          <Decks decks={decks} />
        </Route>
      </Switch>
    </div>
  );
}