function teste() {
  if (document.getElementById("menu").style.display == "block") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("headline-text").style.display = "block";
  } else {
    document.getElementById("menu").style.display = "block";
    document.getElementById("headline-text").style.display = "none";
  }
}

document.querySelectorAll(".nav-menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    alert("Unfortunately, this design did not include page you require");
  });
});
