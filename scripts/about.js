w = window.innerWidth;
h = window.innerHeight;

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - 0.25*h
  });
}
document.getElementById("uno").addEventListener('click', () => {
  scrollTo(document.getElementById("first"));
});
document.getElementById("due").addEventListener('click', () => {
  scrollTo(document.getElementById("second"));
});
document.getElementById("tre").addEventListener('click', () => {
  scrollTo(document.getElementById("third"));
});
document.getElementById("quattro").addEventListener('click', () => {
  scrollTo(document.getElementById("fourth"));
});
document.getElementById("cinque").addEventListener('click', () => {
  scrollTo(document.getElementById("fifth"));
});

//Menu
let menuSx = d3.select("#sx");
let menuDx = d3.select("#dx");
let menuLogo = d3.select("#logo");

// crea il bottone CATALOGUE
menuSx
  .append('a')
  .attr('href', "../pages/catalogo.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "catalogue")
  .text("BIAS CATALOGUE")
  .on("click", function () {
  });

// crea il bottone ATLAS
menuSx
  .append('a')
  .attr('href', "../pages/mappa.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "atlas")
  .text("PROMPT EXPLORER")
  // .on("click", function () {
  // });

  // crea il bottone ABOUT
menuDx
.append('a')
.attr('href', "../pages/about.html")
.append("button")
.attr("class", "bottoniMenu")
.attr("id", "about")
.text("ABOUT")
