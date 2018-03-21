(()=>{

  // Declare Variables.
  const JOIN_US_BTN_EL = document.getElementById('join-us-btn');
  const MEETINGS_CTR_EL = document.getElementById('meetings-ctr');
  const HEADER_CTR_EL = document.getElementById('header-ctr');


  // Scroll to meetings section when join us button is clicked.
  JOIN_US_BTN_EL.addEventListener('click', ()=>{
    console.log(MEETINGS_CTR_EL.pageYOffset);
    // window.scrollBy(0, 1285);


  });
})();
