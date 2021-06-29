import { getBooks } from "./api.js";
import { createData } from "./dom-utils.js";

const form = document.getElementById("apiForm");

const enter = document
  .getElementById("query")
  .addEventListener("keyup", (e) => {
    if (e.keycode === 13) {
      form.submit();
    }
  });

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = document.getElementById("query").value.toString();
  const books = await getBooks(query);
 
  const output = document.getElementById("data");
  form.reset();
  output.innerHTML = "";

  books.map((book) => {
    createData(
      "img",
      `${book.volumeInfo.imageLinks.thumbnail}`,
      "P",
      `Title: ${book.volumeInfo.title}, Author: ${book.volumeInfo.authors}, Description: ${book.searchInfo.textSnippet}`, "div", "div", "div", "div", output
    );
  });
});

// const click = document.getElementById('wrap');
// click.addEventListener("click", () => {

// })

// items[0].volumeInfo.publisher;
// items[0].volumeInfo.publishedDate;
// items[0].volumeInfo.description;
// items[0].saleInfo.retailPrice.amount;
// items[0].volumeInfo.language;