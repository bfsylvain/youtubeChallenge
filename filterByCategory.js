import { displayElement } from "./displayElements.js";

export function filterByCategory(videoList, filters, cardContainer) {
    if(filters.length === 0) {
        displayElement(videoList, cardContainer)
        return videoList
    } else {
        const filteredByCatVideos = videoList.filter((listElement) =>
            filters.every(f => listElement.category.includes(f))
        );
        displayElement(filteredByCatVideos, cardContainer)
        return filteredByCatVideos;
    }
  }

  //aspect ratio : css