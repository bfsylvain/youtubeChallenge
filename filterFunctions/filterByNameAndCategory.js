import { filterByCategory } from "./filterByCategory.js";

export function filterByNameAndCategory(string, videoList, cardContainer, selectedFilters) {
    const filteredByNameVideos = videoList.filter((el) =>
        el.name
        .toLowerCase()
        .includes(string.toLowerCase())
    );
    filterByCategory(filteredByNameVideos, selectedFilters, cardContainer)
  }