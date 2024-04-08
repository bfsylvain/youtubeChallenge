import { createFilter } from "./createFilter.js";

export async function displayFilters(filterList, filterContainer) {
    for (let filter of filterList) {
      createFilter(filter, filterContainer);
    }
  }