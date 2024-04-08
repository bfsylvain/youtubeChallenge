import { createCard } from "../createElementsFunctions/createCard.js";

export function displayVideos(cardList, parent) {
  parent.innerHTML = "";

    for (let card of cardList) {
      createCard(card, parent);
    }
}