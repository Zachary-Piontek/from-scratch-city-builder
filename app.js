

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
const footer = sectionCityDesign.querySelector('h3');

const environmentSelect = sectionCityInfo.querySelector('select');
const sloganInput = document.getElementById('slogan');

const selectEnvironment = document.getElementById('select-environment');
const environmentImage = document.getElementById('environment-image');
let environmentCounter = 0;

const architectureSelect = document.getElementById('architecture-select');
const architectureImage = document.getElementById('architecture-image');
let architectureCounter = 0;

let selectedEnvironment = '';
let selectedArchitecture = '';

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
    footer.textContent = cityBuild.slogan;
    sectionCityDesign.classList.add(cityBuild.environment);
    // Image.src = '../assets/' + 'jpeg';

}
addButton.addEventListener('click', () => {
    cities.push(cityBuild);
    console.log(cities);
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

environmentSelect.addEventListener('input', () => {
    cityBuild.environment = environmentSelect.value;
    displayCity();
});

sloganInput.addEventListener('change', (e) => {
    cityBuild.slogan = e.target.value;
});

selectEnvironment.addEventListener('change', (e) => {
    const value = e.target.value;
    selectedEnvironment = `./assets/enron-${value}.jpeg`;
    environmentImage.src = selectedEnvironment;
    // ${} is template literal
    environmentCounter;
});

architectureSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    selectedArchitecture = `./assets/arch-${value}.jpeg`;
    architectureImage.src = selectedArchitecture;
    architectureCounter;
    cityBuild.architecture = architectureSelect.value;
});

const citySection = document.getElementById('city-section');

const list = citySection.querySelector('ul');

function displayCities() {
    //console.log(cityBuild);
    list.innerHTML = '';

    for (const city of cities) {
        
        const li = document.createElement('li');
       
        const nameDisplay = document.createElement('span');
        nameDisplay.textContent = city.name;
        const descriptionDisplay = document.createElement('span');
        descriptionDisplay.textContent = city.slogan;
        const environmentDisplay = document.createElement('img');
        //console.log(cityBuild);
        environmentDisplay.src = `./assets/enron-${city.environment}.jpeg`;
        const architectureDisplay = document.createElement('img');
        architectureDisplay.src = `./assets/arch-${city.architecture}.jpeg`;
        
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