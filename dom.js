import { getBooks } from "./api.js";
import { createData } from "./dom-utils.js";
import { truncate } from "./api.js";

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
      "div",
      `Publisher: ${book.volumeInfo?.publisher}`,
      "div",
      `Published Date: ${book.volumeInfo?.publishedDate}`,
      "div",
      `Retail Price: $${book.saleInfo.retailPrice?.amount}`,
      "div",
      `Language: ${book.volumeInfo?.language}`,
      "div",
      `Description: ${book.volumeInfo?.description}`,
      "img",
      `${book.volumeInfo.imageLinks?.thumbnail}`,
      "h4",
      `Title: ${truncate(book.volumeInfo?.title, 100)}`,
      "h4",
      `Author: ${truncate(book.volumeInfo?.authors, 70)}`,
      "div",
      "p",
      `Brief: ${truncate(book.searchInfo?.textSnippet, 200)}`,
      "div",
      "div",
      "div",
      "div",
      output
    );
  })
  })





