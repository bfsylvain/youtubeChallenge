import { filterByNameAndCategory } from "./filterByNameAndCategory.js";
import { displayElements } from "./displayElements.js";
import { updateFiltersArray } from "./updateFiltersArray.js";
import { createFilter } from "./createFilter.js";
import { fetchData } from "./fetchData.js";
async function main() {
  const cardContainer = document.querySelector(".cardsList-container");
const filterContainer = document.querySelector(".navbar-filter-container");
const searchInput = document.querySelector("#search-input");
const resetSearchButton = document.querySelector(".reset-search-btn");
let videoList = [];
let filterList = [];
let selectedFilters = [];
let searchedValue = "";

const mainPageInitialization = async function () {
  searchInput.value = "";

  const data = await fetchData();

  filterList = data.filters;
  videoList = data.videos;
  displayElements(videoList, cardContainer);

  for (let filter of filterList) {
    createFilter(filter, filterContainer);
  }
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
};
mainPageInitialization();

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
}
main()
