export function createFilter(filter, parent) {
    parent.innerHTML += `
    <button class="filter-button" value=${filter}>${filter}</button>
    `
}
