const toggleBtn = document.querySelector("#menu_icon");
const menu = document.querySelector("ul");
const sns = document.querySelector(".sns");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  sns.classList.toggle("active");
});
