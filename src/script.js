function teste() {
  if (document.getElementById("menu").style.display == "block") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("headline-text").style.display = "block";
  } else {
    document.getElementById("menu").style.display = "block";
    document.getElementById("headline-text").style.display = "none";
  }
}

// document.getElementById("menu").addEventListener("click", teste);

// function lineChange() {
//   console.log("click bottun");
//   hrs = document.querySelectorAll(".service-text hr");
//   hrs.forEach((hr) => {
//     console.log("click hr");
//     hr.style.opacity = "0.9";
//   });
// }

// let buttons = document.querySelectorAll(".service-text button");

// buttons.forEach((button) => {
//   button.addEventListener("click", lineChange);
// });
