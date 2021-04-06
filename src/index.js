import './index.scss';

import locationImg from './images/geo_1965.png';
import menuImg from './images/menu_1983.png';

const images = [
  { name: 'location', link: locationImg },
  { name: 'menu', link: menuImg }
]

const menuButton = document.querySelector('.header__menu-button');
const menuContainer = document.querySelector('.header__content');
const searchFormInput = document.querySelector('.search__input_type_mobile');
const searchButton = document.querySelector('.search__submit_type_mobile');

function handleSearchButton(e) {
  e.preventDefault();
  searchFormInput.classList.toggle('search__input_visible_true');
}

function handleMenuClick() {
  menuContainer.classList.toggle('header__content_visible_opened');
}

/******************************************************/
/* Webpack does't want to show images from html file  */
/* so I made this small helper. It is not a must, but */
/* I wanted this project to be on GH-pages.           */
function makeImagesVisible() {
  const contactButton = document.querySelector('.button__contacts');
  const productButton = document.querySelector('.button__products');

  const contactImage = document.createElement('img');
  const productImage = document.createElement('img');

  contactImage.src = images[0].link;
  productImage.src = images[1].link;
  
  contactImage.classList.add('button__img');
  productImage.classList.add('button__img');

  contactButton.prepend(contactImage);
  productButton.prepend(productImage);
}
/* It simply imports images and put them on a place */
/****************************************************/

menuButton.addEventListener('click', () => {
  handleMenuClick();
})

searchButton.addEventListener('click', (e) => {
  handleSearchButton(e);
})

makeImagesVisible();