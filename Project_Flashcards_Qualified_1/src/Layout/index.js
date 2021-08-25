import React, { useState, useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "../Homepage";
import { Decks } from "../Decks";


function Layout() {
  const [decks, setDecks] = useState([]);


  useEffect(() => {
    async function loadDecks() {
      const loadedDecks = await listDecks();
      setDecks(loadedDecks);
    }
    loadDecks();
  }, []);

  
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Homepage decks={decks} />
          </Route>
          <Route path="/decks">
            <Decks decks={decks} />
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
