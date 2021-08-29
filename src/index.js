console.log('%c HI', 'color: firebrick')

const imageContainer = document.getElementById(`dog-image-container`);
const listContainer = document.getElementById(`dog-breeds`);
const dropDownForm = document.getElementById(`breed-dropdown`);
let allDogBreeds = [];

document.addEventListener("DOMContentLoaded", function() {
    dogImages()
    dogBreeds()

    dropDownForm.addEventListener(`change`, function(e) {
        console.log(e.target.value);
        });

});



function dogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(response => response.json())
      .then(data => data.message.forEach(image => addPic(image)));
}

function addPic(image) {
    const newElement = document.createElement('img'); 
    newElement.src = image;
    imageContainer.appendChild(newElement);
}

function dogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        allDogBreeds = Object.keys(data.message);
        console.log(allDogBreeds);
        for(const breed in data.message)
        addBreed(breed);
    });
}

function addBreed(breed) {
    const breedLi = document.createElement('li');
    breedLi.innerHTML = breed;
    listContainer.appendChild(breedLi);

    breedLi.addEventListener(`click`, function(e) {
        e.target.style.color = `red`;
    }); 
};

function sortedBreeds(letter) {
    
}