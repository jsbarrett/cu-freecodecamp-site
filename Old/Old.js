(() => {

  // Declare Variables.
  const HEADER_IMG_EL = document.getElementById('header-img');
  const IMG_BTN_ONE_EL = document.getElementById('img-btn-one');
  const IMG_BTN_TWO_EL = document.getElementById('img-btn-two');
  const IMG_BTN_THREE_EL = document.getElementById('img-btn-three');

  // Show first header image when img-btn-one is clicked.
  IMG_BTN_ONE_EL.addEventListener('click', () => {
    HEADER_IMG_EL.style.backgroundImage = "url('./assets/images/group-image-1.jpg')";

    IMG_BTN_ONE_EL.classList.add('active-img-btn');

    if (IMG_BTN_TWO_EL.classList.contains('active-img-btn')) {
      IMG_BTN_TWO_EL.classList.remove('active-img-btn');
    }

    if (IMG_BTN_THREE_EL.classList.contains('active-img-btn')) {
      IMG_BTN_THREE_EL.classList.remove('active-img-btn');
    }
  });

  // Show second header image when img-btn-two is clicked.
  IMG_BTN_TWO_EL.addEventListener('click', () => {
    HEADER_IMG_EL.style.backgroundImage = "url('./assets/images/group-image-2.jpeg')";

    if (IMG_BTN_ONE_EL.classList.contains('active-img-btn')) {
      IMG_BTN_ONE_EL.classList.remove('active-img-btn');
    }

    IMG_BTN_TWO_EL.classList.add('active-img-btn');

    if (IMG_BTN_THREE_EL.classList.contains('active-img-btn')) {
      IMG_BTN_THREE_EL.classList.remove('active-img-btn');
    }
  });

  // Show third header image when img-btn-three is clicked.
  IMG_BTN_THREE_EL.addEventListener('click', () => {
    HEADER_IMG_EL.style.backgroundImage = "url('./assets/images/group-image-3.jpeg')";

    if (IMG_BTN_ONE_EL.classList.contains('active-img-btn')) {
      IMG_BTN_ONE_EL.classList.remove('active-img-btn');
    }

    if (IMG_BTN_TWO_EL.classList.contains('active-img-btn')) {
      IMG_BTN_TWO_EL.classList.remove('active-img-btn');
    }

    IMG_BTN_THREE_EL.classList.add('active-img-btn');
    
  });

})();
