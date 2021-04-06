import './index.scss';

const menuButton = document.querySelector('.header__menu-button');
const headerContainer = document.querySelector('.header');
const menuContainer = document.querySelector('.header__content');

// function createSearchField() {
//   const form = document.createElement('form');
//   const input = document.createElement('input');
//   const submit = document.createElement('button');

//   form.classList.add('search_type_mobile');
//   input.classList.add('search__input_type_mobile');
//   submit.classList.add('search__submit_type_mobile');

// }

function handleMenuClick() {
  console.log(menuContainer)
  menuContainer.classList.toggle('header__content_visible_opened');
}

menuButton.addEventListener('click', () => {
  handleMenuClick();
  console.log('Clicked!');
})