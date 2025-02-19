import './styles.css';
import { homeBtn } from './home.js';
import { menuBtn } from './menu.js';
import { contactBtn } from './contact.js';

// Get buttons from the DOM
const homeBtnElement = document.getElementById('homebtn');
const menuBtnElement = document.getElementById('menubtn');
const contactBtnElement = document.getElementById('contactbtn');

const content = document.getElementById('content');
const container = document.createElement('div');

// Function to load the default homepage
function loadHomePage() {
    container.setAttribute('id', 'container');
    content.innerHTML = ''; // Clear existing content
    content.appendChild(container);

    container.innerHTML = `
        <h1>Welcome to our restaurant</h1>
        <p>Our restaurant offers a wide variety of dishes, from traditional to modern cuisine.
        We have a team of experienced chefs who will make sure you have the best dining experience.
        We have a cozy atmosphere and friendly staff that will make you feel at home. 
        Come and visit us today!</p>
    `;
}

// Load the default homepage when the page loads
window.addEventListener('DOMContentLoaded', loadHomePage);

// Add event listeners
homeBtnElement.addEventListener('click', homeBtn);
menuBtnElement.addEventListener('click', menuBtn);
contactBtnElement.addEventListener('click', contactBtn);

// Load the default homepage when the page loads
window.addEventListener('DOMContentLoaded', homeBtn);