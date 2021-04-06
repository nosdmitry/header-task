import './index.scss';

const menuButton = document.querySelector('.header__menu-button');
const menuContainer = document.querySelector('.header__content');
const searchFormInput = document.querySelector('.search__input_type_mobile');
const searchButton = document.querySelector('.search__submit_type_mobile');

function handleSearchButton() {
  searchFormInput.classList.toggle('search__input_visible_hidden');
}

function handleMenuClick() {
  menuContainer.classList.toggle('header__content_visible_opened');
}

menuButton.addEventListener('click', () => {
  handleMenuClick();
})

searchButton.addEventListener('click', () => {
  handleSearchButton();
})