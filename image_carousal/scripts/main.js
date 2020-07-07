let image = [
    './images/awhum_waterfall.jpg',
    './images/kajuru_castle.jpg',
    './images/obuduRanch.jpg',
    './images/Surfers-at-Tarkwa-Bay.jpg'
    
];


let previousbutton = document.getElementById('previousbutton');
let nextbutton = document.getElementById('nextbutton');
let images = document.querySelector('.images');


let counterIndex = 0;

let incrementIndex = function(){

    console.log(counterIndex);
    counterIndex = counterIndex + 1;

    if(counterIndex >image.length-1){

        counterIndex = 0;
    }
};



nextbutton.addEventListener('click',function(){

    incrementIndex();

    images.setAttribute('src',image[counterIndex]);

});

let decrementIndex = function (){

    counterIndex = counterIndex -1;

    if(counterIndex < 0){

        counterIndex = image.length-1;
    }

};



previousbutton.addEventListener('click', function(){

    decrementIndex();

    images.setAttribute('src',image[counterIndex]);

});