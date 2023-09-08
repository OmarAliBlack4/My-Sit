//portfolio click events

let liClick = document.querySelectorAll(".work-list li");
let divContent = document.querySelectorAll(".container > div:not(:first-child)");
let arrLiClick = Array.from(liClick);
let arrDivContent = Array.from(divContent);


arrLiClick.forEach((el)=>{
    el.addEventListener("click", (e)=>{
        arrLiClick.forEach((el)=>{
            el.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        arrDivContent.forEach((el)=>{
            el.classList.remove("active");
        })
        document.querySelector(e.currentTarget.dataset.set).classList.add("active");
    })
})

//about me events
