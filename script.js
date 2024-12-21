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
let photo_cont = document.getElementById("case-container");

let isAboutVisible = false;
let isVisible = false;

CreatBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  if (isVisible) {
    Creatp.innerHTML = "";
    Creatp.classList.remove("Fechtex1");
    isVisible = false;
    CreatBtn.textContent = "Explore";
  } else {
    try {
      let box = await fetch(`https://fakestoreapi.com/products/1`);
      let result = await box.json();

      if (!Creatp.querySelector("p")) {
        let p = document.createElement("p");
        p.textContent = result.description;
        Creatp.appendChild(p);
        Creatp.classList.add("Fechtex1");
      }

      isVisible = true;
      CreatBtn.textContent = "Up";
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
    ulAdd.classList.remove("Fechtex2");
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

      ulAdd.classList.add("Fechtex2");
      isAboutVisible = true;
      aboutBtn.textContent = "Show less";
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
///////////////////////////////////////////////
// make divs visible

let cases = [
  {
    image: "./images/case1.jpg",
    title1: "Face of Mars",
    title2: "Will be a rare experience",
    num: "01",
  },
  {
    image: "./images/case2.jpg",
    title1: "Heavenly Bodies",
    title2: "Tour round the world should form",
    num: "02",
  },
  {
    image: "./images/case7.avif",
    title1: "Liberal Education",
    title2: "Truly it was a great journey",
    num: "03",
  },
  {
    image: "./images/case4.jpg",
    title1: "Though the Gravity",
    title2: "Daily classes he no longer collapsed",
    num: "04",
  },
  {
    image: "./images/case5.jpg",
    title1: "Face of Mars",
    title2: "Will be a rare experience",
    num: "05",
  },
  {
    image: "./images/case6.jpg",
    title1: "Heavenly Bodies",
    title2: "Tour round the world should form",
    num: "06",
  },
  {
    image: "./images/case7.avif",
    title1: "Liberal Education",
    title2: "Truly it was a great journey",
    num: "07",
  },
  {
    image: "./images/case8.jpg",
    title1: "Though the Gravity",
    title2: "Daily classes he no longer collapsed",
    num: "08",
  },
];

function make_divs() {
  let photo_massive = [];
  for (let index = 0; index < cases.length; index += 2) {
    photo_massive.push(cases.slice(index, index + 2));
  }

  photo_massive.forEach((group) => {
    let casecontainer = document.createElement("div");
    casecontainer.classList.add("case_box");

    group.forEach((item) => {
      let casebox = document.createElement("div");
      casebox.classList.add("photo1");

      let caseboxinner = document.createElement("div");
      caseboxinner.classList.add("case1_box");

      let img = document.createElement("img");
      img.classList.add("case1");
      img.src = item.image;

      let numeration = document.createElement("div");
      numeration.classList.add("green_numeration");

      let numerationtext = document.createElement("p");
      numerationtext.classList.add("numeration_paragraph");
      numerationtext.textContent = item.num;

      numeration.appendChild(numerationtext);

      let paragraph = document.createElement("div");
      paragraph.classList.add("case_paragraph");

      let title1 = document.createElement("p");
      title1.classList.add("case_paragraph1");
      title1.textContent = item.title1;

      let title2 = document.createElement("p");
      title2.classList.add("case_paragraph2");
      title2.textContent = item.title2;

      paragraph.appendChild(title1);
      paragraph.appendChild(title2);

      caseboxinner.appendChild(img);
      caseboxinner.appendChild(numeration);
      casebox.appendChild(caseboxinner);
      casebox.appendChild(paragraph);

      casecontainer.appendChild(casebox);
    });

    photo_cont.appendChild(casecontainer);
  });
}

make_divs();

browseall1.addEventListener("click", () => {
  if (photo_cont.style.height === "1918px") {
    photo_cont.style.height = "959px";
    photo_cont.style.overflow = "hidden";
  } else {
    photo_cont.style.height = "1918px";
    photo_cont.style.overflow = "visible";
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

////////////////////////////
// getdivs from massive
let insights = [
  {
    image: "./images/insight2.avif",
    text: "Together, we turn ideas into impactful solutions and drive success forward.",
  },
  {
    image: "./images/insight3.avif",
    text: "Together, we create innovative solutions and achieve lasting success.",
  },
  {
    image: "./images/insight4.avif",
    text: "Collaboration drives our success, turning challenges into opportunities.",
  },
  {
    image: "./images/insight5.avif",
    text: "Our team's strength lies in unity and shared goals.",
  },
  {
    image: "./images/insight6.avif",
    text: "Together, we turn ideas into impactful solutions and success.",
  },
  {
    image: "./images/insight7.avif",
    text: "Through teamwork, we tackle challenges and create lasting impact.",
  },
];
function make_insights_divs() {
  let container = document.getElementById("insight-container");

  let first_group = insights.slice(0, 3);
  let second_group = insights.slice(3, 6);

  let first_Insight_container = document.createElement("div");
  first_Insight_container.classList.add("insight_main_div_1");

  let second_Insight_container = document.createElement("div");
  second_Insight_container.classList.add("insight_main_div_2");

  first_group.forEach((item) => {
    let insight_box = document.createElement("div");
    insight_box.classList.add("insight_box2");

    let img = document.createElement("img");
    img.classList.add("insight_photo2");
    img.src = item.image;

    let paragraph = document.createElement("p");
    paragraph.classList.add("insight_paragraph");
    paragraph.textContent = item.text;

    insight_box.appendChild(img);
    insight_box.appendChild(paragraph);
    first_Insight_container.appendChild(insight_box);
  });

  second_group.forEach((item) => {
    let insight_box = document.createElement("div");
    insight_box.classList.add("insight_box2");

    let img = document.createElement("img");
    img.classList.add("insight_photo2");
    img.src = item.image;

    let paragraph = document.createElement("p");
    paragraph.classList.add("insight_paragraph");
    paragraph.textContent = item.text;

    insight_box.appendChild(img);
    insight_box.appendChild(paragraph);
    second_Insight_container.appendChild(insight_box);
  });

  container.appendChild(first_Insight_container);
  container.appendChild(second_Insight_container);
}

make_insights_divs();

function setVisibilityFromLocalStorage() {
  let isVisible = localStorage.getItem("insightVisibility") === "true"; 
  let insight_main_div_2 = document.querySelectorAll(".insight_main_div_2");

  insight_main_div_2.forEach((element) => {
    if (isVisible) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}

browseall2.addEventListener("click", () => {
  let insight_main_div_2 = document.querySelectorAll(".insight_main_div_2");

  let anyVisible = Array.from(insight_main_div_2).some((element) =>
    element.classList.contains("visible")
  );

  insight_main_div_2.forEach((element) => {
    if (anyVisible) {
      element.classList.remove("visible");
    } else {
      element.classList.add("visible");
    }
  });

  localStorage.setItem("insightVisibility", !anyVisible);
});

setVisibilityFromLocalStorage();

