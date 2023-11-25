const navMenu = document.querySelector('#nav-menu');
const sectionsContainer = document.querySelectorAll('#sections');
const sections = document.querySelectorAll('.section');

// set logo charecter color-white class
gsap.set("#logo_svg .color-white", {
    fill: "#fff"
});
// set logo charecter color-green class
gsap.set("#logo_svg .color-green", {
    fill: "#5fb847"
});
gsap.set("#nav-menu", {
    backgroundImage: "linear-gradient(270deg, rgba(239, 239, 239, 0.34) 0%, rgba(228, 228, 228, 0.34) 100%)"
});

// set all "#section-06 .img-22" to start off screen to the right
// gsap.set("#section-06 .img-22", {
//      x: "200%"
// });

const headerTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#section-02',
        // markers: true,
        start: 'top 100px',
        end: '+=300',
        toggleActions: 'play none none reverse',
        scrub: 1
    }
});

headerTL
.to('#logo_svg .color-white', {
    fill: "#006ff2"
})
.to('#nav-menu', {
    backgroundImage: "linear-gradient(270deg, rgba(149, 149, 149, 0.34) 0%, rgba(128, 128, 128, 0.54) 40%)"
}, '<');

const section6TL = gsap.timeline({
    scrollTrigger: {
        trigger: '#section-06',
        markers: true,
        start: '300px 100%',
        end: '80% bottom',
        toggleActions: 'play reverse play reverse',
        scrub: 3
    }
});

section6TL
.from("#section-06 .img-22", {
    x: "200%",
    stagger: 0.3,
    duration: 1
});
