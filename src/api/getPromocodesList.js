export const getPromocodesList =  async () => {
    const response = await fetch('./promocodesList.json');
     if (!response.ok) {
         throw new Error("Error - " + response.status);
     }
     return response.json();
 }
 
 