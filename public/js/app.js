const yolkContainer = document.querySelector(".yolk")
// const yolkWidth = yolkcontainer.getBoundingClientRect().width

const yolkDrop = document.querySelector(".yolk__drop");
const yolkBorder = document.querySelector(".yolk__border");


for (var i = 0; i < 100; i++) {
  let randomY = Math.floor(Math.random()*100)
  let randomX = Math.floor(Math.random()*100)
  let dropDelay = (Math.random()*2.5) + 1
  let drop = document.createElement("div")
  drop.classList.add("yolk__drop")
  drop.setAttribute("style", `top:${randomY}vh; left:${randomX}vw; animation: ${dropDelay}s falling 1s ease-in infinite;`)
  yolkContainer.appendChild(drop)

  let border = document.createElement("div")
  border.classList.add("yolk__border")
  border.setAttribute("style", `top:${randomY}vh; left:${randomX}vw; animation: ${dropDelay}s falling 1s ease-in infinite;`)
  yolkContainer.appendChild(border)
}

// const egg = document.querySelector(".egg");
//
// egg.addEventListener("click", eggYolk)
//
// function eggYolk(){
//   const yolk = document.querySelector(".yolk")
//   yolk.classList.toggle("yolk--hidden")
//   egg.classList.toggle("egg--spinning")
// }
// css checkbox hack
// target selector
// top:50vh;
// left:50vw;
