// Interpret the data as the correct format. Use d3.csv or d3.tsv accordingly.
data = d3.csv("../assets/dataset/data_mappa.csv");

//percorso immagini
let percorsoImmagini = "/assets/mappa_imgs/normale/";
let promptArray = [
  "climate-change",
  "climate-crisis",
  "climate-emergency",
  "people-affected-by-climate-change",
  "people-affected-by-extreme-weather",
  "people-affected-by-floodings",
  "people-affected-by-droughts",
  "people-affected-by-smog",
  "people-affected-by-wildfires",
  "people-engaging-in-sustainability",
  "people-recycling-for-sustainability",
  "people-zero-emissions",
  "people-using-renewable-energy",
  "people-engaging-in-circular-economy",
  "people-living-eco-friendly",
  "climate-change-engineers",
  "climate-change-volunteers",
  "people-buying-second-hand-for-sustainability",
  "people-careful-to-zero-waste",
  "people-daily-zero-waste-choices",
  "people-ethics-of-reuse",
  "sustainable-projects-for-preventing-climate-change",
  "climate-change-activists",
  "climate-change-researchers",
  "companies-making-greenwashing",
  "consumerism-affecting-climate-change",
];

//boolean filtri
let a = false;
let b = false;
let c = false;
let d = false;
let e = false;
let f = false;
let g = false;
let h = false;
let all = false;

// Select the container where we will put our HTML elements

for (let i = 0; i < promptArray.length; i++) {
  let divId = "#" + promptArray[i];
  let promptDiv = d3.select(divId);

  data.then(function (data) {
    // crea div per ogni elemento con prompt climate change
    let card = promptDiv
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
      // crea div solo per le immagini con prompt climate change
      .style("display", "none")
      .filter(function (d) {
        return d.prompt == promptArray[i];
      })
      .style("display", "block");

    // IMMAGINI
    card
      .append("img")
      .attr("class", "card-img-top")
      .attr("src", function (d) {
        let link_image = d.link_image;
        let path = percorsoImmagini;
        // Concatenate the path and the link_image of the image
        return path + link_image;
      });

    // // PROMPT
    // card
    //   .append("div")
    //   .attr("class", "card-prompt")
    //   .text(function (d) {
    //     return "prompt: " + d.prompt;
    //   });


    // let testo = d3.select("#Testo");
    // testo
    // .text(scritta)


  });
}

//––––––––––––––––––––––––––––––––––––––––

//FILTRI DEI BIAS
let biasContainer = d3.select("#bias");
let reset = d3.select("#resetFiltri");

// crea il bottone all
reset
  .on("click", function () {
    d3.selectAll(".card").style("opacity", "1");
    a = false;
    b = false;
    c = false;
    d = false;
    e = false;
    f = false;
    g = false;
    h = false;
    // diversifica visivamente il bottone attivo e cambia titolo
    let titolo = d3.select("#main-title");
    titolo.text("Explore all the biases");
    let casella = d3.select("#casella");
    casella.text("- SELECT THE BIAS -");
    casella.style("font-style", "italic")
    casella.append("img")
    .attr("src", "../assets/svg/freccia_nera.svg")
    .attr("id", "freccia")
    .style("rotate", "-90deg")
    // resetta tutti gli altri
    let bottoneA = d3.select("#bottoneBiasA");
    bottoneA.style("font-family", "Suisse-Regular");
    bottoneA.style("text-decoration", "none");
    let bottoneB = d3.select("#bottoneBiasB");
    bottoneB.style("font-family", "Suisse-Regular");
    bottoneB.style("text-decoration", "none");
    let bottoneC = d3.select("#bottoneBiasC");
    bottoneC.style("font-family", "Suisse-Regular");
    bottoneC.style("text-decoration", "none");
    let bottoneD = d3.select("#bottoneBiasD");
    bottoneD.style("font-family", "Suisse-Regular");
    bottoneD.style("text-decoration", "none");
    let bottoneE = d3.select("#bottoneBiasE");
    bottoneE.style("font-family", "Suisse-Regular");
    bottoneE.style("text-decoration", "none");
    let bottoneF = d3.select("#bottoneBiasF");
    bottoneF.style("font-family", "Suisse-Regular");
    bottoneF.style("text-decoration", "none");
    let bottoneG = d3.select("#bottoneBiasG");
    bottoneG.style("font-family", "Suisse-Regular");
    bottoneG.style("text-decoration", "none");
    let bottoneH = d3.select("#bottoneBiasH");
    bottoneH.style("font-family", "Suisse-Regular");
    bottoneH.style("text-decoration", "none");
    // chiudi filtro
    let bias = d3.select("#bias");
    bias.style("display", "none");
    let biasSub = d3.select("#biasSub");
    biasSub.style("display", "none");
    let menuTendina = d3.select("#menuTendina");
    menuTendina.style("top", "90vh");
    // let casella = d3.select("#casella");
    // casella.style("margin-left", "15px");
    let freccia = d3.select("#freccia");
    freccia.style("rotate", "-90deg");
    n = false;
  });

