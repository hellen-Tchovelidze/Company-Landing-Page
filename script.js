let insight_container = document.getElementById("insight_container");
let browseall2 = document.getElementById("browseall2");
let subscribe_button = document.getElementById("subscribe_button");
let email = document.getElementById("email");
let move_left = document.getElementById("move_left");
let move_right = document.getElementById("move_right");
let review_paragraph = document.getElementById("review_paragraph");
let customer_name = document.getElementById("customer_name");
let microsoft_span = document.getElementById("microsoft_span");
let aboutBtn = document.querySelector(".sec_about_btn");
let ulAdd = document.getElementById("ul_add");
let CreatBtn = document.querySelector(".sec_creative_btn");
let Creatp = document.getElementById("Crap");
let burgerIcon = document.getElementById("burgerIcon");
let burgerMenu = document.getElementById("burger_menu");
let browseall1 = document.getElementById("browseall1");
let sec_case2 = document.getElementById("sec_case2");

let isVisible = false;
let isAboutVisible = false;
CreatBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  if (isVisible) {
    Creatp.innerHTML = "";
    isVisible = false;
    CreatBtn.textContent = "Explore";
  } else {
    try {
      let box = await fetch(`https://fakestoreapi.com/products/1`);
      let result = await box.json();

      let p = document.createElement("p");
      p.textContent = result.description;
      Creatp.appendChild(p);
      Creatp.classList.toggle("Fechtex1");
      isVisible = true;
      CreatBtn.textContent = "up";
    } catch (error) {
      console.log("error");
    }
  }
});

// ეს ღილაკი მუშაობს რომ api და წამოიღოს 3 id ლისთისთვის
aboutBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  if (isAboutVisible) {
    ulAdd.innerHTML = "";
    isAboutVisible = false;
    aboutBtn.textContent = "Explore";
  } else {
    try {
      let response = await fetch(`https://fakestoreapi.com/products`);
      let result = await response.json();

      result.slice(0, 3).forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item.title;
        ulAdd.appendChild(li);
      });

      // ulAdd.classList.toggle("li_js");
      isAboutVisible = true;
      aboutBtn.textContent = "show less";
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
});

let line = document.querySelector(".line");
let lineTow = document.querySelector(".linetow");

burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger_icon");
  line.classList.toggle("linerotate");
  lineTow.classList.toggle("linerotate2");
});
//////////////////////////////////////////////

if (localStorage.getItem("newdivs2") === "true") {
  sec_case2.classList.add("visible");
}

browseall1.addEventListener("click", () => {
  if (sec_case2.classList.contains("visible")) {
    sec_case2.classList.remove("visible");
    localStorage.setItem("newdivs2", "false");
    browseall1.style.marginTop = "-40px";
  } else {
    sec_case2.classList.add("visible");
    localStorage.setItem("newdivs2", "true");
    browseall1.style.marginTop = "-250px";
  }
});


// Email vallidation
subscribe_button.addEventListener("click", (event) => {
  event.preventDefault();
  let email_value = email.value;
  let email_validation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email_validation.test(email_value)) {
    localStorage.setItem("userEmail", email_value);
    alert("თქვენი იმეილი წარმატებით გაიგზავნა");
    email.value = "";
  } else {
    alert("თქვენს მიერ შეყვანილი იმეილი არასწორია");
    email.value = "";
  }
});

// make divs visible
if (localStorage.getItem("newdivs") === "true") {
  insight_container.classList.add("visible");
}

browseall2.addEventListener("click", () => {
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
  var swiper1 = new Swiper(".mySwiper", {
    loop: true,
  });
  let right = document.getElementById("swipe_right");
  let left = document.getElementById("swipe_left");
  right.addEventListener("click", function () {
    swiper1.slidePrev();
  });
  left.addEventListener("click", function () {
    swiper1.slideNext();
  });
});







