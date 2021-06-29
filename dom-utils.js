export const createData = (
  pub,
  pubText,
  year,
  yearText,
  retail,
  retailText,
  lang,
  langText,
  desc,
  descText,
  image,
  source,
  title,
  titleText,
  auth,
  authText,
  frontContain,
  snip,
  snipText,
  wrap,
  inner,
  front,
  back,
  parent
) => {
  //create new elements for back of card items
  const publisher = document.createElement(pub);
  const pubNode = document.createTextNode(pubText);
  const date = document.createElement(year);
  const dateNode = document.createTextNode(yearText);
  const price = document.createElement(retail);
  const priceNode = document.createTextNode(retailText);
  const language = document.createElement(lang);
  const langNode = document.createTextNode(langText);
  const description = document.createElement(desc);
  const descNode = document.createTextNode(descText);

  //create new elements for front of card items
  const newImg = document.createElement(image);
  newImg.src = source;
  newImg.classList.add("cards__flipBox__inner__front__img");
  const newTitle = document.createElement(title);
  newTitle.classList.add("cards__flipBox__inner__front__box__card");
  const titleNode = document.createTextNode(titleText);
  const author = document.createElement(auth);
  author.classList.add("cards__flipBox__inner__front__box__card");
  const authNode = document.createTextNode(authText);
  const frontCardContainer = document.createElement(frontContain);
  frontCardContainer.classList.add("cards__flipBox__inner__front__box");
  const snippet = document.createElement(snip);
  snippet.classList.add("cards__flipBox__inner__front__box__snip");
  const snippetText = document.createTextNode(snipText);
  const flipBox = document.createElement(wrap);
  flipBox.classList.add("cards__flipBox");
  const flipBox__inner = document.createElement(inner);
  flipBox__inner.classList.add("cards__flipBox__inner");
  const flipBox__inner__front = document.createElement(front);
  flipBox__inner__front.classList.add("cards__flipBox__inner__front");

  //append items for front card section
  flipBox__inner__front.appendChild(newImg);
  newTitle.appendChild(titleNode);
  author.appendChild(authNode);
  snippet.appendChild(snippetText);
  frontCardContainer.appendChild(newTitle);
  frontCardContainer.appendChild(author);
  frontCardContainer.appendChild(snippet);
  flipBox__inner__front.appendChild(frontCardContainer);
  flipBox__inner.appendChild(flipBox__inner__front);

  //create back card
  const flipBox__inner__back = document.createElement(back);
  flipBox__inner__back.classList.add("cards__flipBox__inner__back");

  //append items for back of card section
  publisher.appendChild(pubNode);
  date.appendChild(dateNode);
  description.appendChild(descNode);
  price.appendChild(priceNode);
  language.appendChild(langNode);
  flipBox__inner__back.appendChild(publisher);
  flipBox__inner__back.appendChild(date);
  flipBox__inner__back.appendChild(price);
  flipBox__inner__back.appendChild(language);
 flipBox__inner__back.appendChild(description);
  flipBox__inner.appendChild(flipBox__inner__back);

  flipBox.appendChild(flipBox__inner);
  parent.appendChild(flipBox);
};



