const skeleton = document.querySelectorAll(".skeleton");

const loadingData = () => {
  skeleton.forEach((item) => {
    item.classList.remove("skeleton");
  });
};
setTimeout(loadingData, 3000);