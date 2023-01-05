// Interpret the data as the correct format. Use d3.csv or d3.tsv accordingly.
data = d3.csv("../assets/dataset/data_mappa.csv");
data2 = d3.csv("../assets/dataset/data_catalogo.csv");
let percorsoImmagini = "../assets/catalogo_imgs/normale/";
let altezza = 300;



//array contenitori png
let boxArray = [
  // "hero",
  // "help",
  "Protesting",
  "Standing",
  "Doing-stuff",
  "wilderness",
  "Green",
  "Daydreaming",
  "energy",
  "planet",
  "reuse",
  "waste",
  // "mix",
  // "pairs",
  "signs",
  "infographics",
  "texts",
  "face",
  "Nosense",
];
//array contenitori gif
let boxArray2 = ["hero", "help", "mix", "pairs"];

//percorso sottocategorie png
let catArray = [
  // "A_Heroes",
  // "A_Victims",
  "B_Protesting",
  "B_Standing",
  "B_Doing-things",
  "C_dry-soil",
  "C_green",
  "C_surreal",
  "D_renewable",
  "D_sustainability",
  "D_reduce",
  "D_zero",
  // "E_Collage",
  // "E_Bizarre",
  "F_signs",
  "F_infographics",
  "F_text",
  "G_earth",
  "H",
];
//percorso sottocategorie gif
let catArray2 = ["A_Heroes", "A_Victims", "E_Collage", "E_Bizarre"];

let a = false;
let b = false;
let c = false;
let d = false;
let e = false;
let f = false;
let g = false;
let h = false;
let i = false;

// metti tutti i png nei div corretti
for (let i = 0; i < boxArray.length; i++) {
  let divId = "#" + boxArray[i];
  let filtro = catArray[i];
  let imgDiv = d3.select(divId);

  data.then(function (data) {
    // crea div per ogni elemento con prompt x
    let card = imgDiv
      .selectAll("div")
      .data(data)
      .join("div")
      // all'hover fai apparire il prompt
      // .attr("onmouseover", function () {
      //   return "d3.select(this)._groups[0][0].lastChild.style.opacity=1";
      // })
      // .attr("onmouseout", function () {
      //   return "d3.select(this)._groups[0][0].lastChild.style.opacity=0";
      // })
      .attr("class", "card")
      .attr("id", "allCards")
      // crea div solo per le immagini con prompt x
      .style("display", "none")
      .filter(function (d) {
        return d[filtro] == "TRUE";
      })
      .style("display", "flex");

    // IMMAGINI
    card.append("img").attr("src", function (d) {
      let link_image = d.link_image;
      let path = percorsoImmagini;
      // Concatenate the path and the link_image of the image
      return path + link_image;
    });

    // PROMPT
    card
      .append("div")
      .attr("id", "cardPrompt")
      .text(function (d) {
        let p = d.prompt;
        let pDef = p.replaceAll('-', ' ');
        return 'Prompt: ' + pDef;
      });
  });
}

// metti tutte le gif nei div corretti
for (let i = 0; i < boxArray2.length; i++) {
  let divId = "#" + boxArray2[i];
  let filtro = catArray2[i];
  let imgDiv = d3.select(divId);

  data2.then(function (data2) {
    // crea div per ogni elemento con prompt x
    let card = imgDiv
      .selectAll("div")
      .data(data2)
      .join("div")
      // all'hover fai apparire il prompt
      // .attr("onmouseover", function () {
      //   return "d3.select(this)._groups[0][0].lastChild.style.opacity=1";
      // })
      // .attr("onmouseout", function () {
      //   return "d3.select(this)._groups[0][0].lastChild.style.opacity=0";
      // })
      .attr("class", "card")
      .attr("id", "allCards")
      // crea div solo per le immagini con prompt x
      .style("display", "none")
      .filter(function (d) {
        return d[filtro] == "TRUE";
      })
      .style("display", "flex");

    // IMMAGINI
    card.append("img").attr("src", function (d) {
      let link_image = d.link_image;
      let path = percorsoImmagini;
      // Concatenate the path and the link_image of the image
      return path + link_image;
    });

    // PROMPT
    card
      .append("div")
      .attr("id", "cardPrompt")
      .text(function (d) {
        let p = d.prompt;
        let pDef = p.replaceAll('-', ' ');
        return 'Prompt: ' + pDef;
      });
  });
}

//––––––––––––––––––––––––––––––––––––––––

