import { destinationsData } from './popularDestinations.js';

const container = document.querySelector('#destinations-container');

const createCard = (item) => {
    return `
        <div class="card" id="${item.id}">
            <img src="${item.image}" alt="${item.alt}">
            <div class="card-text">
                <h3>${item.title}</h3>
                <p>${item.subTitle}</p>
            </div>
        </div>
    `;
};

const render = () => {
    if (!container) return;
    
    const html = destinationsData.map(item => createCard(item)).join('');
    container.innerHTML = html;
};

render();