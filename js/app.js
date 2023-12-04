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
    const sectionsPart01 = document.querySelector('#wraps-part-01');
    const sectionsPart02 = document.querySelector('#wraps-part-02');
    const sectionWraps = gsap.utils.toArray("#sections .section-wrap");
    const sectionWraps01 = gsap.utils.toArray("#sections #wraps-part-01 .section-wrap");
    const sectionWraps02 = gsap.utils.toArray("#sections #wraps-part-02 .section-wrap");
    const sections = gsap.utils.toArray("#sections .section-wrap .section");
    const slider = document.querySelector('#slides');
    const slides = gsap.utils.toArray("#slides .slide-card-wrap");
    const sliderSection = document.querySelector('#section-07');
    const graphInputs = document.querySelectorAll('#graph-section input[type="range"]');
    const section2Height = document.querySelector('#section-wrap-02').offsetHeight;
    const section3GraphEnd = document.querySelector('#section-03').offsetHeight - 360;
    // section 3 ".definitions-graph-developer .definitions-graph-item" last element distance from left side of parent ".definitions-graph-developer"
    const section3GraphItemLast = document.querySelector('.definitions-graph-developer .definitions-graph-item:last-child').offsetLeft - document.querySelector('.definitions-graph-developer').offsetLeft;
    const section7 = document.querySelector('#section-wrap-07');
    const dropEl = document.querySelector('#drop');
    const section1 = document.querySelector('#section-wrap-01');
    const unionSvg = document.querySelector('#section-02 .column-1');
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
    gsap.set("#section-wrap-07", {
        // marginBottom: slider.offsetWidth - section7.offsetHeight
    });

    const headerTL = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-wrap-01',
            // markers: true,
            start: '10px top',
            end: '+=300',
            toggleActions: 'play none none reverse',
            //scrub: 1
        }
    });

    headerTL
    .to('#logo_svg .color-white', {
        fill: "#006ff2"
    })
    .to('#nav-menu', {
        backgroundImage: "linear-gradient(270deg, rgba(149, 149, 149, 0.34) 0%, rgba(128, 128, 128, 0.54) 40%)"
    }, '<');


    const sections01TL = gsap.timeline({
        scrollTrigger: {
            id: 'sections-01',
            trigger: sectionsPart01,
            start: () => "top top",
            end: () => (sectionsPart01.offsetHeight) + " bottom", // "+=" + (wrap.offsetHeight),
            toggleActions: 'play complete reverse reset',
            scrub: 1,
            // pin: true,
            // pinSpacing: false,
            
            snap: {
                snapTo: 1 / (sectionWraps01.length - 1),
                duration: 2,// {min: 0.5, max: 1},
                delay: 0.5,
                ease: "none"                    
            },
            // markers: {
            //     startColor: "green",
            //     endColor: "red",
            //     fontSize: "14px",
            //     indent: 20,
            //     fontWeight: "bold"
            // },
            onEnter: () => {
                console.log('onEnter sections');
            },
            onLeave: () => {
                console.log('onLeave sections');
            },
            onSnapComplete: () => {
                console.log('onSnapComplete sections');

            }
        }
    });
    
    // set timeline for section-wrap with scrollTrigger so each section will be pinned to the top of the screen when it's in view, 
    // and unpinned when all animated elements finished animating + 1 second then scroll to the next section
    sectionWraps.forEach((wrap, i) => {

        // if (i === 0) return;
        
        const section = wrap.querySelector('.section');
        const animatedElements = gsap.utils.toArray(section.querySelectorAll('.animated'));
        const tl = gsap.timeline({
            scrollTrigger: {
                id: wrap.id + '-items',
                trigger: wrap,
                start: () => "top 250px",
                end: () => "bottom bottom", // + (wrap.offsetHeight),
                toggleActions: 'play complete none reverse',
                //preventOverlaps: true,
                // scrub: 2,
                // pin: section,
                // pinSpacing: false,
                // markers: {
                //     startColor: "blue",
                //     endColor: "purple",
                //     fontSize: "12px",
                //     indent: 40,
                //     fontWeight: "normal"
                // },
            }
        });

        animatedElements.forEach(el => {
            tl.from(el, {
                y: () => el.offsetHeight,
                opacity: () => 0,
                autoAlpha: 0,
                visibility: 'hidden',
                duration: 0.3,
                // stagger: 0.1,
                // ease: "power3.in"
            }).to(el, {
                y: () => 0,
                autoAlpha: 1,
                opacity: () => 1,
                visibility: 'visible',
                ease: "power3.in"
            }, '-=0.1');
        });
        
    });

    const webinarSticker = gsap.to('#webinar-sticker', {
        scrollTrigger: {
            id: 'webinar-sticker',
            trigger: '#section-01',
            start: () => 'top top',
            end: () => 'bottom bottom',
            toggleActions: 'play complete reverse reset',
            // scrub: 3,
            // markers: true
        },
        xPercent: -85,
        duration: 1
    });

    const section1TL = gsap.timeline({
        scrollTrigger: {
            id: 'section-01-out',
            trigger: '#section-wrap-01',
            start: () => '10px top',
            end: () => 'bottom top',
            toggleActions: 'play complete reverse reset',
            // scrub: 3,
            // markers: true
        }
    });
    section1TL.fromTo('#section-wrap-01', {
        clipPath: "path('m -300 -400 l 1600 0 c 1600 0 1600 1600 1600 1600 c 0 1600 -1600 1600 -1600 1600 c -1600 0 -1600 -1600 -1600 -1600 z')"
    }, {
        clipPath: "path('m " + dropEl.offsetLeft + " 300 l 22.5 0 c 22.5 0 22.5 22.5 22.5 22.5 c 0 22.5 -22.5 22.5 -22.5 22.5 c -22.5 0 -22.5 -22.5 -22.5 -22.5 z')",
        duration: 1,
    })
    .to('#section-wrap-01', {
        opacity: 0,
        duration: 0.3
    })
    .to('#drop', {
        opacity: 1,
        duration: 0.3
    }, '-=0.3')
    .to('#drop', {
        x: () => - (dropEl.offsetLeft - (unionSvg.offsetWidth / 2 ) + unionSvg.offsetLeft - 265),
        y: () => (section2Height / 2) + (section1.offsetHeight - 255 - dropEl.offsetHeight),
        duration: 2.5
    });

    
    const drop2TL = gsap.timeline({
        scrollTrigger: {
            id: 'drop-2',
            trigger: '#section-wrap-02',
            start: () => '50px top',
            end: () => 'bottom 50px',
            toggleActions: 'play complete reverse reset',
            // scrub: 2,
            // markers: true
        }
    });

    drop2TL
    .to('#drop', {
        x: () => section3GraphItemLast - 30,
        y: () => (section2Height / 2) + (section1.offsetHeight - 320 - dropEl.offsetHeight) + (section2Height / 2) + section3GraphEnd,
        duration: 3
    }, '1')
    .to('#drop', {
        opacity: 0,
        duration: 0.3
    }, '-=0.3');

    const section3TL = gsap.timeline({
        scrollTrigger: {
            id: 'graph',
            trigger: '#section-wrap-03',
            start: 'top 1px',
            end: '+=600',
            toggleActions: 'play none none none',
            // scrub: 1,
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
            toggleActions: 'play none reverse reset',
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
            trigger: '#section-wrap-07',
            pin: '#section-wrap-07',
            scrub: 1,
            snap: 1 / (slides.length -2),
            // preventOverlaps: true,
            toggleActions: 'play none none reverse',
            // base vertical scrolling on how wide the container is so it feels more natural.
            start: () => "top top",
            end: () => "+=" + (slider.offsetWidth ),
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
    section7TL.to(slides, {
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

    // select the ".footer" element
    const footer = document.querySelector('#footer');

    // set tween for the footer element, rising from the bottom of the screen, the tween will be used in onLeave callback function
    const footerTween = gsap.from(footer, {
        y: () => footer.offsetHeight,
        duration: 1
    });
    const sections02TL = gsap.timeline({
        scrollTrigger: {
            id: 'sections-02',
            trigger: sectionsPart02,
            start: () => "top bottom",
            end: () => "bottom bottom", // "+=" + (wrap.offsetHeight),
            toggleActions: 'play complete reverse reset',
            scrub: 1,
            // pin: true,
            // pinSpacing: false,
            
            snap: {
                snapTo: 1 / (sectionWraps02.length),
                duration: 2,// {min: 0.5, max: 1},
                delay: 0.5,
                ease: "none"                    
            },
            // markers: {
            //     startColor: "green",
            //     endColor: "red",
            //     fontSize: "14px",
            //     indent: 100,
            //     fontWeight: "bold"
            // },
            onEnter: () => {
                console.log('onEnter sections');
            },
            onLeave: () => {
                console.log('onLeave sections');
                // run tween for the footer element, rising from the bottom of the screen
                footerTween.play();
            },
            onEnterBack: () => {
                console.log('onEnterBack sections');
                // run tween for the footer element, rising from the bottom of the screen
                footerTween.reverse();
            },
            onSnapComplete: () => {
                console.log('onSnapComplete sections');

            }
        }
    });
    


}

// init() on page load 
window.addEventListener('load', () => {
    init();
});