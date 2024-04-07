import { createCard } from "./createCard.js";

export function displayElement(cardList, parent) {
  parent.innerHTML = "";
  for (let card of cardList) {
    createCard(card, parent);
  }
}