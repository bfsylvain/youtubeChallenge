import { filterByCategory } from "./filterByCategory.js";

export function filterByName(string, videoList, cardContainer, selectedFilters) {
    const filteredByNameVideos = videoList.filter((el) =>
        el.name
        .toLowerCase()
        .includes(string.toLowerCase())
    );
    filterByCategory(filteredByNameVideos, selectedFilters, cardContainer)
  }