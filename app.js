

let cityBuild = getDefaultCity();

function getDefaultCity() {
    const defaultCity = {
        name: '',
        environment: 'modern',
        architecture: 'middle-eastern',
        slogan: '',
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

const cities = [];
const addButton = sectionCityInfo.querySelector('button');

// const sloganName = sectionCityInfo.querySelector('input');  


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
addButton.addEventListener('click', () => {
    cities.push(cityBuild);
    displayCities();
    cityBuild = getDefaultCity();
    displayCityInfo();
    displayCity();
});


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
    // ${} is template literal
    environmentCounter;
});

architectureSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImage.src = `./assets/arch-${value}.jpeg`;
    architectureCounter;
});

const citySection = document.getElementById('city-section');
const list = citySection.querySelector('ul');

function displayCities() {
    
    list.innerHTML = '';

    for (const cityBuild of cities) {
        
        const li = document.createElement('li');
       
        const nameDisplay = document.createElement('span');
        nameDisplay.textContent = cityBuild.name;
        const descriptionDisplay = document.createElement('span');
        descriptionDisplay.textContent = cityBuild.slogan;
        const environmentDisplay = document.createElement('span');
        environmentDisplay.src = cityBuild.environment;
        const architectureDisplay = document.createElement('span');
        architectureDisplay.src = cityBuild.architecture;
        
        li.append(nameDisplay, descriptionDisplay, environmentDisplay, architectureDisplay);
        list.append(li);
    }
}



        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions
displayCity();
displayCityInfo();
displayCities();


