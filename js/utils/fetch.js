export async function fetchJSONData(jsonPath) {
    const response = await fetch(jsonPath);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}