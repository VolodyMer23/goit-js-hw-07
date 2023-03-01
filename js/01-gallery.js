import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");

function galleryMarkUp(galleryItems) {
  const imageMarkUp = galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" href="${preview}">
                    <img
                        class="gallery__image"
                        target="_parent"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
      `
    })
    .join("");
  return imageMarkUp;
}

function addMarkUp() {
  galleryContainerEl.insertAdjacentHTML(
    "afterbegin",
    galleryMarkUp(galleryItems)
  );
}
addMarkUp();
