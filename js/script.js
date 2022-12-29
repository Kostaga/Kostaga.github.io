const header = document.querySelector("header");

window.addEventListener("scroll",function() {
	header.classList.toggle("sticky",window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 1500,
	reset: true
})


sr.reveal('.home-text', {delay:350, origin: 'left'});
sr.reveal('.home-img', {delay:350, origin: 'right'});
sr.reveal('.social a', {delay:350, origin: 'left'});

sr.reveal('.service', {delay:350, origin: 'left'});
sr.reveal('.about-me', {delay:350, origin: 'left'});
sr.reveal('.portfolio', {delay:350, origin: 'left'});

sr.reveal('.contact', {delay:350, origin: 'left'});