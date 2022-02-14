/**
 * @reference
 * css-trick: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 * codepen: https://codepen.io/team/css-tricks/pen/WKdJaB
 */

const changeVhVariable = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // window.addEventListener('resize ', () => {
  //   const vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // });
};

export default changeVhVariable;
