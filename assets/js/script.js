document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const hamburger = document.querySelector('.hamburger');
  const header = document.querySelector('.header');
  const menuLink = document.querySelectorAll('.menu__link');

  hamburger.addEventListener('click',() => {
    header.classList.toggle('header--active');
    document.body.classList.toggle('scroll');
  });

  menuLink.forEach(elem => elem.addEventListener('click', () => {
    header.classList.remove('header--active');
    document.body.classList.remove('scroll');
  }));
});