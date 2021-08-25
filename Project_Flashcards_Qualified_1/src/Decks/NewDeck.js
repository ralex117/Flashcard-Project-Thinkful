import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { DeckForm } from "./DeckForm";
import { createDeck } from "../utils/api";


export function NewDeck() {
  const history = useHistory();
  const [deck, setDeck] = useState({
    id: 0,
    name: "",
    description: "",
  });

  function submitButtonHandler(e) {
    e.preventDefault();
    createDeck(deck).then((output) => history.push(`/decks/${output.id}`));
  }
  function changeName(e) {
    setDeck({ ...deck, name: e.target.value });
  }
  function changeDesc(e) {
    setDeck({ ...deck, description: e.target.value });
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h4>Create Deck</h4>
      <DeckForm
        submitFunction={submitButtonHandler}
        deck={deck}
        changeName={changeName}
        changeDesc={changeDesc}
      />
    </div>
  );
}