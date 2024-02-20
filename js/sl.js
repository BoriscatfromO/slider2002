let images = [
    {
        url: "../pic/image1.png",
	title: "Rostov-on-Don, Admiral",
	apartment: "81 m2",
	time:"3.5 months",
    },
    {
        url: "../pic/image2.png",
	title: "Sochi Thieves",
	apartment: "105 m2",
	time:"4 months",
    }, 
    {
        url: "../pic/image3.png",
	title: "Rostov-on-Don Patriotic",
	apartment: "93 m2",
	time:"3 months",
    }
]

  
let sliderImages = document.querySelector(".images");
let sliderArrows = document.querySelectorAll(".arrow");
let sliderDots = document.querySelector(".slider__dots");
let sliderMenu = document.querySelector(".slider__menu");
let sliderCity = document.querySelector(".city");
let sliderApartment = document.querySelector(".apartment");
let sliderTime = document.querySelector(".time");

initImages();
initArrows();
initDots();
initMenu();
initCity();
initApartment();
initTime();

function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +document.querySelector(".image.active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

function initDots() {
 images.forEach((image, index) => {
 	let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
	sliderDots.innerHTML += dot;
});
sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
dot.addEventListener("click", function() {
moveSlider (this.dataset.index);
	})
   })
}

function initMenu() {
 images.forEach((image, index) => {
 	let menu = `<div class="slider__menu-item n${index} ${index === 0? "active" : ""}" data-index="${index}"><h3>${images[index].title}</h3></div>`;
	sliderMenu.innerHTML += menu;
});
sliderMenu.querySelectorAll(".slider__menu-item").forEach(menu => {
menu.addEventListener("click", function() {
moveSlider (this.dataset.index);
	})
   })
}

function initCity()  {
 images.forEach((image, index) => {
      let cityDiv = `<div class="city-item n${index} ${index === 0? "active" : ""}" data-index="${index}"><p>${images[index].title}</p></div>`;
      sliderCity.innerHTML += cityDiv;
    });
  }

  
function initApartment()  {
 images.forEach((image, index) => {
      let ApartmentDiv = `<div class="apartment-item n${index} ${index === 0? "active" : ""}" data-index="${index}"><p>${images[index].apartment}</p></div>`;
      sliderApartment.innerHTML += ApartmentDiv;
    });
  }


function initTime()  {
 images.forEach((image, index) => {
      let TimeDiv = `<div class="time-item n${index} ${index === 0? "active" : ""}" data-index="${index}"><p>${images[index].time}</p></div>`;
      sliderTime.innerHTML += TimeDiv;
    });
  }



function moveSlider(num) {
document.querySelector(".image.active").classList.remove("active");
document.querySelector(".image.n" + num).classList.add("active");

document.querySelector(".slider__dots-item.active").classList.remove("active");
document.querySelector(`.slider__dots-item[data-index="${num}"]`).classList.add("active");

document.querySelector(".slider__menu-item.active").classList.remove("active");
document.querySelector(`.slider__menu-item[data-index="${num}"]`).classList.add("active");

document.querySelector(".city-item.active").classList.remove("active");
document.querySelector(`.city-item[data-index="${num}"]`).classList.add("active");

document.querySelector(".apartment-item.active").classList.remove("active");
document.querySelector(`.apartment-item[data-index="${num}"]`).classList.add("active");

document.querySelector(".time-item.active").classList.remove("active");
document.querySelector(`.time-item[data-index="${num}"]`).classList.add("active");

}

