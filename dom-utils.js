export const createData = (image, source, type, text, wrap, inner, front, back, parent) => {
  const newImg = document.createElement(image);
  newImg.src = source;
  newImg.classList.add("cards__flipBox__inner__front__img");
  const newData = document.createElement(type);
  newData.classList.add("cards__flipBox__inner__front__card")
  const textNode = document.createTextNode(text);
  const flipBox = document.createElement(wrap);
  flipBox.classList.add("cards__flipBox");
  
  const flipBox__inner = document.createElement(inner);
  flipBox__inner.classList.add("cards__flipBox__inner");

  const flipBox__inner__front = document.createElement(front);
  flipBox__inner__front.classList.add("cards__flipBox__inner__front");
  
  const flipBox__inner__back = document.createElement(back);
  flipBox__inner__back.classList.add("cards__flipBox__inner__back");
 
  flipBox__inner__front.appendChild(newImg);
  newData.appendChild(textNode);
  flipBox__inner__front.appendChild(newData);
 
  flipBox__inner.appendChild(flipBox__inner__front);
  flipBox__inner.appendChild(flipBox__inner__back);
 
  flipBox.appendChild(flipBox__inner)
  parent.appendChild(flipBox);
};

