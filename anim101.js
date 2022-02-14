const ft = document.querySelector('.ft');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const borgir = document.querySelector('.borgir');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(ft, 1, {height: "0%"}, {height: '80%', ease: Power2.easeInOut})
.fromTo(ft, 1.5, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
.fromTo(slider, 1, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, "-=1.5")
.fromTo(logo, .5, {opacity: '0', x: '-30'}, {opacity: '1', x: '0'}, "-=0.5")
.fromTo(borgir, .5, {opacity: '0', x: '30'}, {opacity: '1', x: '0'}, "-=0.5")
.fromTo(headline, .5, {opacity: '0', x: '30'}, {opacity: '1', x: '40'}, "-=0.5");