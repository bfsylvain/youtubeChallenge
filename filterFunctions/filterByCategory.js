import { displayVideos } from "../displayElementsFunctions/displayVideos.js";

export function filterByCategory(videoList, filters, cardContainer) {
    if(filters.length === 0) {
        displayVideos(videoList, cardContainer)
        return videoList
    } else {
        const filteredByCatVideos = videoList.filter((listElement) =>
            filters.every(f => listElement.category.includes(f))
        );
        displayVideos(filteredByCatVideos, cardContainer)
        return filteredByCatVideos;
    }
  }

  //aspect ratio : css