//Menu
let menuSx = d3.select("#sx");
let menuDx = d3.select("#dx");
let menuLogo = d3.select("#title");

// crea il bottone CATALOGUE
menuSx
  .append("a")
  .attr("href", "../pages/catalogo.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "catalogue")
  .text("BIAS CATALOGUE")
  .on("click", function () {});

// crea il bottone ATLAS
menuSx
  .append("a")
  .attr("href", "../pages/mappa.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "atlas")
  .text("PROMPT EXPLORER");
// .on("click", function () {
// });

// crea il bottone ABOUT
menuDx
  .append("a")
  .attr("href", "../pages/about.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "about")
  .text("ABOUT");
// .on("click", function () {
// });

// menuLogo
// .append('a')
// .attr('href', "/index.html")
// .append("button")
// .attr("class", "bottoniMenu")
// .attr("id", "logo")
// .on("click", function () {
// });

//Bottoni ZOOM
let zoomContainer = d3.select("#zoom");
// crea il bottone +
zoomContainer
  .append("button")
  .attr("class", "bottoniZoom")
  .attr("id", "ZoomPiu")
  .text("+")
  .on("click", function () {
    if (altezza < 500) {
      let ZoomMeno = d3.select("#ZoomMeno");
      ZoomMeno.style("opacity", "1");
      ZoomMeno.style("cursor", "pointer");
      let ZoomPiu = d3.select("#ZoomPiu");
      ZoomPiu.style("opacity", "1");
      ZoomPiu.style("cursor", "pointer");
      let h = altezza + 50;
      altezza = h;
      let hdef = h + "px";
      let box = d3.selectAll(".box-img");
      if (altezza > 400){
        let cardPrompt = d3.selectAll("#cardPrompt")
        cardPrompt.style("display", "flex")
      }
      box.style("height", function () {
        return hdef;
      });
      
    } else {
      let ZoomPiu = d3.select("#ZoomPiu");
      ZoomPiu.style("opacity", "0.3");
      ZoomPiu.style("cursor", "default");
      let h = altezza;
      let hdef = h + "px";
      let box = d3.selectAll(".box-img");
      box.style("height", function () {
        return hdef;
      });
    }
  });

// crea il bottone -
zoomContainer
  .append("button")
  .attr("class", "bottoniZoom")
  .attr("id", "ZoomMeno")
  .text("-")
  .on("click", function () {
    if (altezza > 50) {
      let ZoomPiu = d3.select("#ZoomPiu");
      ZoomPiu.style("opacity", "1");
      ZoomPiu.style("cursor", "pointer");
      let ZoomMeno = d3.select("#ZoomMeno");
      ZoomMeno.style("opacity", "1");
      ZoomMeno.style("cursor", "pointer");
      let h = altezza - 50;
      altezza = h;
      let hdef = h + "px";
      let box = d3.selectAll(".box-img");
      if (altezza <= 400){
        let cardPrompt = d3.selectAll("#cardPrompt")
        cardPrompt.style("display", "none")
      }
      box.style("height", function () {
        return hdef;
      });
    } else {
      let ZoomMeno = d3.select("#ZoomMeno");
      ZoomMeno.style("opacity", "0.3");
      ZoomMeno.style("cursor", "default");
      let h = altezza;
      let hdef = h + "px";
      let box = d3.selectAll(".box-img");
      box.style("height", function () {
        e;
        return hdef;
      });
    }
  });

// crea il bottone reset
zoomContainer
  .append("button")
  .attr("class", "bottoniZoom")
  .attr("id", "ZoomReset")
  .text("RESET")
  .on("click", function () {
    let ZoomPiu = d3.select("#ZoomPiu");
    ZoomPiu.style("opacity", "1");
    ZoomPiu.style("cursor", "pointer");
    let ZoomMeno = d3.select("#ZoomMeno");
    ZoomMeno.style("opacity", "1");
    ZoomMeno.style("cursor", "pointer");
    altezza = 300;
    let box = d3.selectAll(".box-img");
    box.style("height", "300px");
    if (altezza < 400){
      let cardPrompt = d3.selectAll("#cardPrompt")
      cardPrompt.style("display", "none")
    }
  });

// // PROMPT CHE SEGUE LA FRECCINA
// function scrittaSi(x) {
//   let tDef = "scroll »";
//   let Testo = document.getElementById("Testo");
//   Testo.innerText = tDef;

//   let Box = document.getElementById("BoxTesto");
//   Box.style.display = "flex";

//   const onMouseMove = (e) => {
//     Box.style.left = e.pageX + "px";
//     Box.style.top = e.pageY + "px";
//   };
//   document.addEventListener("mousemove", onMouseMove);
// }

// function ScrittaNo(x) {
//   let Box = document.getElementById("BoxTesto");
//   Box.style.display = "none";
// }

//aprire le categorie
function ap(x) {
  // let cont = document.getElementById("x.id")
  // cont.style.height = "auto";
  // cont.style.overflow = "visible";
  let sel = document.getElementById(x.id);

  if (sel.id == "boxBias1") {
    if (a == false) {
      closeAll();
      booleane();
      let text = document.getElementById("titoli-small1");
      text.style.display = "block";
      let titolibig1 = document.getElementById("titoli-big1");
      titolibig1.setAttribute("class", "titoli-bigBold");
      let zoom = document.getElementById("zoom");
      zoom.style.display = "flex";
      let cont1 = document.getElementById("boxCat1");
      cont1.style.display = "flex";
      let cont2 = document.getElementById("boxCat2");
      cont2.style.display = "flex";
      setTimeout(animazione, 300);
      window.scrollTo(100, 0);

      a = true;
    } else if (a == true) {
      let titolibig1 = document.getElementById("titoli-big1");
      titolibig1.setAttribute("class", "titoli-big");
      let text = document.getElementById("titoli-small1");
      text.style.display = "none";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "none";
      let cont1 = document.getElementById("boxCat1");
      cont1.style.display = "none";
      let cont2 = document.getElementById("boxCat2");
      cont2.style.display = "none";
      a = false;
    }
  } else if (sel.id == "boxBias2") {
    if (b == false) {
      closeAll();
      booleane();
      let titolibig2 = document.getElementById("titoli-big2");
      titolibig2.setAttribute("class", "titoli-bigBold");
      let text = document.getElementById("titoli-small2");
      text.style.display = "block";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "flex";
      let cont1 = document.getElementById("boxCat3");
      cont1.style.display = "flex";
      let cont2 = document.getElementById("boxCat4");
      cont2.style.display = "flex";
      let cont3 = document.getElementById("boxCat5");
      cont3.style.display = "flex";
      setTimeout(animazione, 300);
      window.scrollTo(100, 0);

      b = true;
    } else if (b == true) {
      let titolibig2 = document.getElementById("titoli-big2");
      titolibig2.setAttribute("class", "titoli-big");
      let text = document.getElementById("titoli-small2");
      text.style.display = "none";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "none";
      let cont1 = document.getElementById("boxCat3");
      cont1.style.display = "none";
      let cont2 = document.getElementById("boxCat4");
      cont2.style.display = "none";
      let cont3 = document.getElementById("boxCat5");
      cont3.style.display = "none";
      b = false;
      booleane();
    }
  } else if (sel.id == "boxBias3") {
    if (c == false) {
      closeAll();
      booleane();
      let titolibig3 = document.getElementById("titoli-big3");
      titolibig3.setAttribute("class", "titoli-bigBold");
      let text = document.getElementById("titoli-small3");
      text.style.display = "block";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "flex";
      let cont1 = document.getElementById("boxCat6");
      cont1.style.display = "flex";
      let cont2 = document.getElementById("boxCat7");
      cont2.style.display = "flex";
      let cont3 = document.getElementById("boxCat8");
      cont3.style.display = "flex";
      setTimeout(animazione, 300);
      window.scrollTo(100, 0);

      c = true;
    } else if (c == true) {
      let titolibig3 = document.getElementById("titoli-big3");
      titolibig3.setAttribute("class", "titoli-big");
      let text = document.getElementById("titoli-small3");
      text.style.display = "none";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "none";
      let cont1 = document.getElementById("boxCat6");
      cont1.style.display = "none";
      let cont2 = document.getElementById("boxCat7");
      cont2.style.display = "none";
      let cont3 = document.getElementById("boxCat8");
      cont3.style.display = "none";
      c = false;
      booleane();
    }
  } else if (sel.id == "boxBias4") {
    if (d == false) {
      closeAll();
      booleane();
      let titolibig4 = document.getElementById("titoli-big4");
      titolibig4.setAttribute("class", "titoli-bigBold");
      let text = document.getElementById("titoli-small4");
      text.style.display = "block";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "flex";
      let cont1 = document.getElementById("boxCat9");
      cont1.style.display = "flex";
      let cont2 = document.getElementById("boxCat10");
      cont2.style.display = "flex";
      let cont3 = document.getElementById("boxCat11");
      cont3.style.display = "flex";
      let cont4 = document.getElementById("boxCat12");
      cont4.style.display = "flex";
      setTimeout(animazione, 300);
      window.scrollTo(100, 0);

      window.scrollTo(100, 0);
      d = true;
    } else if (d == true) {
      let titolibig4 = document.getElementById("titoli-big4");
      titolibig4.setAttribute("class", "titoli-big");
      let text = document.getElementById("titoli-small4");
      text.style.display = "none";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "none";
      let cont1 = document.getElementById("boxCat9");
      cont1.style.display = "none";
      let cont2 = document.getElementById("boxCat10");
      cont2.style.display = "none";
      let cont3 = document.getElementById("boxCat11");
      cont3.style.display = "none";
      let cont4 = document.getElementById("boxCat12");
      cont4.style.display = "none";
      d = false;
      booleane();
    }
  }
  if (sel.id == "boxBias5") {
    if (e == false) {
      closeAll();
      booleane();
      let titolibig5 = document.getElementById("titoli-big5");
      titolibig5.setAttribute("class", "titoli-bigBold");
      let text = document.getElementById("titoli-small5");
      text.style.display = "block";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "flex";
      let cont1 = document.getElementById("boxCat13");
      cont1.style.display = "flex";
      let cont2 = document.getElementById("boxCat14");
      cont2.style.display = "flex";
      setTimeout(animazione, 300);
      window.scrollTo(100, 0);
      e = true;
    } else if (e == true) {
      let titolibig5 = document.getElementById("titoli-big5");
      titolibig5.setAttribute("class", "titoli-big");
      let text = document.getElementById("titoli-small5");
      text.style.display = "none";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "none";
      let cont1 = document.getElementById("boxCat13");
      cont1.style.display = "none";
      let cont2 = document.getElementById("boxCat14");
      cont2.style.display = "none";
      e = false;
      booleane();
    }
  }
  if (sel.id == "boxBias6") {
    if (f == false) {
      closeAll();
      booleane();
      let titolibig6 = document.getElementById("titoli-big6");
      titolibig6.setAttribute("class", "titoli-bigBold");
      let text = document.getElementById("titoli-small6");
      text.style.display = "block";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "flex";
      let cont1 = document.getElementById("boxCat15");
      cont1.style.display = "flex";
      let cont2 = document.getElementById("boxCat16");
      cont2.style.display = "flex";
      let cont3 = document.getElementById("boxCat17");
      cont3.style.display = "flex";
      setTimeout(animazione, 300);
      window.scrollTo(100, 0);

      f = true;
    } else if (f == true) {
      let titolibig6 = document.getElementById("titoli-big6");
      titolibig6.setAttribute("class", "titoli-big");
      let text = document.getElementById("titoli-small6");
      text.style.display = "none";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "none";
      let cont1 = document.getElementById("boxCat15");
      cont1.style.display = "none";
      let cont2 = document.getElementById("boxCat16");
      cont2.style.display = "none";
      let cont3 = document.getElementById("boxCat17");
      cont3.style.display = "none";
      f = false;
      booleane();
    }
  }
  if (sel.id == "boxBias7") {
    if (g == false) {
      closeAll();
      booleane();
      let titolibig7 = document.getElementById("titoli-big7");
      titolibig7.setAttribute("class", "titoli-bigBold");
      let text = document.getElementById("titoli-small7");
      text.style.display = "block";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "flex";
      let cont1 = document.getElementById("boxCat18");
      cont1.style.display = "flex";
      setTimeout(animazione, 300);
      window.scrollTo(100, 0);

      g = true;
    } else if (g == true) {
      let titolibig7 = document.getElementById("titoli-big7");
      titolibig7.setAttribute("class", "titoli-big");
      let text = document.getElementById("titoli-small7");
      text.style.display = "none";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "none";
      let cont1 = document.getElementById("boxCat18");
      cont1.style.display = "none";
      g = false;
      booleane();
    }
  }
  if (sel.id == "boxBias8") {
    if (i == false) {
      closeAll();
      booleane();
      let titolibig8 = document.getElementById("titoli-big8");
      titolibig8.setAttribute("class", "titoli-bigBold");
      let text = document.getElementById("titoli-small8");
      text.style.display = "block";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "flex";
      let cont1 = document.getElementById("boxCat19");
      cont1.style.display = "flex";
      setTimeout(animazione, 300);
      // window.scrollTo(0, 0);

      i = true;
    } else if (i == true) {
      let titolibig8 = document.getElementById("titoli-big8");
      titolibig8.setAttribute("class", "titoli-big");
      let titolibig3 = document.getElementById("titoli-big3");
      titolibig3.setAttribute("class", "titoli-big");
      let text = document.getElementById("titoli-small8");
      text.style.display = "none";
      let zoom = document.getElementById("zoom");
      zoom.style.display = "none";
      let cont1 = document.getElementById("boxCat19");
      cont1.style.display = "none";
      i = false;
      booleane();
    }
  }
}

function animazione() {
  let box = d3.selectAll(".box-img");
  box.style("height", "300px");
}

/// fai selezionare solo una sezione per volta
/// grassetti e italic testo

function closeAll() {
  let titolibig1 = document.getElementById("titoli-big1");
  titolibig1.setAttribute("class", "titoli-big");
  let titolibig2 = document.getElementById("titoli-big2");
  titolibig2.setAttribute("class", "titoli-big");
  let titolibig3 = document.getElementById("titoli-big3");
  titolibig3.setAttribute("class", "titoli-big");
  let titolibig4 = document.getElementById("titoli-big4");
  titolibig4.setAttribute("class", "titoli-big");
  let titolibig5 = document.getElementById("titoli-big5");
  titolibig5.setAttribute("class", "titoli-big");
  let titolibig6 = document.getElementById("titoli-big6");
  titolibig6.setAttribute("class", "titoli-big");
  let titolibig7 = document.getElementById("titoli-big7");
  titolibig7.setAttribute("class", "titoli-big");
  let titolibig8 = document.getElementById("titoli-big8");
  titolibig8.setAttribute("class", "titoli-big");
  let text1 = document.getElementById("titoli-small1");
  text1.style.display = "none";
  let text2 = document.getElementById("titoli-small2");
  text2.style.display = "none";
  let text3 = document.getElementById("titoli-small3");
  text3.style.display = "none";
  let text4 = document.getElementById("titoli-small4");
  text4.style.display = "none";
  let text5 = document.getElementById("titoli-small5");
  text5.style.display = "none";
  let text6 = document.getElementById("titoli-small6");
  text6.style.display = "none";
  let text7 = document.getElementById("titoli-small7");
  text7.style.display = "none";
  let text8 = document.getElementById("titoli-small8");
  text8.style.display = "none";
  let cont1 = document.getElementById("boxCat1");
  cont1.style.display = "none";
  let cont2 = document.getElementById("boxCat2");
  cont2.style.display = "none";
  let cont3 = document.getElementById("boxCat3");
  cont3.style.display = "none";
  let cont4 = document.getElementById("boxCat4");
  cont4.style.display = "none";
  let cont5 = document.getElementById("boxCat5");
  cont5.style.display = "none";
  let cont6 = document.getElementById("boxCat6");
  cont6.style.display = "none";
  let cont7 = document.getElementById("boxCat7");
  cont7.style.display = "none";
  let cont8 = document.getElementById("boxCat8");
  cont8.style.display = "none";
  let cont9 = document.getElementById("boxCat9");
  cont9.style.display = "none";
  let cont10 = document.getElementById("boxCat10");
  cont10.style.display = "none";
  let cont11 = document.getElementById("boxCat11");
  cont11.style.display = "none";
  let cont12 = document.getElementById("boxCat12");
  cont12.style.display = "none";
  let cont13 = document.getElementById("boxCat13");
  cont13.style.display = "none";
  let cont14 = document.getElementById("boxCat14");
  cont14.style.display = "none";
  let cont15 = document.getElementById("boxCat15");
  cont15.style.display = "none";
  let cont16 = document.getElementById("boxCat16");
  cont16.style.display = "none";
  let cont17 = document.getElementById("boxCat17");
  cont17.style.display = "none";
  let cont18 = document.getElementById("boxCat18");
  cont18.style.display = "none";
  let cont19 = document.getElementById("boxCat19");
  cont19.style.display = "none";
  let box = d3.selectAll(".box-img");
  box.style("height", "50px");
  let ZoomMeno = d3.select("#ZoomMeno");
  ZoomMeno.style("opacity", "1");
  ZoomMeno.style("cursor", "pointer");
  let ZoomPiu = d3.select("#ZoomPiu");
  ZoomPiu.style("opacity", "1");
  ZoomPiu.style("cursor", "pointer");
  altezza = 300;
    let cardPrompt = d3.selectAll("#cardPrompt")
    cardPrompt.style("display", "none")

}

function booleane() {
  a = false;
  b = false;
  c = false;
  d = false;
  e = false;
  f = false;
  g = false;
  h = false;
  i = false;
}

function overGif1() {
  if (
    a == false &&
    b == false &&
    c == false &&
    d == false &&
    e == false &&
    f == false &&
    g == false &&
    h == false &&
    i == false
  ) {
    let gif1 = document.getElementById("gif1");
    gif1.style.display = "block";
  }
}
function overGif2() {
  if (
    a == false &&
    b == false &&
    c == false &&
    d == false &&
    e == false &&
    f == false &&
    g == false &&
    h == false &&
    i == false
  ) {
    let gif2 = document.getElementById("gif2");
    gif2.style.display = "block";
  }
}
function overGif3() {
  if (
    a == false &&
    b == false &&
    c == false &&
    d == false &&
    e == false &&
    f == false &&
    g == false &&
    h == false &&
    i == false
  ) {
    let gif3 = document.getElementById("gif3");
    gif3.style.display = "block";
  }
}
function overGif4() {
  if (
    a == false &&
    b == false &&
    c == false &&
    d == false &&
    e == false &&
    f == false &&
    g == false &&
    h == false &&
    i == false
  ) {
    let gif4 = document.getElementById("gif4");
    gif4.style.display = "block";
  }
}
function overGif5() {
  if (
    a == false &&
    b == false &&
    c == false &&
    d == false &&
    e == false &&
    f == false &&
    g == false &&
    h == false &&
    i == false
  ) {
    let gif5 = document.getElementById("gif5");
    gif5.style.display = "block";
  }
}
function overGif6() {
  if (
    a == false &&
    b == false &&
    c == false &&
    d == false &&
    e == false &&
    f == false &&
    g == false &&
    h == false &&
    i == false
  ) {
    let gif6 = document.getElementById("gif6");
    gif6.style.display = "block";
  }
}
function overGif7() {
  if (
    a == false &&
    b == false &&
    c == false &&
    d == false &&
    e == false &&
    f == false &&
    g == false &&
    h == false &&
    i == false
  ) {
    let gif7 = document.getElementById("gif7");
    gif7.style.display = "block";
  }
}
function overGif8() {
  if (
    a == false &&
    b == false &&
    c == false &&
    d == false &&
    e == false &&
    f == false &&
    g == false &&
    h == false &&
    i == false
  ) {
    let gif8 = document.getElementById("gif8");
    gif8.style.display = "block";
  }
}

function noOverGif1() {
  let gif1 = document.getElementById("gif1");
  gif1.style.display = "none";
}
function noOverGif2() {
  let gif2 = document.getElementById("gif2");
  gif2.style.display = "none";
}
function noOverGif3() {
  let gif3 = document.getElementById("gif3");
  gif3.style.display = "none";
}
function noOverGif4() {
  let gif4 = document.getElementById("gif4");
  gif4.style.display = "none";
}
function noOverGif5() {
  let gif5 = document.getElementById("gif5");
  gif5.style.display = "none";
}
function noOverGif6() {
  let gif6 = document.getElementById("gif6");
  gif6.style.display = "none";
}
function noOverGif7() {
  let gif7 = document.getElementById("gif7");
  gif7.style.display = "none";
}
function noOverGif8() {
  let gif8 = document.getElementById("gif8");
  gif8.style.display = "none";
}

function closeGif() {
  let gif1 = document.getElementById("gif1");
  gif1.style.display = "none";

  let gif2 = document.getElementById("gif2");
  gif2.style.display = "none";

  let gif3 = document.getElementById("gif3");
  gif3.style.display = "none";

  let gif4 = document.getElementById("gif4");
  gif4.style.display = "none";

  let gif5 = document.getElementById("gif5");
  gif5.style.display = "none";

  let gif6 = document.getElementById("gif6");
  gif6.style.display = "none";

  let gif7 = document.getElementById("gif7");
  gif7.style.display = "none";

  let gif8 = document.getElementById("gif8");
  gif8.style.display = "none";
}
