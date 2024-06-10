const imageArray = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
const carouselContainer = document.querySelector(".carousel-container");
const thumbContainer = document.querySelector(".thumbnails-container");




for (let i = 0; i < imageArray.length; i++) {
    let carouselImg = imageArray[i];

    let carouselContent = 
    `
            <div class="carousel-image">
                <img src="${carouselImg}">
            </div>
    `
    let thumbContent = 
    `
            <div class="thumb-image">
                <img src="${carouselImg}">
            </div>
    `
    carouselContainer.innerHTML += carouselContent;
    thumbContainer.innerHTML += thumbContent;

    
}

const items = document.getElementsByClassName("carousel-image");

let activeItem = 0;

items[activeItem].classList.add("active");

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

next.addEventListener("click", function() {
    if (activeItem < imageArray.length - 1) {
        
        items[activeItem].classList.remove("active");

        activeItem++;

        items[activeItem].classList.add("active");

    }
    else {
        items[activeItem].classList.remove("active");

        activeItem = 0;

        items[activeItem].classList.add("active");
    }
       
    
})


previous.addEventListener("click", function() {
    if (activeItem > 0) {
        
        items[activeItem].classList.remove("active");

        activeItem--;

        items[activeItem].classList.add("active");
    }
    else {

        items[activeItem].classList.remove("active");

        activeItem = imageArray.length -1;

        items[activeItem].classList.add("active");
    }
    
    
})