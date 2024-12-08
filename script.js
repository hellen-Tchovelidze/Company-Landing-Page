let insight_container = document.getElementById("insight_container");
let browseall = document.getElementById("browseall");



let CreatBtn = document.querySelector(".sec_creative_btn")
let Creatp = document.getElementById("Crap")
let isVisible = false;
CreatBtn.addEventListener("click",  async (event) => {
    event.preventDefault

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


