const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// // ПЕРШИЙ ВАРІАНТ (не через insertAdjacentHTML)
// const imagesList = document.querySelector(".gallery");
// const galleryItems = images.map((image) => {
//   const listEl = document.createElement("li");
//   const imageEl = document.createElement("img");
//   imageEl.classList.add("js-img-item");
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   listEl.appendChild(imageEl);
//   return listEl;
// });

// galleryItems.forEach((item) => {
//   imagesList.appendChild(item);
// });

// ДРУГИЙ ВАРІАНТ
const list = document.querySelector(".gallery");
const galleryItemsHTML = images
  .map(
    (image) => `
  <li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}" class="gallery-image">
  </li> `
  )
  .join("");

list.insertAdjacentHTML("beforeend", galleryItemsHTML);
