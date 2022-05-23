
// features list on and off and variables
const featuresList = document.querySelector('.features-list');
const featuresListActive = document.querySelector('.features-buttons-list-div');

const arrowUp = document.querySelector('.arrow-up-features');
let clickFeatures = true;

featuresList.addEventListener('click', () => {
    
    if (clickFeatures) {
        featuresListActive.classList.remove('hide');
        arrowUp.src = "./images/icon-arrow-down.svg";
        clickFeatures = false;
    } else if (clickFeatures === false) {
        featuresListActive.classList.add('hide');
        arrowUp.src = "./images/icon-arrow-up.svg";
        clickFeatures = true;
    }
});

// END // 

//company popup list on and off
const companyButton = document.querySelector('.company-button');
const companyButtonActive = document.querySelector('.company-buttons-div');
const arrowUpCompany = document.querySelector('.arrow-up-company'); // arrow img of companyList

let clickCompany = true;
companyButton.addEventListener('click', () => {
    if (clickCompany) {
        companyButtonActive.classList.remove('hide');
        arrowUpCompany.src = "./images/icon-arrow-down.svg";
        clickCompany = false;
    } else if (clickCompany === false) {
        companyButtonActive.classList.add('hide');
        arrowUpCompany.src = "./images/icon-arrow-up.svg";
        clickCompany = true;
    }
});
// end

//open close hamburger menu variables;
const closeMenuBtn = document.querySelector('.close-menu-btn'); // X button to close menu
const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.pop-up-menu');
const bodyPage = document.querySelector('.body-page');
const paragraphText = document.querySelector('.paragraph-text');

console.log(paragraphText)

let clickHamburger = true;
hamburgerButton.addEventListener('click', () => {
    if (clickHamburger) {
        hamburgerMenu.classList.remove('hide');
        closeMenuBtn.classList.remove('hide-display-none');
        closeMenuBtn.classList.add('hide');
        closeMenuBtn.classList.remove('hide');
        bodyPage.classList.add('overlay-grey')
        paragraphText.classList.add('white-text');
        clickHamburger = false; 
    }});

closeMenuBtn.addEventListener('click', () => {
    closeMenuBtn.classList.add('hide-display-none');
    hamburgerMenu.classList.add('hide');
    bodyPage.classList.remove('overlay-grey');
    paragraphText.classList.remove('white-text');
    clickHamburger = true;
})
