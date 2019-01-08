const setUpStickHeader = (selectors, scrollTop) => {
  const onScroll = (e) => {
    if (window.scrollY > scrollTop || (window.pageYOffset && (window.scrollY > window.pageYOffset))) {
      // Add the class to make it stick
      selectors.forEach(selector => {
        let element = document.querySelector(selector);
        element.classList.add('fixed')
      });
    } else {
      // remove the last class which would be fixed.
      selectors.forEach(selector => {
        let element = document.querySelector(selector);
        element.classList.remove('fixed')
      });
    }
    // Remove arrow if present.
    const arrow = document.getElementById('arrow');
    if (arrow && scrollY !== 0) {
      arrow.classList.add('disabled');
    } else if (arrow) {
      arrow.classList.remove('disabled');
    }
  }
  window.addEventListener('scroll', onScroll)
  // For iOS
  window.addEventListener('touchmove', onScroll)
};


export default setUpStickHeader;
