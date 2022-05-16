// get input and h2 elements
const search = document.querySelector('.search');
const headings = document.querySelectorAll('h2');

// add keyup event to search bar
search.addEventListener('keyup', () => {
  // filter articles
  headings.forEach(heading => {
    if (!heading.innerHTML.toLowerCase().includes(search.value.toLowerCase())) {
      // hide parent article
      heading.closest('.card').style.display = 'none';
    } else {
      // show parent article
      heading.closest('.card').style.display = 'initial';
    }
  });
});

// get menu and drop-down divs
const menu = document.querySelector('.menu');
const dropDown = document.querySelector('.drop-down');
// declare bool var for conditional
let menuOpen = false;

// function to close menu and drop-down divs
const closeMenu = () => {
  menu.classList.remove('open');
  dropDown.classList.remove('open');
  menuOpen = false;
};

// add click event to menu
menu.addEventListener('mouseup', () => {
  if(!menuOpen) {
    menu.classList.add('open');
    dropDown.classList.add('open');
    menuOpen = true;
  } else {
    closeMenu();
  }
});

// get body of document
const body = document.querySelector('body');

// add click event to light theme button
document.getElementById('light').addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
  }
  closeMenu();
});

// add click event to dark theme button
document.getElementById('dark').addEventListener('click', () => {
  if (!body.classList.contains('dark')) {
    body.classList.add('dark');
  }
  closeMenu();
});

// get every card's back
const cards = document.querySelectorAll('.back');

// add click event to flip button
document.getElementById('flip').addEventListener('click', () => {
  cards.forEach(card => card.style.opacity = '1');
});

// add click event to reset button
document.getElementById('reset').addEventListener('click', () => {
  cards.forEach(card => {
    card.style.opacity = '0';
    // add hover and focus events to cards
    card.addEventListener('mouseenter', () => {
      card.style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
      card.style.opacity = '0';
    });
    card.addEventListener('focus', () => {
      card.style.opacity = '1';
    });
    card.addEventListener('blur', () => {
      card.style.opacity = '0';
    });
  });
});
