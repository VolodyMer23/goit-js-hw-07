import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const galerryMarkup = createGalleryMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("afterbegin", galerryMarkup);

function createGalleryMarkup(galleryItems) {
  const imageMarkUp = galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>
      `;
    })
    .join("");
  return imageMarkUp;
}

galleryContainerEl.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const imageSrc = e.target.dataset.source;
  const imageLightbox = basicLightbox.create(`<img src='${imageSrc}'>`);

  imageLightbox.show();

  window.addEventListener("keydown", closeLightBoxOnKeypress);

  function closeLightBoxOnKeypress (e) {
    if (e.code === "Escape") imageLightbox.close();
    window.removeEventListener("keydown", closeLightBoxOnKeypress);
  }
}
