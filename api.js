export const getBooks = async (query) => {
  const responsePromise = fetch(
  `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
  );
  const response = await responsePromise;
  const jsonResponse = await response.json();
  const finalResponse = jsonResponse.items;
  return finalResponse;
};

// create book object

// item.volumeinfo?.title || book.title