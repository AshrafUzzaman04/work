const button = document.querySelectorAll(".button")[0];
const img = document.querySelectorAll(".img")[0].children[0];

button.addEventListener("click", (e) => {
  const buttonNo = Array.from(button.children).indexOf(e.target);

  switch (buttonNo) {
    case 0:
      img.src = "./images/light on.png";
      break;
    case 1:
      img.src = "./images/light off.png";
      break;

    default:
      img.src = "./images/light off.png";
      break;
  }
});
