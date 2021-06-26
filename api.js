export const getBooks = async (query) => {
  const responsePromise = fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`
  );
  const response = await responsePromise;
  const jsonResponse = await response.json();
  const finalResponse = jsonResponse.items;
  return finalResponse;
};
