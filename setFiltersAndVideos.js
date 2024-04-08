import { fetchData } from "./fetchData.js";

export async function setFiltersAndVideos(filterList, videoList, searchInput) {
    searchInput.value = "";
    const data = await fetchData();
    return {
      filters: data.filters,
      videos: data.videos
    }
  };