const doctorsSwiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,

  freeMode: true,
  touchEventsTarget: 'container',
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: false,
  longSwipesRatio: 0.1,
  grabCursor: true,
  lazy: {
    loadPrevNext: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      freeMode: false,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      // spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      // spaceBetween: 30,
    },
  },
});

document.getElementById('application-form');
document.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  let errorName = document.querySelector('.form-name-error');
  let errorTell = document.querySelector('.form-tel-error');

  let isValid = true;
  if (name === '') {
    errorName.style.display = 'block';
    isValid = false;
  } else {
    errorName.style.display = 'none';
  }

  if (phone === '' || !/^[\d\+]{7,15}$/.test(phone)) {
    errorTell.style.display = 'block';
    isValid = false;
  } else {
    errorTell.style.display = 'none';
    isValid = true;
  }

  if (isValid) {
    alert('Форма отправлена!');
  }
});
