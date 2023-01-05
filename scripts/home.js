// scroll top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//-------------------------- shapes --------------------------//
// $(function(){
//         //prepare Your data array with img urls
//         var dataArray=new Array();
//         dataArray[0]="SVG/shape1.svg";
//         dataArray[1]="SVG/shape2.svg";
//         dataArray[2]="SVG/shape3.svg";
//         dataArray[3]="SVG/shape4.svg";
//         dataArray[4]="SVG/shape5.svg";
//         dataArray[5]="SVG/shape6.svg";
//         dataArray[6]="SVG/shape7.svg";
//         dataArray[7]="SVG/shape8.svg";
//
//         //start with id=0
//         var thisId=0;
//
//         window.setInterval(function(){
//             $('#shapes').attr('src', dataArray[thisId]);
//             thisId++; //increment data array id
//             if (thisId==8) thisId=0; //repeat from start
//         },500);
//     });

//---------------------------- get mouse x,y -------------------------//
const pos = { x : 0, y : 0 };

const saveCursorPosition = function(x, y) {
        pos.x = (x / window.innerWidth).toFixed(2);
        pos.y = (y / window.innerHeight).toFixed(2);

        document.documentElement.style.setProperty('--x', pos.x);
        document.documentElement.style.setProperty('--y', pos.y);
        // console.log(pos.x);
     }

  document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); })


//----------------------parallax-----------------------------//
  var scene = document.getElementById('scene2');
  var parallaxInstance = new Parallax(scene);

  var scene = document.getElementById('scene3');
  var parallaxInstance = new Parallax(scene);


gsap.registerPlugin(ScrollTrigger);
//------------------------------- cover -------------------------//
gsap.to(".cover", {
  scrollTrigger: {
    trigger: ".cover",
    start: 0,
    end: window.innerHeight,
    scrub: true,
    toggleActions: "restart none none none"
  },
  opacity: 0,
});


gsap.to(".title", {
  scrollTrigger: {
    trigger: ".title",
    start: 0,
    end: window.innerHeight,
    scrub: true,
    toggleActions: "play none none none"
  },
  margin: 0,
  fontSize: window.innerWidth*0.02 ,
});

gsap.to(".subtitle", {
  scrollTrigger: {
    trigger: ".subtitle",
    start: 0,
    end: window.innerHeight,
    scrub: true,
    toggleActions: "play none none none"
  },
  opacity: 0,
});

gsap.to(".freccia_cover", {
  scrollTrigger: {
    trigger: ".subtitle",
    start: 0,
    end: window.innerHeight*0.3,
    scrub: true,
    toggleActions: "play none none none"
  },
  opacity: 0,
});

gsap.to("#menu", {
  scrollTrigger: {
    trigger: "#menu",
    start: window.innerHeight*0.8,
    toggleActions: "play none none reset"
  },
  backgroundImage: "linear-gradient(180deg, rgba(15,15,32,1) 50%, rgba(15,15,32,0) 100%)" ,
  duration: 0.1,
});


const duration = 0.5;
const start = "top 60%";
const ease = "power1.inOut"

//------------------------------- trigger 1 -------------------------//

gsap.to("#freccia1", {
  scrollTrigger: {
    trigger: "#freccia1",
    start: start,
    toggleActions: "play none none reverse"
  },
  rotation: 45,
  duration: duration,
  ease: ease,
});

gsap.to("#para1", {
  scrollTrigger: {
    trigger: "#para1",
    start: start,
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  duration: duration,
  ease: ease,
});

//------------------------------- trigger 2 -------------------------//

gsap.to("#freccia2", {
  scrollTrigger: {
    trigger: "#freccia2",
    start: start,
    toggleActions: "play none none reverse"
  },
  rotation: 45,
  duration: duration,
  ease: ease,
});

gsap.to("#para2", {
  scrollTrigger: {
    trigger: "#para2",
    start: start,
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  duration: duration,
  ease: ease,
});

//------------------------------- trigger 3 -------------------------//

gsap.to("#freccia3", {
  scrollTrigger: {
    trigger: "#freccia3",
    start: start,
    toggleActions: "play none none reverse"
  },
  rotation: 45,
  duration: duration,
  ease: ease,
});

gsap.to("#para3", {
  scrollTrigger: {
    trigger: "#para3",
    start: start,
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  duration: duration,
  ease: ease,
});

//------------------------------- trigger 4 -------------------------//

gsap.to("#freccia4", {
  scrollTrigger: {
    trigger: "#freccia4",
    start: start,
    toggleActions: "play none none reverse"
  },
  rotation: 45,
  duration: duration,
  ease: ease,
});

gsap.to("#para4", {
  scrollTrigger: {
    trigger: "#para4",
    start: start,
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  duration: duration,
  ease: ease,
});

//------------------------------- trigger 5 -------------------------//

gsap.to("#freccia5", {
  scrollTrigger: {
    trigger: "#freccia5",
    start: start,
    toggleActions: "play none none reverse"
  },
  rotation: 45,
  duration: duration,
  ease: ease,
});

gsap.to("#para5", {
  scrollTrigger: {
    trigger: "#para5",
    start: start,
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  duration: duration,
  ease: ease,
});




//-------------------------- change image hover ----------------------------//

$(function() {
    $("#txt_1")
        .mouseover(function() {
          $( '#my_image' ).attr("src","../assets/home_imgs/hover1.png");
          $( '#my_image' ).css("opacity","1");
        })
        .mouseout(function() {
            $( '#my_image' ).css("opacity","0");
        });
});

$(function() {
    $("#txt_2")
        .mouseover(function() {
          $( '#my_image' ).attr("src","../assets/home_imgs/hover2.png");
          $( '#my_image' ).css("opacity","1");
        })
        .mouseout(function() {
            $( '#my_image' ).css("opacity","0");
        });
});

$(function() {
    $("#txt_3")
        .mouseover(function() {
          $( '#my_image' ).attr("src","../assets/home_imgs/hover3.png");
          $( '#my_image' ).css("opacity","1");
        })
        .mouseout(function() {
            $( '#my_image' ).css("opacity","0");
        });
});

//-------------------------- catalogue atlas hover ----------------------------//

$(function() {
    $("#catalogue")
        .mouseover(function() {
          $( '#my_image2' ).attr("src","../assets/home_imgs/biases-catalogue.png");
          $( '#my_image2' ).css("opacity","1");
          $( '#my_image2' ).css("animation-name","horizontal");
        })
        .mouseout(function() {
          $( '#my_image2' ).css("opacity","0");
        });
});

$(function() {
    $("#atlas")
        .mouseover(function() {
          $( '#my_image2' ).attr("src","../assets/home_imgs/prompt-atlas.png");
          $( '#my_image2' ).css("opacity","1");
          $( '#my_image2' ).css("animation-name","scale");
        })
        .mouseout(function() {
            $( '#my_image2' ).css("opacity","0");
        });
});



function scrittaSi(x) {
  let t = x.id;
  let tDef = t.replaceAll('-', ' ');
  let Testo = document.getElementById("Testo");
  Testo.innerText = "Prompt: " + tDef;

  let Box = document.getElementById("BoxTesto");
  Box.style.display = "block";

  const onMouseMove = (e) => {
  Box.style.left = e.pageX + "px";
  Box.style.top = e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);
}

function ScrittaNo(x) {
  let Box = document.getElementById("BoxTesto");
  Box.style.display = "none";
}
