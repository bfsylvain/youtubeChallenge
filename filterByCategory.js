import { displayElements } from "./displayElements.js";

export function filterByCategory(videoList, filters, cardContainer) {
    if(filters.length === 0) {
        displayElements(videoList, cardContainer)
        return videoList
    } else {
        const filteredByCatVideos = videoList.filter((listElement) =>
            filters.every(f => listElement.category.includes(f))
        );
        displayElements(filteredByCatVideos, cardContainer)
        return filteredByCatVideos;
    }
  }

  //aspect ratio : css