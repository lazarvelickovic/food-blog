import { fetchingData } from "./fetchData";

// Declaring variables
let sliderData, sliderDataArr;
let slider = document.getElementById('slider');
let sliderArrowImgLeft = document.getElementById('sliderArrowImgLeft');
let sliderArrowImgRight = document.getElementById('sliderArrowImgRight');
let counter = 1;

// Function that push fetched content in slider div
let sliderContentDisplay = (clist) => {
    sliderDataArr.forEach(el => {
        slider.innerHTML += `<div class="${clist}" style="${el.id === counter ? "display: flex" : "display:none"}">
                                        <div class="slider-person">
                                            <div>
                                                <img src=${el.url} alt=${el.name} />
                                            </div>

                                            <div>
                                                <h3>${el.name}</h3>
                                                <p>${el.city}, ${el.country}</p>
                                            </div>         
                                        </div>
                                        
                                        <div class="slider-description">
                                            <p>${el.description}</p> 
                                        </div>
                                    </div>`
    });
}

// Funcion that displays slider content
let sliderDisplay = () => {
    sliderData = fetchingData('https://lazarvelickovic.github.io/data/data.json');
    sliderData.then((val) => {
        sliderDataArr = val;
        sliderContentDisplay('slider');            
    })
}

// Function that slides content right
let slideRight = () => {  
    if (counter === 5) {
        return;
    }

    if (counter === 4) {
        sliderArrowImgRight.src = 'images/right-arrow-first-slide.png';
    } 

    sliderArrowImgLeft.src = 'images/left-arrow.png';
    slider.innerHTML = '';
    counter++;
    sliderContentDisplay('slider slide-left-animation');      
}

// Function that slides content left
let slideLeft = () => {
    if (counter === 1) {
        return;
    }

    if (counter === 2) {
        sliderArrowImgLeft.src = 'images/left-arrow-first-slide.png';
    }

    sliderArrowImgRight.src = 'images/right-arrow.png';
    slider.innerHTML = '';
    counter--;
    sliderContentDisplay('slider slide-right-animation');      
}

export { sliderDisplay, slideRight, slideLeft };