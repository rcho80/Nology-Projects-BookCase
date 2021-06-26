export const createData = (image, source, type, text, parent) => {
  const newData = document.createElement(type);
  const newImg = document.createElement(image);
  newImg.src = source;
  newData.classList.add("cards__card");
  const textNode = document.createTextNode(text);
  parent.appendChild(newImg);
  newData.appendChild(textNode);
  parent.appendChild(newData);
};
