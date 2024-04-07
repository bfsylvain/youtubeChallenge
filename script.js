import { filterByName } from "./filterByName.js";
import { displayElement } from "./displayElements.js";
import { updateFiltersArray } from "./updateFiltersArray.js";
import { createFilter } from "./createFilter.js";

const cardContainer = document.querySelector(".cardsList-container");
const filterContainer = document.querySelector(".navbar-filter-container");
const searchInput = document.querySelector("#search-input");
const resetSearchButton = document.querySelector(".reset-search-btn")
let videoList = [];
let filterList = [];
let selectedFilters = [];
let searchedValue = "";

const fetchVideoData = async function () {
  searchInput.value = ""
  try {
    const response = await fetch("./data.json");

    if (!response.ok) {
      throw new Error(`Error ! Status ${res.status}`);
    }
    const data = await response.json();

    filterList = data.filters;
    videoList = data.videos;
    displayElement(videoList, cardContainer);

    for (let filter of filterList) {
      createFilter(filter, filterContainer);
    }
    const filterButtonList = document.querySelectorAll(".filter-button");

    filterButtonList.forEach((el) =>
      el.addEventListener("click", () => {
        el.classList.toggle("selected");
        selectedFilters = updateFiltersArray(selectedFilters, el.value);
        filterByName(searchedValue, videoList, cardContainer, selectedFilters);
      })
    );
  } catch (err) {
    console.log("error", err);
  }
};
fetchVideoData();

searchInput.addEventListener("input", (e) => {
  searchedValue = e.target.value;
  filterByName(searchedValue, videoList, cardContainer, selectedFilters);
});

resetSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  filterByName(searchInput.value, videoList, cardContainer, selectedFilters);

})
