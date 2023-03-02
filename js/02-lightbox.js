import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
const galerryMarkup = createGalleryMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("afterbegin", galerryMarkup);

function createGalleryMarkup(galleryItems) {
  const imageMarkUp = galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
      `;
    })
    .join("");
  return imageMarkUp;
}

galleryContainerEl.addEventListener("click", onImageClick);

const imageEl = document.querySelector(".gallery__image");
console.log(imageEl.alt);
function onImageClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  let lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
