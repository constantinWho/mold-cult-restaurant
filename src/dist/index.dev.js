"use strict";

var _require = require("lodash"),
    forEach = _require.forEach; // ALREADY EXISTING DOM ELEMENT


var content = document.getElementById('content'); // CREATE DOM ELEMENTS

var header = document.createElement('header');
var headerName = document.createElement('h1');
var headerQuote = document.createElement('h2');
var navBar = document.createElement('nav');
var ulHeader = document.createElement('ul');
var main = document.createElement('main');
var img = document.createElement('img');
var message = document.createElement('p');
var footer = document.createElement('footer');
var coppyRight = document.createElement('p'); // GIVE TEXT TO ELEMENTS

headerName.innerText = "Moldo Cult";
headerQuote.innerText = "Eat our food, support your belly!";
var navBarTabs = ['HOME', 'MENU', 'WINE', 'WHERE TO FIND?', 'CONTACT'];
img.setAttribute('src', "https://corinaureche.ro/wp/wp-content/uploads/2018/07/Placinte-cu-dulceata-4.jpg");
message.innerText = "\u201CAt Moldo Cult, we wish to offer our personal rendition of Moldovan gourmet cuisine with an innovative gastronomic take on traditional cooking methods, fine Moldovan produce and the legacy of our shared food heritage. Moreover, we regard it as a personal challenge to help bring about a revival of Moldovan cuisine and let its distinctive flavours and particular regional character brighten up the world.\u201D";
coppyRight.innerText = "Moldo Cult \xAE"; // APPEND DOM ELEMENTS

content.appendChild(header);
header.appendChild(headerName);
header.appendChild(headerQuote);
header.appendChild(navBar);
navBar.appendChild(ulHeader);
navBarTabs.forEach(function (tab) {
  var tagA = document.createElement('a');
  tagA.setAttribute('href', "#");
  var tagLi = document.createElement('li');
  tagLi.innerText = tab;
  tagA.appendChild(tagLi);
  ulHeader.appendChild(tagA);
});
main.appendChild(img);
main.appendChild(message);
content.appendChild(main);
footer.appendChild(coppyRight);
content.appendChild(footer);