// crea il bottone A
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasA")
  .text("IT'S GIVING *RACISM*")
  // al click, resetta e mostra solo le immagini A
  .on("click", function () {
    if (a == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.A == "FALSE";
        })
        .style("opacity", "0.2");
      a = true;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;
      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("font-family", "Suisseintl-Bold");
      bottoneA.style("text-decoration", "underline");
      // titolo.text("Bias uno...");
      // resetta tutti gli altri
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("font-family", "Suisse-Regular");
      bottoneB.style("text-decoration", "none");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("font-family", "Suisse-Regular");
      bottoneC.style("text-decoration", "none");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("font-family", "Suisse-Regular");
      bottoneD.style("text-decoration", "none");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("font-family", "Suisse-Regular");
      bottoneE.style("text-decoration", "none");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("font-family", "Suisse-Regular");
      bottoneF.style("text-decoration", "none");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("font-family", "Suisse-Regular");
      bottoneG.style("text-decoration", "none");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("font-family", "Suisse-Regular");
      bottoneH.style("text-decoration", "none");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("font-family", "Suisse-Regular");
      bottoneAll.style("text-decoration", "none");
      let casella = d3.select("#casella");
      casella.text("IT'S GIVING *RACISM*");
      casella.style("font-style", "normal")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")

      // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (a == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.A == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;
      // resetta formattazione bottone e titolo
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("font-family", "Suisse-Regular");
      bottoneA.style("text-decoration", "none");
      // let bottoneAll = d3.select("#bottoneBiasAll");
      // bottoneAll.style("font-family", "Suisseintl-Bold");
      // bottoneAll.style("text-decoration", "underline");
      let casella = d3.select("#casella");
      casella.text("- SELECT THE BIAS -");
      casella.style("font-style", "italic")
      casella.append("img")
      .attr("src", "..../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
    }
  });

// crea il bottone B
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasB")
  .text("BIG GREEN DREAM TEAM")
  // al click, resetta e mostra solo le immagini B
  .on("click", function () {
    if (b == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.B == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = true;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("font-family", "Suisseintl-Bold");
      bottoneB.style("text-decoration", "underline");
      // titolo.text("Bias due...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("font-family", "Suisse-Regular");
      bottoneA.style("text-decoration", "none");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("font-family", "Suisse-Regular");
      bottoneC.style("text-decoration", "none");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("font-family", "Suisse-Regular");
      bottoneD.style("text-decoration", "none");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("font-family", "Suisse-Regular");
      bottoneE.style("text-decoration", "none");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("font-family", "Suisse-Regular");
      bottoneF.style("text-decoration", "none");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("font-family", "Suisse-Regular");
      bottoneG.style("text-decoration", "none");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("font-family", "Suisse-Regular");
      bottoneH.style("text-decoration", "none");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("font-family", "Suisse-Regular");
      bottoneAll.style("text-decoration", "none");
      let casella = d3.select("#casella");
      casella.text("BIG GREEN DREAM TEAM");
      casella.style("font-style", "normal")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
            // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (b == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.B == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasB");
      bottone.style("font-family", "Suisse-Regular");
      bottone.style("text-decoration", "none");
      // let bottoneAll = d3.select("#bottoneBiasAll");
      // bottoneAll.style("font-family", "Suisseintl-Bold");
      // bottoneAll.style("text-decoration", "underline");
      let casella = d3.select("#casella");
      casella.text("- SELECT THE BIAS -");
      casella.style("font-style", "italic")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
        }
  });

