const btn = document.querySelector(".btn");
const title = document.querySelectorAll(".title");
const colors = ["#000", "#FFF"];
let bodyBackgroundLight = true;

btn.addEventListener("click", function (e) {
  if (bodyBackgroundLight === false) {
    bodyBackgroundLight = true;
    btn.innerHTML = `<i class="fas fa-sun"></i>`;
    btn.style.color = colors[1];
    document.body.style.backgroundColor = colors[0];
    title.forEach(function (value, i) {
      title[i].style.color = colors[1];
    });
  } else {
    bodyBackgroundLight = false;
    btn.innerHTML = `<i class="fas fa-moon"></i>`;
    btn.style.color = colors[0];
    document.body.style.backgroundColor = colors[1];
    title.forEach(function (value, i) {
      title[i].style.color = colors[0];
    });
  }
});
