let currentIndex = 0; // Define currentIndex outside the function

const carouselFunction = () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => `<span class="carousel__button"></span>`);

    carousel.insertAdjacentHTML(
      "beforeend",
      `<div class="carousel__nav">${buttonsHtml.join("")}</div>`
    );

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        items.forEach((item) => item.classList.remove("carousel__item--selected"));
        buttons.forEach((button) => button.classList.remove("carousel__button--selected"));

        currentIndex = i; // Update the currentIndex directly from the clicked button

        items[currentIndex].classList.add("carousel__item--selected");
        buttons[currentIndex].classList.add("carousel__button--selected");
      });
    });

    const autoSlideInterval = 3000;

    const changeSlide = () => {
      items.forEach((item) => item.classList.remove("carousel__item--selected"));
      buttons.forEach((button) => button.classList.remove("carousel__button--selected"));

      currentIndex = (currentIndex + 1) % items.length;

      items[currentIndex].classList.add("carousel__item--selected");
      buttons[currentIndex].classList.add("carousel__button--selected");
    };

    let autoSlideIntervalId = setInterval(changeSlide, autoSlideInterval);

    carousel.addEventListener("mouseover", () => clearInterval(autoSlideIntervalId));
    carousel.addEventListener("mouseout", () => {
      autoSlideIntervalId = setInterval(changeSlide, autoSlideInterval);
    });

    items[currentIndex].classList.add("carousel__item--selected");
    buttons[currentIndex].classList.add("carousel__button--selected");
  });
  
};

export default carouselFunction;
