let insight_container = document.getElementById("insight_container");
let browseall = document.getElementById("browseall");

if (localStorage.getItem("newdivs") === "true") {
  insight_container.style.display = "block";
}

browseall.addEventListener("click", () => {
  if (insight_container.style.display === "none") {
    insight_container.style.display = "block";
    localStorage.setItem("newdivs", "true");
  } else {
    insight_container.style.display = "none";
    localStorage.setItem("newdivs", "false");
  }
});
