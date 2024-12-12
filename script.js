let insight_container = document.getElementById("insight_container");
let browseall = document.getElementById("browseall");

let subscribe_button = document.getElementById("subscribe_button");
let email = document.getElementById("email");
let move_left = document.getElementById("move_left");
let move_right = document.getElementById("move_right");
let review_paragraph = document.getElementById("review_paragraph");
let customer_name = document.getElementById("customer_name");
let microsoft_span = document.getElementById("microsoft_span");
let aboutBtn = document.querySelector(".sec_about_btn")
let ulAdd = document.getElementById("ul_add")
let CreatBtn = document.querySelector(".sec_creative_btn")
let Creatp = document.getElementById("Crap")
let burgerIcon = document.getElementById("burgerIcon")
let burgerMenu = document.getElementById("burger_menu")
let isVisible = false;
let isAboutVisible = false;
CreatBtn.addEventListener("click",  async (event) => {
    event.preventDefault()

    if (isVisible) {
        Creatp.innerHTML=""
        isVisible = false
        CreatBtn.textContent = "Explore"
    } else {
        try {
            let box = await fetch( `https://fakestoreapi.com/products/1`)
            let result = await box.json()
        
           
                let p = document.createElement("p")
                p.textContent = result.description
                Creatp.appendChild(p)
                Creatp.classList.toggle("Fechtex")
          isVisible= true
            CreatBtn.textContent = "up"
            
           } catch (error) {
          console.log("error");
          
           }
    }
  
})

// ეს ღილაკი მუშაობს რომ api და წამოიღოს 3 id ლისთისთვის 
aboutBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  if (isAboutVisible) {
      ulAdd.innerHTML = "";
       isAboutVisible  = false;
      aboutBtn.textContent = "Explore";
  } else {
      try {
          let response = await fetch(`https://fakestoreapi.com/products`);
          let result = await response.json();

          result.slice(0, 3).forEach(item => {
              let li = document.createElement("li");
              li.textContent = item.title;
              ulAdd.appendChild(li);
          });

          ulAdd.classList.toggle("li_js");
          isAboutVisible = true;
          aboutBtn.textContent = "show less";
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  }
});



burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger_icon");
});


// Email vallidation
subscribe_button.addEventListener("click", (event) => {
  event.preventDefault();
  let email_value = email.value;
  let email_validation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email_validation.test(email_value)) {
    alert("Email is correct");
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