// crea il bottone C
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasC")
  .text("LANDSCAPE DÉJÀ VU")
  // al click, resetta e mostra solo le immagini C
  .on("click", function () {
    if (c == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.C == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = false;
      c = true;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("font-family", "Suisseintl-Bold");
      bottoneC.style("text-decoration", "underline");
      // titolo.text("Bias tre...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("font-family", "Suisse-Regular");
      bottoneA.style("text-decoration", "none");
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("font-family", "Suisse-Regular");
      bottoneB.style("text-decoration", "none");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("font-family", "Suisse-Regular");
      bottoneD.style("text-decoration", "none");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("font-family", "Suisse-Regular");
      bottoneE.style("text-decoration", "none");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("font-family", "Suisse-Regular");
      bottoneF.style("text-decoration", "none");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("font-family", "Suisse-Regular");
      bottoneG.style("text-decoration", "none");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("font-family", "Suisse-Regular");
      bottoneH.style("text-decoration", "none");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("font-family", "Suisse-Regular");
      bottoneAll.style("text-decoration", "none");
      let casella = d3.select("#casella");
      casella.text("LANDSCAPE DÉJÀ VU");
      casella.style("font-style", "normal")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
            // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (c == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.C == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasC");
      bottone.style("font-family", "Suisse-Regular");
      bottone.style("text-decoration", "none");
      // let bottoneAll = d3.select("#bottoneBiasAll");
      // bottoneAll.style("font-family", "Suisseintl-Bold");
      // bottoneAll.style("text-decoration", "underline");
      let casella = d3.select("#casella");
      casella.text("- SELECT THE BIAS -");
      casella.style("font-style", "italic")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
        }
  });

// crea il bottone D
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasD")
  .text("GREENWASHED SOLUTIONS")
  // al click, resetta e mostra solo le immagini D
  .on("click", function () {
    if (d == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.D == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = false;
      c = false;
      d = true;
      e = false;
      f = false;
      g = false;
      h = false;

      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("font-family", "Suisseintl-Bold");
      bottoneD.style("text-decoration", "underline");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias quattro...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("font-family", "Suisse-Regular");
      bottoneA.style("text-decoration", "none");
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("font-family", "Suisse-Regular");
      bottoneB.style("text-decoration", "none");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("font-family", "Suisse-Regular");
      bottoneC.style("text-decoration", "none");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("font-family", "Suisse-Regular");
      bottoneE.style("text-decoration", "none");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("font-family", "Suisse-Regular");
      bottoneF.style("text-decoration", "none");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("font-family", "Suisse-Regular");
      bottoneG.style("text-decoration", "none");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("font-family", "Suisse-Regular");
      bottoneH.style("text-decoration", "none");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("font-family", "Suisse-Regular");
      bottoneAll.style("text-decoration", "none");
      let casella = d3.select("#casella");
      casella.text("GREENWASHED SOLUTIONS");
      casella.style("font-style", "normal")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
            // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (d == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.D == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasD");
      bottone.style("font-family", "Suisse-Regular");
      bottone.style("text-decoration", "none");
      // let bottoneAll = d3.select("#bottoneBiasAll");
      // bottoneAll.style("font-family", "Suisseintl-Bold");
      // bottoneAll.style("text-decoration", "underline");
      let casella = d3.select("#casella");
      casella.text("- SELECT THE BIAS -");
      casella.style("font-style", "italic")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
        }
  });

// crea il bottone E
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasE")
  .text("CLIMATE PATCHWORK")
  // al click, resetta e mostra solo le immagini E
  .on("click", function () {
    if (e == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.E == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = false;
      c = false;
      d = false;
      e = true;
      f = false;
      g = false;
      h = false;

      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("font-family", "Suisseintl-Bold");
      bottoneE.style("text-decoration", "underline");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias cinque...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("font-family", "Suisse-Regular");
      bottoneA.style("text-decoration", "none");
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("font-family", "Suisse-Regular");
      bottoneB.style("text-decoration", "none");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("font-family", "Suisse-Regular");
      bottoneC.style("text-decoration", "none");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("font-family", "Suisse-Regular");
      bottoneD.style("text-decoration", "none");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("font-family", "Suisse-Regular");
      bottoneF.style("text-decoration", "none");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("font-family", "Suisse-Regular");
      bottoneG.style("text-decoration", "none");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("font-family", "Suisse-Regular");
      bottoneH.style("text-decoration", "none");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("font-family", "Suisse-Regular");
      bottoneAll.style("text-decoration", "none");
      let casella = d3.select("#casella");
      casella.text("CLIMATE PATCHWORK");
      casella.style("font-style", "normal")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
            // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (e == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.E == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasE");
      bottone.style("font-family", "Suisse-Regular");
      bottone.style("text-decoration", "none");
      // let bottoneAll = d3.select("#bottoneBiasAll");
      // bottoneAll.style("font-family", "Suisseintl-Bold");
      // bottoneAll.style("text-decoration", "underline");
      let casella = d3.select("#casella");
      casella.text("- SELECT THE BIAS -");
      casella.style("font-style", "italic")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
        }
  });

