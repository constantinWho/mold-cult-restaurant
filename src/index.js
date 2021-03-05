const { forEach } = require("lodash");

// ALREADY EXISTING DOM ELEMENT
const content = document.getElementById('content');

// CREATE DOM ELEMENTS
const header = document.createElement('header');
let headerName = document.createElement('h1');
let headerQuote = document.createElement('h2');
const navBar = document.createElement('nav');
const ulHeader = document.createElement('ul');

const main = document.createElement('main');
let img = document.createElement('img');
let message = document.createElement('p');

const footer = document.createElement('footer');
let coppyRight = document.createElement('p');


// GIVE TEXT TO ELEMENTS
headerName.innerText = `Moldo Cult`;
headerQuote.innerText = `Eat our food, support your belly!`;
const navBarTabs = ['HOME', 'MENU', 'WINE', 'WHERE TO FIND?', 'CONTACT'];

img.setAttribute('src', "https://corinaureche.ro/wp/wp-content/uploads/2018/07/Placinte-cu-dulceata-4.jpg");
message.innerText = `“At Moldo Cult, we wish to offer our personal rendition of Moldovan gourmet cuisine with an innovative gastronomic take on traditional cooking methods, fine Moldovan produce and the legacy of our shared food heritage. Moreover, we regard it as a personal challenge to help bring about a revival of Moldovan cuisine and let its distinctive flavours and particular regional character brighten up the world.”`;

coppyRight.innerText = `Moldo Cult ®`;

// APPEND DOM ELEMENTS
content.appendChild(header);
header.appendChild(headerName);
header.appendChild(headerQuote);
header.appendChild(navBar);
navBar.appendChild(ulHeader);
navBarTabs.forEach(tab => { 

    let tagA = document.createElement('a');
    tagA.setAttribute('href', "#");
    let tagLi = document.createElement('li');
    tagLi.innerText = tab;

    tagA.appendChild(tagLi);
    ulHeader.appendChild(tagA);
});

main.appendChild(img);
main.appendChild(message);
content.appendChild(main);

footer.appendChild(coppyRight);
content.appendChild(footer);
