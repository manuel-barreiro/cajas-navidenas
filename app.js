
// const par = document.querySelector(".glide__slide");
// const boton5 = document.querySelector('#boton2')

// par.addEventListener("resize", resizeListener );

// function resizeListener() {
//   let  width = par.offsetWidth;
//   console.log(width)
//   if( window.matchMedia("(max-width: 760px)")) {
//     boton5.style.marginLeft = `${width /2  - 125}px`;
//   } else {
   
//   boton5.style.marginLeft = `${width /2  - 150}px`;
//   }
// }


// const par = document.querySelector(".glide__slide");
// const boton5 = document.querySelector('#boton2')



// var inverval_timer;

  
// inverval_timer = setInterval(function() { let  width = par.offsetWidth;
//       console.log(width)
//       if( window.innerWidth < 760) {
//         boton5.style.marginLeft = `${width /2  - 125}px`;
//        } else {
       
//       boton5.style.marginLeft = `${width /2  - 150}px`;
//        }
    
// }, 2000);




const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links li");
  console.log(navLinks);

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
        console.log(link.style.animation);
      } else {
        link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7}s`;
      }
      console.log(index / 7 + 1);
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();

document.getElementById("arrow").addEventListener("click", () => {
  document
    .querySelector(".cajaroja")
    .scrollIntoView({ behavior: "smooth", block: "end" });
});
document.getElementById("somos").addEventListener("click", () => {
  document
    .querySelector(".ofrecemos")
    .scrollIntoView({ behavior: "smooth", block: "end" });
});

document.getElementById("ofrecemos").addEventListener("click", () => {
  document
    .querySelector(".llegamos")
    .scrollIntoView({ behavior: "smooth", block: "end" });
});

document.getElementById("llegamos").addEventListener("click", () => {
  document
    .querySelector(".empresas")
    .scrollIntoView({ behavior: "smooth", block: "end" });
});

// const img = document.getElementById('imgprin')
// const boton = document.getElementById('boton2')
// let width = img.offsetWidth;
// console.log(width)
// boton.style.marginLeft = width/2 + "px"

// navNosotros.forEach((item) => item.addEventListener('click',() =>{
//   let el = document.querySelector('.nosotros')
//    el.scrollIntoView({behavior:"smooth", block: "end"})

// }))
// window.onload = function () {
//   var carouselSlide = document.querySelector(".carousel-slide");
//   var carouselImg = document.querySelectorAll(".carousel-slide img");

//   let count = 1;

//   var size = window.innerWidth;

  //  carouselSlide.style.transform = "translateX(" + -size * count + "px)";

//   console.log(size);

//   nextBtn.addEventListener("click", () => {
//     if(count >= carouselImg.length-1) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     count++;
//     carouselSlide.style.transform = "translateX(" + -size * count + "px)";
//   });

//   prevBtn.addEventListener("click", () => {
//     if(count <= 0) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     count--;
//     carouselSlide.style.transform = "translateX(" + -size * count + "px)";
//   });

//   carouselSlide.addEventListener("transitionend", () => {
//     console.log(carouselImg[count].id);
//     if (carouselImg[count].id == "lastClone") {
//       carouselSlide.style.transition = "none";
//       count = carouselImg.length - 2;
//       carouselSlide.style.transform = "translatex(" + -size * count + "px)";
//     }
//   });

//   carouselSlide.addEventListener("transitionend", () => {
//     console.log(carouselImg[count].id);
//     if (carouselImg[count].id == "firstClone") {
//       carouselSlide.style.transition = "none";
//       count = carouselImg.length - count;
//       carouselSlide.style.transform = "translatex(" + -size * count + "px)";
//     }
//   });

//   function yourFunction(){
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     count++;
//     carouselSlide.style.transform = "translateX(" + -size * count + "px)";

// yourFunction();




function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("arrow").addEventListener("click", () => {
      document
        .querySelector(".cajaroja")
        .scrollIntoView({ behavior: "smooth", block: "end" });
    });
    document.getElementById("somos").addEventListener("click", () => {
      document
        .querySelector(".ofrecemos")
        .scrollIntoView({ behavior: "smooth", block: "end" });
    });
    
    document.getElementById("ofrecemos").addEventListener("click", () => {
      document
        .querySelector(".llegamos")
        .scrollIntoView({ behavior: "smooth", block: "end" });
    });
    
    document.getElementById("llegamos").addEventListener("click", () => {
      document
        .querySelector(".empresas")
        .scrollIntoView({ behavior: "smooth", block: "end" });
    });
  } else {
    document.getElementById("arrow").addEventListener("click", () => {
      document
        .querySelector(".cajaroja")
        .scrollIntoView({ behavior: "smooth", block: "end" });
    });
    document.getElementById("somos").addEventListener("click", () => {
      document
        .querySelector(".ofrecemos")
        .scrollIntoView({ behavior: "smooth", block: "end" });
    });
    
    document.getElementById("ofrecemos").addEventListener("click", () => {
      document
        .querySelector(".ofrecemos")
        .scrollIntoView({ behavior: "smooth", block: "end" });
    });
    
    document.getElementById("llegamos").addEventListener("click", () => {
      document
        .querySelector(".footer")
        .scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }
}

var x = window.matchMedia("(max-width: 760px)")
myFunction(x) // Call listener function at run time

