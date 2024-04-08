import { createFilter } from "../createElementsFunctions/createFilter.js";

export async function displayFilters(filterList, filterContainer) {
    for (let filter of filterList) {
      createFilter(filter, filterContainer);
    }
  }