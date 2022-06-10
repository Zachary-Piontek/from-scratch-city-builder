

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

const environmentSelect = sectionCityInfo.querySelector('select');

const selectEnvironment = document.getElementById('select-environment');
const environmentImage = document.getElementById('environment-image');
let environmentCounter = 0;

const architectureSelect = document.getElementById('architecture-select');
const architectureImage = document.getElementById('architecture-image');
let architectureCounter = 0;

// components
    // component
    // define and grab DOM elements
    // display functions

function displayCityInfo() {
    cityNameInput.value = cityBuild.name;
    environmentSelect.value = cityBuild.environment;
}

function displayCity() {
    sectionCityDesign.classList.value = '';
    header.textContent = cityBuild.name;
    sectionCityDesign.classList.add(cityBuild.environment);
}

    // optional: subscribe to events
        // event handlers - what needs to happen?

cityNameInput.addEventListener('input', () => {
    cityBuild.name = cityNameInput.value;
    displayCity();
});

environmentSelect.addEventListener('change', () => {
    cityBuild.environment = environmentSelect.value;
    displayCity();
});

selectEnvironment.addEventListener('change', (e) => {
    const value = e.target.value;
    environmentImage.src = `./assets/enron-${value}.jpeg`;
    environmentCounter;
});

architectureSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImage.src = `./assets/arch-${value}.jpeg`;
    architectureCounter;
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


