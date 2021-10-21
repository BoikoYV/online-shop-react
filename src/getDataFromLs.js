export const getDataFromLs = (key) => {
    const saved = localStorage.getItem(key);
    const initialValue = JSON.parse(saved);

    return initialValue || [];
}
