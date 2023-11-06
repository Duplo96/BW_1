let check = document.querySelector("input");
let button = document.querySelector("button");
let enable = function () {
  if (check.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};
check.addEventListener("click",enable)