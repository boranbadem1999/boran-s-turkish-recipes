'use strict';

const panels = document.querySelectorAll('.panel');
const news = document.querySelectorAll('.h1-news');
const modalParent = document.querySelectorAll('.modal-parent');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActive();
    panel.classList.add('active');
  });
});

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

modalParent.forEach((parent) => {
  parent.addEventListener('click', () => {
    parent.classList.remove('hidden');
  });
});
