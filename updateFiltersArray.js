export function updateFiltersArray(array, category) {
  let newSelectedFilters = [...array];
  !array.includes(category)
  ? newSelectedFilters.push(category)
  : (newSelectedFilters = newSelectedFilters.filter((el) => el !== category));
  return newSelectedFilters;
}
