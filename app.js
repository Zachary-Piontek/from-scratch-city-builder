

// import needed modules
let cityBuild = getDefaultCity();

function getDefaultCity() {
    const defaultCity = {
        name: '',
        environment: 'modern',
        architecture: 'middle-eastern'
    };
    return defaultCity;
}
// state
const sectionCityInfo = document.getElementById('city-info');
const cityNameInput = sectionCityInfo.querySelector('input');

const sectionCityDesign = document.getElementById('section-city-design');
const header = sectionCityDesign.querySelector('h2');
// components
    // component
    // define and grab DOM elements
    // display functions

function displayCityInfo() {
    cityNameInput.value = cityBuild.name;
}

function displayCity() {
    sectionCityDesign.classList.value = '';
    header.textContent = cityBuild.name;
}
    // optional: subscribe to events
        // event handlers - what needs to happen?
cityNameInput.addEventListener('input', () => {
    cityBuild.name = cityNameInput.value;
    displayCity();
});

console.log('h2');
console.log(header);
console.log(cityNameInput.value);
console.log(sectionCityInfo);

        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions
displayCity();
displayCityInfo();