// crea il bottone F
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasF")
  .text("SCRIPTS BEFORE PICS")
  // al click, resetta e mostra solo le immagini F
  .on("click", function () {
    if (f == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.F == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = true;
      g = false;
      h = false;
      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("font-family", "Suisseintl-Bold");
      bottoneF.style("text-decoration", "underline");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias sei...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("font-family", "Suisse-Regular");
      bottoneA.style("text-decoration", "none");
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("font-family", "Suisse-Regular");
      bottoneB.style("text-decoration", "none");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("font-family", "Suisse-Regular");
      bottoneC.style("text-decoration", "none");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("font-family", "Suisse-Regular");
      bottoneD.style("text-decoration", "none");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("font-family", "Suisse-Regular");
      bottoneE.style("text-decoration", "none");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("font-family", "Suisse-Regular");
      bottoneG.style("text-decoration", "none");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("font-family", "Suisse-Regular");
      bottoneH.style("text-decoration", "none");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("font-family", "Suisse-Regular");
      bottoneAll.style("text-decoration", "none");
      let casella = d3.select("#casella");
      casella.text("SCRIPTS BEFORE PICS");
      casella.style("font-style", "normal")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
            // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (f == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.F == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;
      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasF");
      bottone.style("font-family", "Suisse-Regular");
      bottone.style("text-decoration", "none");
      // let bottoneAll = d3.select("#bottoneBiasAll");
      // bottoneAll.style("font-family", "Suisseintl-Bold");
      // bottoneAll.style("text-decoration", "underline");
      let casella = d3.select("#casella");
      casella.text("- SELECT THE BIAS -");
      casella.style("font-style", "italic")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
        }
  });

// crea il bottone G
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasG")
  .text("DOWN TO EARTH")
  // al click, resetta e mostra solo le immagini G
  .on("click", function () {
    if (g == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.G == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = true;
      h = false;
      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("font-family", "Suisseintl-Bold");
      bottoneG.style("text-decoration", "underline");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias sette...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("font-family", "Suisse-Regular");
      bottoneA.style("text-decoration", "none");
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("font-family", "Suisse-Regular");
      bottoneB.style("text-decoration", "none");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("font-family", "Suisse-Regular");
      bottoneC.style("text-decoration", "none");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("font-family", "Suisse-Regular");
      bottoneD.style("text-decoration", "none");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("font-family", "Suisse-Regular");
      bottoneE.style("text-decoration", "none");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("font-family", "Suisse-Regular");
      bottoneF.style("text-decoration", "none");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("font-family", "Suisse-Regular");
      bottoneH.style("text-decoration", "none");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("font-family", "Suisse-Regular");
      bottoneAll.style("text-decoration", "none");
      let casella = d3.select("#casella");
      casella.text("DOWN TO EARTH");
      casella.style("font-style", "normal")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
            // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (g == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.G == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;
      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasG");
      bottone.style("font-family", "Suisse-Regular");
      bottone.style("text-decoration", "none");
      // let bottoneAll = d3.select("#bottoneBiasAll");
      // bottoneAll.style("font-family", "Suisseintl-Bold");
      // bottoneAll.style("text-decoration", "underline");
      let casella = d3.select("#casella");
      casella.text("- SELECT THE BIAS -");
      casella.style("font-style", "italic")
      casella.append("img")
      .attr("src", "../assets/svg/freccia_nera.svg")
      .attr("id", "freccia")
      .style("rotate", "90deg")
        }
  });


  // crea il bottone H
