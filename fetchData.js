export const fetchData  = async function () {
    const response = await fetch("./data.json");

    if (!response.ok) {
      throw new Error(`Error ! Status ${res.status}`);
    }
    const data = await response.json();
    return data
}
