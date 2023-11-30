function init() {
    const lenis = new Lenis();

        // lenis.on('scroll', (e) => {
        // console.log(e);
        // });

        function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
        }

    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    const navMenu = document.querySelector('#nav-menu');
    const sectionsContainer = document.querySelector('#sections');
    const sectionWraps = gsap.utils.toArray("#sections .section-wrap");
    const sections = gsap.utils.toArray("#sections .section-wrap .section");
    const slider = document.querySelector('#slides');
    const slides = gsap.utils.toArray("#slides .slide-card-wrap");
    const sliderSection = document.querySelector('#section-07');
    const graphInputs = document.querySelectorAll('#graph-section input[type="range"]');
    const section2Height = document.querySelector('#section-02').offsetHeight;
    const section2MidHeight = (section2Height / 2) + 105;
    const section3GraphEnd = document.querySelector('#section-03').offsetHeight - 360;
    // section 3 ".definitions-graph-developer .definitions-graph-item" last element distance from left side of parent ".definitions-graph-developer"
    const section3GraphItemLast = document.querySelector('.definitions-graph-developer .definitions-graph-item:last-child').offsetLeft - document.querySelector('.definitions-graph-developer').offsetLeft;

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
        backgroundColor: "#006ff2"
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

    let webinarSticker = gsap.to('#webinar-sticker', {
        scrollTrigger: {
            id: 'webinar-sticker',
            trigger: '#section-01',
            start: () => '60% center',
            end: () => '90% center',
            toggleActions: 'play complete reverse reverse',
            // scrub: 3,
            // markers: true
        },
        xPercent: -85,
        duration: 1
    });



    const drop1TL = gsap.timeline({
        scrollTrigger: {
            id: 'drop',
            trigger: '#section-02',
            start: () => 'top 90%',
            end: () => section2MidHeight + ' center',
            toggleActions: 'play complete reverse restart',
            scrub: 2,
            // markers: true
        }
    });

    drop1TL
    .to('#drop', {
        opacity: 1,
        duration: 0.3
    })
    .to('#drop', {
        x: () => -282,
        y: () => section2MidHeight + 60,
        rotate: 0,
        duration: 3
    }, '0.3');

    const drop2TL = gsap.timeline({
        scrollTrigger: {
            id: 'drop-2',
            trigger: '#section-03',
            start: () => 'top bottom',
            end: () => '+=' + (section3GraphEnd + 120),
            // toggleActions: 'play complete reverse complete',
            scrub: 2,
            // markers: true
        }
    });

    drop2TL
    .to('#drop', {
        x: () => section3GraphItemLast + 200,
        y: () => section2Height + section3GraphEnd,
        duration: 3
    })
    .to('#drop', {
        opacity: 0,
        duration: 0.3
    }, '2.7');

    const section3TL = gsap.timeline({
        scrollTrigger: {
            id: 'graph',
            trigger: '#section-03',
            start: 'top top',
            end: '+=600',
            toggleActions: 'play none none none',
            scrub: 1,
            // markers: true,
            onEnter: () => {     
                graphInputs.forEach(input => {
                    // set input value to the step that is nearst to half of max - min values 
                    let step = input.max / 2;
                    let value = Math.round(step / input.step) * input.step;
                    input.setAttribute('value', value);
                    input.dispatchEvent(new Event('input'));
                });
            },
            onLeave: () => {     
                graphInputs.forEach(input => {
                    input.setAttribute('value', input.max);
                    input.dispatchEvent(new Event('input'));
                });
            },
            onEnterBack: () => {     
                graphInputs.forEach(input => {
                    // set input value to the step that is nearst to half of max - min values 
                    let step = input.max / 2;
                    let value = Math.round(step / input.step) * input.step;
                    input.setAttribute('value', value);
                    input.dispatchEvent(new Event('input'));
                });
            },
            onLeaveBack: () => {     
                graphInputs.forEach(input => {
                    // set input value to the step that is nearst to half of max - min values 
                    input.setAttribute('value', input.min);
                    input.dispatchEvent(new Event('input'));
                });
            },
        }
    });

    const section6TL = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-06',
            start: '300px 100%',
            end: '80% bottom',
            toggleActions: 'play none reverse restart',
            scrub: 3
        }
    });

    section6TL
    .from("#section-06 .img-22", {
        x: "200%",
        stagger: 0.3,
        duration: 1
    });
    const sliderNext = document.querySelector('#slider-next');
    const sliderPrev = document.querySelector('#slider-prev');

    const section7TL = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-07',
            pin: true,
            scrub: 1,
            snap: 1 / (slides.length -2),
            toggleActions: 'play pause resume reverse',
            // base vertical scrolling on how wide the container is so it feels more natural.
            start: () => "top top",
            end: () => "+=" + (slider.offsetWidth / 2),
            // on enter remove disable attribute from the slider prev button
            onEnter: () => {
                sliderPrev.removeAttribute('disabled');
                sliderPrev.classList.remove('button-disabled');
            },
            // on leave add disable attribute to the slider next button
            onLeave: () => {
                sliderNext.setAttribute('disabled', 'disabled');
                sliderNext.classList.add('button-disabled');
            },
            // on enter back remove disable attribute from the slider next button
            onEnterBack: () => {
                sliderNext.removeAttribute('disabled');
                sliderNext.classList.remove('button-disabled');
            },
            // on leave back add disable attribute to the slider prev button
            onLeaveBack: () => {
                sliderPrev.setAttribute('disabled', 'disabled');
                sliderPrev.classList.add('button-disabled');
            }
        }
    });
    const slideAnim = section7TL.to(slides, {
        xPercent: -100 * (slides.length - 2),
        ease: "none"
    });
    
    
    document.querySelector('#slider-next').addEventListener('click', () => {
        // scroll down one step with lenis
        window.scrollBy(0, 50);
        
        
    });
    // reverse the slidAnim when the slider control button #slider-prev is clicked
    document.querySelector('#slider-prev').addEventListener('click', () => {
        // scroll up one step 
        window.scrollBy(0, -50);
    });

    
    // set timeline for section-wrap with scrollTrigger so each section will be pinned to the top of the screen when it's in view, 
    // and unpinned when all animated elements finished animating + 1 second then scroll to the next section
    sectionWraps.forEach((wrap, i) => {
        if (i === 0) return;
        const section = wrap.querySelector('.section');
        const animatedElements = gsap.utils.toArray(section.querySelectorAll('.animated'));
        const tl = gsap.timeline({
            scrollTrigger: {
                id: 'section-' + (i + 1),
                trigger: wrap,
                start: () => "top 20%",
                end: () => "+=" + (wrap.offsetHeight),
                toggleActions: 'play reverse play reverse',
                // scrub: 2,
                // pin: section,
                // pinSpacing: false,
                // markers: true
            }
        });
        
        animatedElements.forEach(el => {
            tl.from(el, {
                y: () => el.offsetHeight,
                opacity: () => 0,
                autoAlpha: 0,
                visibility: 'hidden',
                duration: 0.3,
                stagger: 0.15,
                ease: "power1.in"
            }).to(el, {
                autoAlpha: 1,
                opacity: 1,
                visibility: 'visible'
                }, '<');
        });
        // tl
        // .to(window, {
        //     scrollTo: () => sectionWraps[i + 1].querySelector('.section'),
        //     duration: 1
        // }, '+=10');
        
        // cliPath: "path('m -0 -0 l 22.5 0 c 22.5 0 22.5 22.5 22.5 22.5 c 0 22.5 -22.5 22.5 -22.5 22.5 c -22.5 0 -22.5 -22.5 -22.5 -22.5 z')"
        // cliPath: "path('m -0 -0 l 1200 0 c 1200 0 1200 1200 1200 1200 c 0 1200 -1200 1200 -1200 1200 c -1200 0 -1200 -1200 -1200 -1200 z')"
    });
}

// init() on page load 
window.addEventListener('load', () => {
    init();
});