biasContainer
.append("button")
.attr("class", "bottoniBias")
.attr("id", "bottoneBiasH")
.text("NONSENSE OUT OF HAND")
// al click, resetta e mostra solo le immagini H
.on("click", function () {
  if (h == false) {
    d3.selectAll(".card")
      .style("opacity", "1")
      .filter(function (d) {
        return d.H == "FALSE";
      })
      .style("opacity", "0.2");
    a = false;
    b = false;
    c = false;
    d = false;
    e = false;
    f = false;
    g = false;
    h = true;

    // diversifica visivamente il bottone attivo e cambia titolo
    let bottoneH = d3.select("#bottoneBiasH");
    bottoneH.style("font-family", "Suisseintl-Bold");
    bottoneH.style("text-decoration", "underline");
    // let titolo = d3.select("#main-title");
    // titolo.text("Bias sette...");
    // resetta tutti gli altri
    let bottoneA = d3.select("#bottoneBiasA");
    bottoneA.style("font-family", "Suisse-Regular");
    bottoneA.style("text-decoration", "none");
    let bottoneB = d3.select("#bottoneBiasB");
    bottoneB.style("font-family", "Suisse-Regular");
    bottoneB.style("text-decoration", "none");
    let bottoneC = d3.select("#bottoneBiasC");
    bottoneC.style("font-family", "Suisse-Regular");
    bottoneC.style("text-decoration", "none");
    let bottoneD = d3.select("#bottoneBiasD");
    bottoneD.style("font-family", "Suisse-Regular");
    bottoneD.style("text-decoration", "none");
    let bottoneE = d3.select("#bottoneBiasE");
    bottoneE.style("font-family", "Suisse-Regular");
    bottoneE.style("text-decoration", "none");
    let bottoneF = d3.select("#bottoneBiasF");
    bottoneF.style("font-family", "Suisse-Regular");
    bottoneF.style("text-decoration", "none");
    let bottoneG = d3.select("#bottoneBiasG");
    bottoneG.style("font-family", "Suisse-Regular");
    bottoneG.style("text-decoration", "none");
    let bottoneAll = d3.select("#bottoneBiasAll");
    bottoneAll.style("font-family", "Suisse-Regular");
    bottoneAll.style("text-decoration", "none");
    let casella = d3.select("#casella");
    casella.text("NONSENSE OUT OF HAND");
    casella.style("font-style", "normal")
    casella.append("img")
    .attr("src", "../assets/svg/freccia_nera.svg")
    .attr("id", "freccia")
    .style("rotate", "90deg")
    // al secono click sul bottone, togli il filtro e mostra tutte le img
  } else if (h == true) {
    d3.selectAll(".card")
      .filter(function (d) {
        return d.H == "FALSE";
      })
      .style("opacity", "1");
    a = false;
    b = false;
    c = false;
    d = false;
    e = false;
    f = false;
    g = false;
    h = false;
    // resetta formattazione bottone e titolo
    let bottone = d3.select("#bottoneBiasH");
    bottone.style("font-family", "Suisse-Regular");
    bottone.style("text-decoration", "none");
    let bottoneAll = d3.select("#bottoneBiasAll");
    bottoneAll.style("font-family", "Suisseintl-Bold");
    bottoneAll.style("text-decoration", "underline");
    let casella = d3.select("#casella");
    casella.text("- SELECT THE BIAS -");
    casella.style("font-style", "italic")
    casella.append("img")
    .attr("src", "../assets/svg/freccia_nera.svg")
    .attr("id", "freccia")
    .style("rotate", "90deg")
  }
});


//PROMPT che SEGUE IL CURSORE
// function scrittaSi(x) {
//   let t = x.id;
//   let tDef = t.replaceAll('-', ' ');
//   let Testo = document.getElementById("Testo");
//   Testo.innerText = "Prompt: " + tDef;

//   let Box = document.getElementById("BoxTesto");
//   Box.style.display = "block";

//   const onMouseMove = (e) => {
//   Box.style.left = e.pageX + "px";
//   Box.style.top = e.pageY + "px";
// };
// document.addEventListener("mousemove", onMouseMove);
// }

// function ScrittaNo(x) {
//   let Box = document.getElementById("BoxTesto");
//   Box.style.display = "none";
// }


//Menu
let menuSx = d3.select("#sx");
let menuDx = d3.select("#dx");
let menuLogo = d3.select("#title");

// crea il bottone CATALOGUE
menuSx
  .append("a")
  .attr("href", "/pages/catalogo.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "catalogue")
  .text("BIAS CATALOGUE")
  .on("click", function () {});

// crea il bottone ATLAS
menuSx
  .append("a")
  .attr("href", "/pages/mappa.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "atlas")
  .text("PROMPT EXPLORER");
// .on("click", function () {
// });

// crea il bottone ABOUT
menuDx
  .append("a")
  .attr("href", "/pages/about.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "about")
  .text("ABOUT");
// .on("click", function () {
// });


let n = false;
function apri() {
    if (n == false) {
      let bias = d3.select("#bias");
      bias.style("display", "flex");
      let biasSub = d3.select("#biasSub");
      biasSub.style("display", "flex");
      let menuTendina = d3.select("#menuTendina");
      menuTendina.style("top", "62vh");
      menuTendina.style("height", "auto");
      // let casella = d3.select("#casella");
      // casella.style("margin-left", "13vw");
      let freccia = d3.select("#freccia");
      freccia.style("rotate", "90deg");
      n = true; 

    } else if (n == true) {
      let bias = d3.select("#bias");
      bias.style("display", "none");
      let biasSub = d3.select("#biasSub");
      biasSub.style("display", "none");
      let menuTendina = d3.select("#menuTendina");
      menuTendina.style("top", "90vh");
      menuTendina.style("height", "5.5vh");
      // let casella = d3.select("#casella");
      // casella.style("margin-left", "15px");
      let freccia = d3.select("#freccia");
      freccia.style("rotate", "-90deg");
      n = false;
    }
  }