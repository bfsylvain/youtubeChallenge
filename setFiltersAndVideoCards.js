import { fetchData } from "./fetchData.js";

export async function setFiltersAndVideoCards(filterList, videoList, searchInput) {
    searchInput.value = "";
    const data = await fetchData();
    filterList = data.filters;
    videoList = data.videos;
  };