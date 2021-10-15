export const getCardsList =  async () => {
   const response = await fetch('./cardsList.json');
    if (!response.ok) {
        throw new Error("Error - " + response.status);
    }
    return response.json();
}

