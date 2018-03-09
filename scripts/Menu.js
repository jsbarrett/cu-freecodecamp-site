(() => {

  // Declare Variables.
  const OUT_MENU_BTN_EL = document.getElementById('out-menu-btn');
  const IN_MENU_BTN_EL = document.getElementById('in-menu-btn');
  const COVER_EL = document.getElementById('cover');
  const MENU_CTR_EL = document.getElementById('menu-ctr');

  // Show menu when menu button is clicked.
  OUT_MENU_BTN_EL.addEventListener('click',()=>{
    MENU_CTR_EL.style.left = '0px';
    COVER_EL.style.visibility = 'visible';
  });

  // Hide menu when menu button is clicked.
  IN_MENU_BTN_EL.addEventListener('click',()=>{
    MENU_CTR_EL.style.left = '-253px';
    COVER_EL.style.visibility = 'hidden';
  });

  // Hide menu when user clicks outside of menu.
  COVER_EL.addEventListener('click', ()=>{
    MENU_CTR_EL.style.left = '-253px';
    COVER_EL.style.visibility = 'hidden';
  });
})();
