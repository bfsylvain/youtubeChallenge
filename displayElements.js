import { createCard } from "./createCard.js";

export function displayElements(cardList, parent) {
  parent.innerHTML = "";

    for (let card of cardList) {
      createCard(card, parent);
    }
}