let insight_container = document.getElementById("insight_container");
let browseall = document.getElementById("browseall");
let subscribe_button = document.getElementById("subscribe_button");
let email = document.getElementById("email");
let move_left = document.getElementById("move_left");
let move_right = document.getElementById("move_right");
let review_paragraph = document.getElementById("review_paragraph");
let customer_name = document.getElementById("customer_name");
let microsoft_span = document.getElementById("microsoft_span");

// Email vallidation
subscribe_button.addEventListener("click", (event) => {
  event.preventDefault();
  let email_value = email.value;
  let email_validation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email_validation.test(email_value)) {
    localStorage.setItem("userEmail", email_value);
    email.remove();
  } else {
    alert("Email is not correct");
  }
});

// make divs visible
if (localStorage.getItem("newdivs") === "true") {
  insight_container.classList.add("visible");
}

browseall.addEventListener("click", () => {
  if (insight_container.classList.contains("visible")) {
    insight_container.classList.remove("visible");
    localStorage.setItem("newdivs", "false");
  } else {
    insight_container.classList.add("visible");
    localStorage.setItem("newdivs", "true");
  }
});

// make slider

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
});
