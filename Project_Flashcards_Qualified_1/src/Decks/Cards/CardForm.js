import React from "react";
import { useHistory } from "react-router";

export function CardForm({ submitHandler, card = {}, editFront, editBack }) {
  const history = useHistory();

  function cardFront() {
    return card.front ? card.front : "";
  }
  function cardBack() {
    return card.back ? card.back : "";
  }

  return (
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Front</label>
        <textarea
          class="form-control"
          id="front"
          rows="3"
          value={cardFront()}
          onChange={editFront}
        ></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Deck Description</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={cardBack()}
          onChange={editBack}
        ></textarea>
      </div>
      <button
        className="btn btn-secondary ml-2"
        type="button"
        onClick={() => history.go(-1)}
      >
        Done
      </button>
      <button
        className="btn btn-primary ml-2"
        type="submit"
        onClick={submitHandler}
      >
        Save
      </button>
    </form>
  );
}