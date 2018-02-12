(() => {

  // Declare variables.
  const MENU_BAR_EL = document.getElementById('menu-bar');
  const MENU_BTN_EL = document.getElementById('menu-btn');

  // Show/Hide menu on menu button click.
  MENU_BTN_EL.addEventListener('click', () => {
    MENU_BAR_EL.classList.toggle('show-menu');
  });

})();
