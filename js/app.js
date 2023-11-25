const navMenu = document.querySelector('#nav-menu');
const sectionsContainer = document.querySelector('#sections');
const sectionWraps = gsap.utils.toArray(".section-wrap");
const sections = gsap.utils.toArray(".section-wrap .section");
const slider = document.querySelector('#slides');
const slides = gsap.utils.toArray("#slides .slide-card");
const sliderSection = document.querySelector('#section-07');

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
gsap.set("#drop", {
    // opacity: 0
});

let sliderTween = gsap.to(slides, {
    xPercent: -100 * (slides.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#section-07",
        pin: true,
        scrub: 1,
        snap: 1 / (slides.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + slider.offsetWidth
    }
});

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
let section2MidHeight = document.querySelector('#section-02').offsetHeight / 2;
let drop = gsap.to('#drop', {
    scrollTrigger: {
        id: 'drop',
        trigger: '#section-02',
        start: () => 'top 90%',
        end: () => (section2MidHeight + 165) + ' center',
        toggleActions: 'play reverse play stop',
        scrub: 1,
        markers: true,
        // pin: true,
        // pinSpacing: false
    },
    x: -285,
    y: section2MidHeight + 165,
    rotate: 0,
    duration: 3
});

const section6TL = gsap.timeline({
    scrollTrigger: {
        trigger: '#section-06',
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
