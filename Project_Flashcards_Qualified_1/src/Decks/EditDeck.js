import React, { useState, useEffect } from "react";
import { DeckForm } from "./DeckForm";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";


export function EditDeck() {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({
    id: 0,
    name: "",
    description: "",
  });

  useEffect(() => {
    async function loadDecks() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
    }
    loadDecks();
  }, [deckId]);

  function submitButtonHandler(e) {
    e.preventDefault();
    updateDeck(deck).then((output) => history.push(`/decks/${output.id}`));
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
            Edit Deck
          </li>
        </ol>
      </nav>
      <h4>Edit Deck</h4>
      <DeckForm
        submitFunction={submitButtonHandler}
        deck={deck}
        changeName={changeName}
        changeDesc={changeDesc}
      />
    </div>
  );
}