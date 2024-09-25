"use strict";
const collapsible = document.querySelectorAll(".collapsible");
collapsible.forEach((element) => {
  element.addEventListener("click", toggleExpand);
});
function toggleExpand() {
  this.classList.toggle("collapsible--expanded");
}

const readMore = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");
readMore.addEventListener("click", toggleReadMore);
function toggleReadMore() {
  readMoreContent.classList.toggle("show-read-more-content");
  if (readMore.innerText.toLowerCase().includes("more")) {
    readMore.innerText = "Read Less ...";
  } else {
    readMore.innerText = "Read More ...";
  }
}
