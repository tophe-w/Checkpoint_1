let userImage = document.querySelector(".user-image");

userImage.addEventListener("click", function () {
  console.log("clicked");
  userImage.src = "image/avatar.svg";
});

let button = document.querySelector(".button");

button.addEventListener("click", function () {
  let name = prompt("Enter your name");
  document.querySelector("#name").innerHTML = name;
  document.querySelector("#name").style.color = "white";
  let background = document.querySelectorAll(".pink-bg");
  for (let i = 0; i < background.length; i++) {
    background[i].style.backgroundColor = "blue";
  }
});
