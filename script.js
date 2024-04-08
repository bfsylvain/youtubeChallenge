import { filterByNameAndCategory } from "./filterFunctions/filterByNameAndCategory.js";
import { displayVideos } from "./displayElementsFunctions/displayVideos.js";
import { updateFiltersArray } from "./updateFiltersArray.js";
import { fetchData } from "./fetchData.js";
import { displayFilters } from "./displayElementsFunctions/displayFilters.js";
//import { setFiltersAndVideos } from "./setFiltersAndVideos.js";

async function main() {
  const cardContainer = document.querySelector(".cardsList-container");
const filterContainer = document.querySelector(".navbar-filter-container");
const searchInput = document.querySelector("#search-input");
const resetSearchButton = document.querySelector(".reset-search-btn");
let videoList = [];
let filterList = [];
let selectedFilters = [];
let searchedValue = "";

async function setFiltersAndVideos() {
  searchInput.value = "";
  const data = await fetchData();
  filterList = data.filters;
  videoList = data.videos;
};

async function setFiltersFunctions() {
  const filterButtonList = document.querySelectorAll(".filter-button");
  filterButtonList.forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("selected");
      selectedFilters = updateFiltersArray(selectedFilters, el.value);
      filterByNameAndCategory(
        searchedValue,
        videoList,
        cardContainer,
        selectedFilters
      );
    })
  );  
}

searchInput.addEventListener("input", (e) => {
  searchedValue = e.target.value;
  filterByNameAndCategory(
    searchedValue,
    videoList,
    cardContainer,
    selectedFilters
  );
});

resetSearchButton.addEventListener("click", () => {
  console.log(selectedFilters);
  searchInput.value = "";
  searchedValue = "";
  filterByNameAndCategory(
    searchedValue,
    videoList,
    cardContainer,
    selectedFilters
  );
});

// await setFiltersAndVideos(filterList, videoList, searchInput);
await setFiltersAndVideos();
await displayVideos(videoList, cardContainer);
await displayFilters(filterList, filterContainer)
await setFiltersFunctions()
}

main()
