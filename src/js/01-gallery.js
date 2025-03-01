import { images } from "../data/images.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const gallery = document.querySelector(".gallery");

const insertHTML = images
  .map(
    (image) =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${image.original}">
            <img
                class="gallery-image" 
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
        </a>
    </li>`
  )
  .join("");

gallery.innerHTML = insertHTML;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
