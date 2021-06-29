export const getBooks = async (query) => {
  const responsePromise = fetch(
  `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
  );
  const response = await responsePromise;
  const jsonResponse = await response.json();
  const finalResponse = jsonResponse.items;
  return finalResponse;
};


export const truncate = (str, max) => {
  if (str !== null) {
    return str?.length < max
      ? str
      : `${str?.substr(0, str.substr(0, max).lastIndexOf(" "))} [...]`;
  } else return null;
};





