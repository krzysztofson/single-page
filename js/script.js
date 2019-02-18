const slider = tns({
  container: '.js-slider',
  nav: false,
  controlsContainer: '.js-slider-controls',
  gutter: 30,
  responsive: {
    480: {
      items: 2
    },
    750: {
      items: 3
    }
  },
});

const sliderGallery = tns({
  container: '.js-gallery',
  controlsContainer: '.js-gallery-controls',
  nav: false,
});

const modalNews = document.querySelector('.js-modal-news');
const modalNewsContainer = document.querySelector('.js-modal-news-container');
const closeNews = document.querySelector('.js-close-news');

const modalDates = document.querySelector('.js-modal-dates');
const modalDatesContainer = document.querySelector('.js-modal-dates-container');
const closeDates = document.querySelector('.js-close-dates');

const dim = document.querySelector('.js-dim');

modalNews.addEventListener('click', function(){
  modalNewsContainer.classList.remove('is-hidden');
  dim.classList.remove('is-hidden');
});

closeNews.addEventListener('click', function(){
  modalNewsContainer.classList.add('is-hidden');
  dim.classList.add('is-hidden');
});

modalDates.addEventListener('click', function(){
  modalDatesContainer.classList.remove('is-hidden');
  dim.classList.remove('is-hidden');
});

closeDates.addEventListener('click', function(){
  modalDatesContainer.classList.add('is-hidden');
  dim.classList.add('is-hidden');
});

const hamburger = document.querySelector('.js-hamburger');
const navMobile = document.querySelector('.js-nav-mobile');

hamburger.addEventListener('click', function(){
  if (navMobile.classList.contains('is-hidden')) {
    navMobile.classList.remove('is-hidden');
  } else {
    navMobile.classList.add('is-hidden');
  }
});

const input = document.querySelector('.js-input');
const inputWarning = document.querySelector('.js-warning');
const sendBtn = document.querySelector('.js-send');

function validation() {
  if (input.value == '') {
    inputWarning.classList.remove('is-hidden');
  }
};

sendBtn.addEventListener('click', validation);
