import { displayElement } from "./displayElements.js";

export function filterByCategory(videoList, filters, cardContainer) {
    if(filters.length === 0) {
        displayElement(videoList, cardContainer)
        return videoList
    } else {
        const videoListFiltered = videoList.filter((listElement) =>
            filters.every(f => listElement.category.includes(f))
        );
        displayElement(videoListFiltered, cardContainer)
        return videoListFiltered;
    }
  }

  //aspect ratio : css