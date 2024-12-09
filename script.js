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
subscribe_button.addEventListener("click", () => {
  let email_value = email.value;
  let email_vallidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email_vallidation.test(email_value)) {
    alert("Email is correct");
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

// use fakestoreapi

let currentIndex = 0;
let reviews = [];
async function fetchReviews() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();
    reviews = products;
    updateReview(currentIndex);
  } catch (error) {
    console.error("Error", error);
  }
}

function updateReview(index) {
  if (reviews.length > 0) {
    const product = reviews[index];

    let description =
      product.description.split(" ").slice(0, 10).join(" ") + "...";
    review_paragraph.textContent = description;

    let title = product.title.split(" ").slice(0, 3).join(" ");
    customer_name.textContent = title;

    microsoft_span.textContent = "$" + product.price;
  }
}

move_left.addEventListener("click", () => {
  if (reviews.length) {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateReview(currentIndex);
  }
});

move_right.addEventListener("click", () => {
  if (reviews.length) {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview(currentIndex);
  }
});

fetchReviews();
