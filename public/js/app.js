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

const articles = document.querySelectorAll(".sandwichSection__article")
const polygons = document.querySelectorAll(".svg__polygon")

articles.forEach(article=>{
  article.addEventListener("mouseenter", renderKip);
  article.addEventListener("mouseout", renderKip);
})


function renderKip(){
  console.log(event);
  polygons.forEach(polygon =>{
    polygon.style.display = polygon.style.display === 'none' ? '' : 'none';
  })


}
// css checkbox hack
// target selector
// top:50vh;
// left:50vw;
