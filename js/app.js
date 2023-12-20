function init() {
    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis();

        // lenis.on('scroll', (e) => {
        // console.log(e);
        // });

        function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
        }

    requestAnimationFrame(raf);
    
    const navMenu = document.querySelector('#nav-menu');
    const sectionsPart01 = document.querySelector('#wraps-part-01');
    const sectionsPart02 = document.querySelector('#wraps-part-02');
    const sectionWraps = gsap.utils.toArray("#sections .section-wrap");
    const sectionWraps01 = gsap.utils.toArray("#sections #wraps-part-01 .section-wrap");
    const sectionWraps02 = gsap.utils.toArray("#sections #wraps-part-02 .section-wrap");
    const sections = gsap.utils.toArray("#sections .section-wrap .section");
    const dropEl = document.querySelector('#drop');
    const dropElTop = dropEl.offsetTop;
    const section1 = document.querySelector('#section-wrap-01');
    const section2 = document.querySelector('#section-wrap-02')
    const section2Height = section2.offsetHeight;
    const unionSvg = document.querySelector('#section-02 .column-1');
    const section2svg = document.querySelector('#section-02 svg#h2pro-mission_svg');
    const section2svgVector = document.querySelector('#h2pro-mission_svg #mask1_4539_46481-vector');
    const graphInputs = document.querySelectorAll('#graph-section input[type="range"]');
    const section3 = document.querySelector('#section-wrap-03');
    const section3GraphEnd = document.querySelector('#section-03').offsetHeight - 360;
    const section3GraphItemLast = document.querySelector('.definitions-graph-developer .definitions-graph-item:last-child').offsetLeft - document.querySelector('.definitions-graph-developer').offsetLeft;
    const section3GraphItemSecond = document.querySelector('.definitions-graph-developer .definitions-graph-item.etac-item').offsetLeft - document.querySelector('.definitions-graph-developer').offsetLeft;
    const section4 = document.querySelector('#section-wrap-04');
    const section4InnerSection = document.querySelector('#section-wrap-04 #section-04');
    const section4Content = document.querySelector('#section-04 .content');
    const section4Title = document.querySelector('#section-04 .title');
    const section4BG = document.querySelector('#section-04 #section-04-bg');
    const section4BgImage1 = document.querySelector('#section-04 #section-04-bg #bg-img-1');
    const section4BgImage2 = document.querySelector('#section-04 #section-04-bg #bg-img-2');
    const section4ActionButton = document.querySelector('#section-04 .action-button');
    const section4VideoContainer = document.querySelector('#section-04 .video-container');
    const section4Video = document.querySelector('#section-04 .video-container .video');
    const section4VideoButton = document.querySelector('#section-04 .video-container #play-video');
    const section5 = document.querySelector('#section-wrap-05');
    const section6 = document.querySelector('#section-wrap-06');
    const section6Action = section6.querySelector('#section-06 .section-action');
    const section7 = document.querySelector('#section-wrap-07');
    const section7Action = section7.querySelector('#section-07 .section-action');
    const slider = document.querySelector('#slides');
    const slideCard = document.querySelector('#slides .slide-card-wrap');
    const slides = gsap.utils.toArray("#slides .slide-card-wrap");
    const sliderSection = document.querySelector('#section-07');
    const section8 = document.querySelector('#section-wrap-08');
    const section8spacer = document.querySelector('#section-08-spacer');
    const section8DropTarget = document.querySelector('#section-08 .drop-target');
    const section9 = document.querySelector('#section-wrap-09');
    const section10 = document.querySelector('#section-wrap-10');
    // select the footer
    const footer = document.querySelector('#footer');
    const footerInner = document.querySelector('#footer .footer-inner');
    
    
    
    // set logo charecter color-white class
    gsap.set("#logo_svg .color-white", {
        fill: "#ffffff"
    });
    // set logo charecter color-green class
    gsap.set("#logo_svg .color-green", {
        fill: "#5fb847"
    });
    
    // gsap.set("#nav-menu", {});

    gsap.set("#drop", {
        x: () => 0,
        y: () => 0,
        opacity: 0,
        backgroundColor: "#006ff2",
        borderRadius: "0px 50px 50px 50px",
        width: "35px",
        height: "35px",
        rotate: 0,
    });
    gsap.set(section4BG, {
        clipPath: 'path("m 940 490 v -50 h 50 c 25 0 50 25 50 50 c 0 25 -25 50 -50 50 c -25 0 -50 -25 -50 -50 z")',
        opacity: 0
    });
    gsap.set(section4BgImage1, {
        opacity: 0
    });

    // const headerTL = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '#section-wrap-01',
    //         // markers: true,
    //         start: '10px top',
    //         end: '+=300',
    //         toggleActions: 'play none none reverse',
    //         //scrub: 1
    //     }
    // });

    // headerTL
    // .to('#logo_svg .color-white', {
    //     fill: "#006ff2"
    // })
    // .to('#nav-menu .nav-link', {
    //     color: "#333333"
    // }, '<')
    // .to('#nav-menu .nav-link svg.down-icon .arrow-down', {
    //     stroke: "#333333"
    // }, '<');

    


    const sections01TL = gsap.timeline({
        scrollTrigger: {
            id: 'sections-01',
            trigger: sectionsPart01,
            start: () => "top top",
            end: () => (sectionsPart01.offsetHeight) + " bottom", // "+=" + (wrap.offsetHeight),
            scrub: true,
            // pin: true,
            // pinSpacing: false,
            
            // snap: {
            //     snapTo: 1 / (sectionWraps01.length),
            //     duration: 2,// {min: 0.5, max: 1},
            //     // delay: 0.3,
            //     ease: "none"                    
            // },
            // markers: {
            //     startColor: "blue",
            //     endColor: "red",
            //     fontSize: "14px",
            //     indent: 20,
            //     fontWeight: "bold"
            // },
            onEnter: () => {
                console.log('onEnter sections - ', sectionsPart01.offsetHeight);
            },
            onLeave: () => {
                console.log('onLeave sections - ', sectionsPart01.offsetHeight);
            },
            onEnterBack: () => {
                console.log('onEnterBack sections - ', sectionsPart01.offsetHeight);
            },
            onLeaveBack: () => {
                console.log('onLeaveBack sections - ', sectionsPart01.offsetHeight);
            },
            onSnapComplete: () => {
                console.log('onSnapComplete sections - ', sectionsPart01.offsetHeight);

            }
        }
    });
    
    // set timeline for section-wrap with scrollTrigger so each section will be pinned to the top of the screen when it's in view, 
    // and unpinned when all animated elements finished animating + 1 second then scroll to the next section
    
    const webinarSticker = gsap.to('#webinar-sticker', {
        scrollTrigger: {
            id: 'webinar-sticker',
            trigger: '#section-01',
            start: () => 'top top',
            end: () => 'bottom bottom',
            toggleActions: 'play none reverse reset',
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
            scrub: 1,
            // markers: true
        }
    });
    const dropElHalfWidth = dropEl.offsetWidth / 2;
    const section1clipPath = "path('m " + dropEl.offsetLeft + " " + dropEl.offsetTop + " l " + dropElHalfWidth + " 0 c " + dropElHalfWidth + " 0 " + dropElHalfWidth + " " + dropElHalfWidth + " " + dropElHalfWidth + " " + dropElHalfWidth + " c 0 " + dropElHalfWidth + " -" + dropElHalfWidth + " " + dropElHalfWidth + " -" + dropElHalfWidth + " " + dropElHalfWidth + " c -" + dropElHalfWidth + " 0 -" + dropElHalfWidth + " -" + dropElHalfWidth + " -" + dropElHalfWidth + " -" + dropElHalfWidth + " z')";
    section1TL.fromTo('#section-wrap-01', {
        clipPath: "path('m -300 -400 l 1600 0 c 1600 0 1600 1600 1600 1600 c 0 1600 -1600 1600 -1600 1600 c -1600 0 -1600 -1600 -1600 -1600 z')"
    }, {
        clipPath: section1clipPath,
        duration: 1,
    })
    .to('#section-wrap-01', {
        opacity: 0,
        duration: 0.2
    })
    .fromTo('#drop', {
        opacity: 0,
        rotate: 0,
    }, {
        rotate: 0,
        opacity: 1,
        duration: 0.2
    }, '<')
    .fromTo('#drop', {
        x: () => 0,
        y: () => 0,
        width: "35px",
        height: "35px",
    },{
        x: () => -(dropEl.offsetLeft - section2svgVector.getBoundingClientRect().left - (section2svgVector.getBoundingClientRect().width / 2) + (dropEl.offsetWidth / 2) ),
        y: () => section2svgVector.getBoundingClientRect().top - dropEl.getBoundingClientRect().top + (section2svgVector.getBoundingClientRect().height / 2) - (dropEl.offsetHeight / 2),
        width: "35px",
        height: "35px",
        duration: 2,
        ease: "power1.out",
        onStart : () => {
            console.log('drop 1 Start #section-wrap-01');
            console.log("section1.offsetHeight: ", section1.offsetHeight);
            console.log("dropElTop: ", dropElTop);
            console.log('drop1El offsetTop: ', dropEl.offsetTop);
            console.log("+ svgVector Rect().top: ", section2svgVector.getBoundingClientRect().top);
            console.log('- drop1El rect().top: ', dropEl.getBoundingClientRect().top);
            console.log("+ svgVector rect().height / 2: ", section2svgVector.getBoundingClientRect().height / 2);
            console.log('- drop1El offsetHeight / 2: ', dropEl.offsetHeight / 2);
            console.log("dropEl to Y: ", section2svgVector.getBoundingClientRect().top - dropElTop + (section2svgVector.getBoundingClientRect().height / 2) - (dropEl.offsetHeight / 2));
            console.log("dropEl to X: ", -(dropEl.offsetLeft - section2svgVector.getBoundingClientRect().left - (section2svgVector.getBoundingClientRect().width / 2) + (dropEl.offsetWidth / 2) ));
            console.log('drop1El rect().height / 2: ', dropEl.getBoundingClientRect().height / 2);
        },
        onComplete : () => {
            console.log('drop 1 Complete #section-wrap-01');
            // console.log('drop1TL offsetWidth: ' + dropEl.offsetWidth);
            // console.log('drop1TL getBoundingClientRect().width: ' + dropEl.getBoundingClientRect().width);
            // console.log("dropEl to X: ", -(dropEl.offsetLeft - section2svgVector.getBoundingClientRect().left - (section2svgVector.getBoundingClientRect().width / 2) + (dropEl.offsetWidth / 2) ));
            // console.log("dropEl to Y: ", (section2svg.getBoundingClientRect().height / 2) + (section1.offsetHeight - dropEl.offsetTop - (dropEl.offsetHeight / 2)));
            // console.log("mask1_4539_46481-vector: ", section2svgVector.getBoundingClientRect().width);
        }
    });

    
    const drop2TL = gsap.timeline({
        scrollTrigger: {
            id: 'drop-2',
            trigger: '#section-wrap-02',
            start: () => '100px top',
            end: () => 'bottom top',
            toggleActions: 'play complete none reset',
            scrub: 1,
            // markers: true,
            
        }
    });

    drop2TL
    .fromTo('#drop', {
        x: () => -(dropEl.offsetLeft - section2svgVector.getBoundingClientRect().left - (section2svgVector.getBoundingClientRect().width / 2) + (dropEl.offsetWidth / 2) ),
        y: () => (section2Height / 2) + (section1.offsetHeight - dropElTop - (dropEl.offsetHeight / 2)) - 7,
        backgroundColor: "#006ff2",
        rotate: 0,
        width: "35px",
        height: "35px",
    },{
        x: () => section3GraphItemSecond - dropEl.offsetWidth + 250,
        y: () => section1.offsetHeight + section2Height + section3GraphEnd - dropElTop,
        backgroundColor: "#5fb847",
        rotate: 0,
        opacity: 1,
        // delay: 0.3,
        duration: 2,
        ease: "power1.inOut",
        onStart : () => {
            console.log('drop 2 Start #section-wrap-02');
        },
        onComplete : () => {
            console.log('drop 2 Complete #section-wrap-02');
        }
    })
    .to('#drop', {
        opacity: 0,
        duration: 0.3
    });

    const section3TL = gsap.timeline({
        scrollTrigger: {
            id: 'graph',
            trigger: '#section-wrap-03',
            start: 'top 10px',
            end: '+=600',
            toggleActions: 'play none none none',
            scrub: true,
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

    const drop3TL = gsap.timeline({
        scrollTrigger: {
            id: 'drop-3',
            trigger: '#section-wrap-04',
            start: () => '100px bottom',
            end: () => 'bottom top',
            toggleActions: 'play complete reverse reset',
            scrub: true,
            // markers: true,
            
        }
    });

    drop3TL
    .fromTo('#drop', {
        opacity: 0,
    },{
        opacity: 1,
        duration: 0.3
    })
    .fromTo('#drop', {
        x: () => section3GraphItemSecond - dropEl.offsetWidth + 250,
        y: () => section1.offsetHeight + section2Height + section3GraphEnd - dropElTop,
        width: "35px",
        height: "35px",
    }, {
        x: () => -(dropEl.offsetWidth / 2),
        y: () => section2Height + section1.offsetHeight + section3GraphEnd + (section4.offsetHeight / 4) - (dropEl.offsetHeight * 2) - 20,
        duration: 1,
        ease: "power1.out"
    })
    .fromTo(section4BG, {
        clipPath: 'path("m 940 460 v -17.5 h 17.5 c 8.75 0 17.5 8.75 17.5 17.5 c 0 8.75 -8.75 17.5 -17.5 17.5 c -8.75 0 -17.5 -8.75 -17.5 -17.5 z")',
        opacity: 0
    },{
        opacity: 1,
        duration: 0.3
    })
    .fromTo(section4BgImage1, {
        opacity: 0
    },{
        opacity: 1,
        duration: 0.3
    }, '<')
    .to('#drop', {
        opacity: 0,
        duration: 0.6,
        onStart : () => {
            console.log('drop 3 Start #section-wrap-04');
        },
        onComplete : () => {
            console.log('drop 3 Complete #section-wrap-04');
        }
    }, '<')
    .to(section4BgImage1, {
        scale: 1,
        objectPosition: "0 -150px",
        duration: 2
    })
    .to(section4BG, {
        clipPath: 'path("m -550 -590 v -1500 h 1500 c 750 0 1500 750 1500 1500 c 0 750 -750 1500 -1500 1500 c -750 0 -1500 -750 -1500 -1500 z")',
        duration: 2
    }, '<')
    .to(section4BgImage2, {
        opacity: 1,
        duration: 0.5
    })
    .fromTo(section4Title, {
        opacity: 0,
        yPercent: 100,
    },{
        opacity: 1,
        yPercent: 0,
        duration: 1.5,
        ease: "power1.out"
    })
    .fromTo(section4Content, {
        opacity: 0,
        yPercent: 100,
    },{
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power1.out"
    });

    // const section4TL = gsap.timeline({
    //     scrollTrigger: {
    //         id: 'section-4-video',
    //         trigger: '#section-wrap-04',
    //         start: () => '10px top',
    //         end: () => window.offsetHeight + ' top',
    //         toggleActions: 'play complete none reverse',
    //         scrub: true,
    //         // markers: true,
            
    //     }
    // });

    // section4TL
    // .to(section4VideoContainer, {
    //     y: () => 400,
    //     duration: 0.5,
    //     ease: "none"
    // });

    const drop4TL = gsap.timeline({
        scrollTrigger: {
            id: 'drop-4',
            trigger: '#section-wrap-05',
            start: () => '50px bottom',
            end: () => 'bottom top',
            toggleActions: 'play complete none reset',
            scrub: 1,
            // markers: true,
        }
    });

    drop4TL
    .fromTo(section4BG, {
        clipPath: 'path("m -550 -590 v -1500 h 1500 c 750 0 1500 750 1500 1500 c 0 750 -750 1500 -1500 1500 c -750 0 -1500 -750 -1500 -1500 z")'
    }, {
        clipPath: 'path("m 940 490 v -35 h 35 c 17.5 0 35 17.5 35 35 c 0 17.5 -17.5 35 -35 35 c -17.5 0 -35 -17.5 -35 -35 z")',
        duration: 0.3,
        ease: "power1.out"
    })
    .fromTo('#drop', {
        x: () => -(dropEl.offsetWidth / 2),
        y: () => section2Height + section1.offsetHeight + section3GraphEnd + (section4.offsetHeight / 2) - (dropEl.offsetHeight * 2) - 20,
        opacity: 0,
    }, {
        backgroundColor: "#1d7bc8",// "#1d7bc8"
        width: "70px",
        height: "70px",
        opacity: 1,
        duration: 0.3
    })
    .fromTo(section4BG, {
        opacity: 1
    },{
        opacity: 0,
        duration: 0.3
    }, '<')
    .fromTo('#drop', {
        x: () => -(dropEl.offsetWidth / 2),
        y: () => section2Height + section1.offsetHeight + section3GraphEnd + (section4.offsetHeight / 2) - (dropEl.offsetHeight * 2) - 20,
    }, {
        x: () => -(dropEl.offsetLeft) + document.querySelector('#section-wrap-05 .grid .card:first-child .card_image img.img-gif').offsetLeft + 130,
        y: () => section2Height + section1.offsetHeight + section3GraphEnd + section4.offsetHeight + (section5.offsetHeight / 2) - 220,
        duration: 2,
        ease: "power1.out",
        // all gsap tween animation callback functions: onStart, onUpdate, onComplete, onRepeat, onReverseComplete
        onStart : () => {
            console.log('drop 4 Start #section-wrap-05');
        },
        onComplete : () => {
            console.log('drop 4 Complete #section-wrap-05');
        }
    })
    .to('#drop', {
        opacity: 0,
        duration: 0.3
    });

    const drop5TL = gsap.timeline({
        scrollTrigger: {
            id: 'drop-5',
            trigger: '#section-wrap-06',
            start: () => '50px bottom',
            end: () => 'bottom top',
            toggleActions: 'play complete none reset',
            scrub: 1,
            // markers: true
        }
    });

    drop5TL
    .fromTo('#drop',{
        opacity: 0
    },{
        backgroundColor: "#1d7bc8", // "#1d7bc8"
        opacity: 1,
        duration: 0.3
    })
    .fromTo('#drop', {
        x: () => -(dropEl.offsetLeft) + document.querySelector('#section-wrap-05 .grid .card:first-child .card_image img.img-gif').offsetLeft + 130,
        y: () => section2Height + section1.offsetHeight + section3GraphEnd + section4.offsetHeight + (section5.offsetHeight / 2) - 220,
        rotate: 0,
    }, {
        backgroundColor: "#cccccc",
        x: () => (section6.offsetWidth * 0.7) - dropEl.offsetLeft,
        y: () => section2Height + section1.offsetHeight + section3GraphEnd + section4.offsetHeight + section5.offsetHeight + 50,
        rotate: 45,
        duration: 1.5,
        ease: "power1.out"
    }, '>+=0.3')
    .to('#drop', {
        opacity: 0,
        duration: 0.2
    }, '>')
    .fromTo(section6.querySelector('#section-06 > img.img'), {
        clipPath: "path('m 1440 -900 c 35 0 35 35 35 35 c 0 35 -35 35 -35 35 c -35 0 -35 -35 -35 -35 c 0 -35 35 -35 35 -35 z')",
    },{
        clipPath: 'path("m 1440 -900 c 1600 0 1600 1600 1600 1600 c 0 1600 -1600 1600 -1600 1600 c -1600 0 -1600 -1600 -1600 -1600 c 0 -1600 1600 -1600 1600 -1600 z")',
        duration: 1.7,
        ease: "power1.out",
        onStart : () => {
            console.log('drop 5 Start #section-wrap-06');
        },
        onComplete : () => {
            console.log('drop 5 Complete #section-wrap-06');
        }
    }, '>-=0.2');

    const drop6TL = gsap.timeline({
        scrollTrigger: {
            id: 'drop-6',
            trigger: '#section-wrap-07',
            start: () => '50px bottom',
            end: () => (section6.offsetHeight) + ' top',
            toggleActions: 'play complete none reset',
            scrub: 1,
            // markers: true,
            // onEnter: () => {
            //         console.log("#section-06 action offsetTop: ", section6Action.offsetTop);
            //         console.log("#section-06 action rect.top: ", section6Action.getBoundingClientRect().top);
            //         console.log("section6.offsetTop: ", (section6.offsetTop));
            //         console.log("#drop offsetTop: " + dropEl.offsetTop);
            //         console.log("#drop getBoundingClientRect().top: " + dropEl.getBoundingClientRect().top);
            //         console.log("#drop from X: ", (-(dropEl.offsetLeft - (section6Action.getBoundingClientRect().left + section6Action.getBoundingClientRect().width - 54))));
            //         console.log("#drop from Y: ", (section7.offsetTop - section6Action.getBoundingClientRect().bottom - 54 - dropElTop));
            //         console.log("dropEl.offsetLeft - section6Action.offsetLeft: ", (-(dropEl.offsetLeft - section6Action.offsetLeft)));
            //         console.log("section7.offsetTop: ", (section7.offsetTop));
            //         console.log("section6Action.getBoundingClientRect().bottom: ", (section6Action.getBoundingClientRect().bottom));
            //         console.log("section6Action.getBoundingClientRect().top: ", (section6Action.getBoundingClientRect().top));
            //         console.log("section7Action.getBoundingClientRect().top: ", (section7Action.getBoundingClientRect().top));
                    
            // },
        }
    });
    
    
    // drop-anim 06 on section switch from 6 to 7
    drop6TL
    .set('#drop', {
        x: () => -(dropEl.offsetLeft - (section6Action.getBoundingClientRect().left + section6Action.getBoundingClientRect().width - 54)),
        y: () =>  section6.offsetTop + section6Action.getBoundingClientRect().top - dropElTop + section6Action.offsetHeight + 5,
        opacity: 0,
        rotate: 0,
        backgroundColor: "#5fb847",
        width: "54px",
        height: "54px",
    })
    .to('#drop',{
        opacity: () => 1,
        autoAlpha: 1,
        visibility: 'visible',
        duration: 0.3
    })
    .to('#drop', {
        width: "45px",
        height: "45px",
        x: () => -(dropEl.offsetLeft - (section6Action.getBoundingClientRect().left + section6Action.getBoundingClientRect().width - 54) ) - section7Action.offsetLeft - 85,
        y: () =>  section1.offsetHeight + section2Height + section3.offsetHeight + section4.offsetHeight + section5.offsetHeight - dropElTop + section7Action.getBoundingClientRect().top + 110,
        rotate: 135,
        duration: 2,
        ease: "power1.in",
        onStart : () => {
            console.log('drop 6 Start #section-wrap-07');
        },
        onComplete : () => {
            console.log('drop 6 Complete #section-wrap-07');
        }
    }, '>+=0.5')
    .to('#drop', {
        opacity: () => 0,
        autoAlpha: 0,
        visibility: 'hidden',
        duration: 0.3,
        onStart : () => {
            console.log('onStart drop6 visibility hidden');
        },
        onComplete : () => {
            console.log('onComplete drop6 visibility hidden');
        }
    }, '>')
    .fromTo('#section-07 .slider-controls-buttons', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.3
    }, '<');
    
    const section6TL = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-06',
            start: '80% bottom',
            end: 'bottom+=1px bottom',
            toggleActions: 'play reverse play reverse',
            scrub: 1
        }
    });

    section6TL
    .from("#section-06 .img-22", {
        x: "300%",
        stagger: 0.3,
        duration: 1
    });
    
    const sliderNext = document.querySelector('#slider-next');
    const sliderPrev = document.querySelector('#slider-prev');
    
    const section7TL = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-wrap-07',
            start: () => "top top",
            end: () => "+=" + (slideCard.offsetWidth * slides.length),
            pin: '#section-07',        
            scrub: 1,
            snap: 1 / (slides.length -2),
            // preventOverlaps: true,
            toggleActions: 'play none none reverse',
            // base vertical scrolling on how wide the container is so it feels more natural.
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
        window.scrollBy(0, 250);
        
        
    });
    // reverse the slidAnim when the slider control button #slider-prev is clicked
    document.querySelector('#slider-prev').addEventListener('click', () => {
        // scroll up one step 
        window.scrollBy(0, -250);
    });

    


    // const drop7TL = gsap.timeline({
    //     scrollTrigger: {
    //         id: 'drop-7',
    //         trigger: '#section-wrap-08',
    //         start: () => '50px bottom',
    //         end: () => 'bottom top',
    //         toggleActions: 'play complete none reset',
    //         // scrub: 2,
    //         // markers: true,
    //         onEnter: () => {
    //             console.log('dropTL 7 enter - dropEl.offsetLeft: ', dropEl.offsetLeft);
    //             console.log('dropTL 7 enter - section7Action.Rect().left: ', section7Action.getBoundingClientRect().left);                   
    //         },
    //     }
    // });
    
    
    
    // drop7TL
    // .set('#drop', {
    //     x: () =>  -(dropEl.offsetLeft - section7Action.getBoundingClientRect().left),
    //     y: () =>  section7.offsetTop - dropElTop + section7Action.getBoundingClientRect().top,
    //     opacity: 0,
    //     rotate: 135,
    //     width: "45px",
    //     height: "45px",
    // })
    // .to('#drop',{
    //     opacity: 1,
    //     duration: 0.3,
    //     onStart : () => {
    //         console.log('drop 7 - dropEl.offsetLeft: ', dropEl.offsetLeft);
    //         console.log('drop 7 - section7Action.getBoundingClientRect().left: ', section7Action.getBoundingClientRect().left);
    //     }
    // })
    // .to('#drop', {
    //     x: () => -(dropEl.offsetLeft - (section6Action.getBoundingClientRect().left + section6Action.getBoundingClientRect().width - 54) ) - section7Action.offsetLeft - 85,
    //     y: () =>  section1.offsetHeight + section2Height + section3.offsetHeight + section4.offsetHeight + section5.offsetHeight - dropElTop + section7Action.getBoundingClientRect().top + 110,
    //     duration: 2,
    //     ease: "power1.in",
    //     onStart : () => {
    //         console.log('drop 7 Start #section-wrap-08');
    //     },
    //     onComplete : () => {
    //         console.log('drop 7 Complete #section-wrap-08');
    //     }
    // }, '>+=0.5');


    const darkEls = gsap.utils.toArray(document.querySelectorAll('.dark-bg'));
    darkEls.forEach((darkEl, index) => {
        const darkBGheaderTL = gsap.timeline({
            scrollTrigger: {
                id: 'darkBG-' + index,
                trigger: darkEl,
                markers: {
                    startColor: "green",
                    endColor: "black",
                    fontSize: "14px",
                    indent: 200,
                    fontWeight: "normal"
                },
                start: 'top 100px',
                end: '+=300px',
                toggleActions: 'play reverse play reverse',
                // scrub: 1,
                onEnter: () => {
                    console.log(index + ' onEnter darkBGheaderTL - play');
                },
                onLeave: () => {
                    console.log(index + ' onLeave darkBGheaderTL - none');
                },
                onEnterBack: () => {
                    console.log(index + ' onEnterBack darkBGheaderTL - reverse');
                },
                onLeaveBack: () => {
                    console.log(index + ' onLeaveBack darkBGheaderTL - none');
                }
            }
        });

        darkBGheaderTL
        .fromTo('#logo_svg .color-white', {
            fill: "#006ff2"
        },{
            fill: "#ffffff"
        })
        .fromTo('#nav-menu .nav-link', {
            color: "#333333"
        },{
            color: "#ffffff"
        }, '<')
        .fromTo('#nav-menu .nav-link svg.down-icon .arrow-down', {
            stroke: "#333333"
        },{
            stroke: "#ffffff"
        }, '<');

        // const lightBGheaderTL = gsap.timeline({
        //     scrollTrigger: {
        //         id: 'leaveDarkBG',
        //         trigger: darkEl,
        //         // markers: {
        //         //     startColor: "blue",
        //         //     endColor: "red",
        //         //     fontSize: "14px",
        //         //     indent: 10,
        //         //     fontWeight: "bold"
        //         // },
        //         start: '201px 100px',
        //         end: '300px 100px',
        //         toggleActions: 'play none reverse none',
        //         // scrub: 1,
        //         onEnter: () => {
        //             console.log('onEnter lightBGheaderTL - play');
        //         },
        //         onLeave: () => {
        //             console.log('onLeave lightBGheaderTL - none');
        //         },
        //         onEnterBack: () => {
        //             console.log('onEnterBack lightBGheaderTL - reverse');
        //         },
        //         onLeaveBack: () => {
        //             console.log('onLeaveBack lightBGheaderTL - none');
        //         }
        //     }
        // });

        // lightBGheaderTL
        // .to('#logo_svg .color-white', {
        //     fill: "#006ff2"
        // })
        // .to('#nav-menu .nav-link', {
        //     color: "#333333"
        // }, '<')
        // .to('#nav-menu .nav-link svg.down-icon .arrow-down', {
        //     stroke: "#333333"
        // }, '<');
    });

    // set timeline with scrollTrigger for section wrap 09, trigger start when leaving section-wrap-09 and use it as timeline for fromTo animation for the section wrap 09 element,
    // the anime will be from - clipPath  
    const section9TL = gsap.timeline({
        scrollTrigger: {
            id: 'section-09-out',
            trigger: '#section-wrap-09',
            start: () => '10px top',
            end: () => 'bottom top',
            toggleActions: 'play none reverse reset',
            scrub: 1,
            // markers: true
        }
    });
    section9TL.fromTo('#section-09 > img.img', {
        clipPath: "path('m -300 -400 l 1600 0 c 1600 0 1600 1600 1600 1600 c 0 1600 -1600 1600 -1600 1600 c -1600 0 -1600 -1600 -1600 -1600 z')"
    }, {
        clipPath: "path('m 965 120 l 355 0 c 355 0 355 355 355 355 c 0 355 -355 355 -355 355 c -355 0 -355 -355 -355 -355 z')",
        duration: 1.5,
    })
    .to('#section-wrap-09 .section-inner', {
        y: () => -(document.querySelector('#section-wrap-09 .section-inner').offsetHeight),
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut"
    }, '<')
    .fromTo('#section-09 > img.img', {
        objectPosition: "0px 0px",
        width: "100%",
    }, {
        objectPosition: "-400px 100px",
        width: "125%",
        duration: 1.7
    }, '<+=1')
    .to('#section-wrap-09', {
        y: () => document.querySelector('#section-wrap-09').offsetHeight,
        duration: 2,
        delay: 0.5,
        ease: "power1.out",
        onStart : () => {
            console.log('section9 onStart #section-wrap-09');
        },
        onComplete : () => {
            console.log('section9 onComplete #section-wrap-09');
        }
    }, '<')
    .to('#section-wrap-09', {
        opacity: 0,
        duration: 2
    }, '>')
    .to('#section-10 img.img-51', {
        opacity: 1,
        duration: 2
    }, '<')
    .fromTo('#section-wrap-10 .content', {
        opacity: 0,
        y: () => 100
    }, {
        opacity: 1,
        y: () => 0,
        duration: 1.5,
        ease: "power1.out"
    }, '<+=1')
    .set('#section-wrap-09', {
        zIndex: 0
    });


    const sections02TL = gsap.timeline({
        scrollTrigger: {
            id: 'sections-02',
            trigger: sectionsPart02,
            start: () => "top bottom",
            end: () => "bottom bottom", // "+=" + (wrap.offsetHeight),
            // scrub: 1,
            // pin: true,
            // pinSpacing: false,
            
            // snap: {
            //     snapTo: 1 / (sectionWraps02.length),
            //     duration: 2,// {min: 0.5, max: 1},
            //     // delay: 0.5,
            //     ease: "none"                    
            // },
            // markers: {
            //     startColor: "green",
            //     endColor: "red",
            //     fontSize: "14px",
            //     indent: 100,
            //     fontWeight: "bold"
            // },
            onEnter: () => {
                console.log('onEnter sections 2');
            },
            onLeave: () => {
                console.log('onLeave sections 2');
                // run tween for the footer element, rising from the bottom of the screen
                
                
            },
            onEnterBack: () => {
                console.log('onEnterBack sections 2');
                // run tween for the footer element, rising from the bottom of the screen
                
            },
            onSnapComplete: () => {
                console.log('onSnapComplete sections 2');

            }
        }
    });

    sectionWraps.forEach((wrap, i) => {

        // if (i === 0) return;
        
        const animated = wrap.querySelectorAll('.animated');
        if (animated.length < 1) return;
        const animatedElements = gsap.utils.toArray(animated);
        
        const tl = gsap.timeline({
            scrollTrigger: {
                id: wrap.id + '-items',
                trigger: wrap,
                start: () => "top center",
                end: () => "bottom bottom", // + (wrap.offsetHeight),
                toggleActions: 'play none none reverse',
                //preventOverlaps: true,
                scrub: 1,
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

        animatedElements.forEach((el, index) => {
            const elAnimeType = el.dataset.animeType;
            const animeY = elAnimeType === 'fade' ? 0 : el.offsetHeight;

            tl.fromTo(el, {
                y: () => animeY,
                opacity: () => 0,
                autoAlpha: 0,
                visibility: 'hidden',
            },{
                y: () => 0,
                autoAlpha: 1,
                opacity: () => 1,
                visibility: 'visible',
                duration: 0.5,
                ease: "power1.out",
                onStart : () => {
                    console.log(index + ' - ' + wrap.id + ' onStart animated');
                },
                onComplete : () => {
                    console.log(index + ' - ' + wrap.id + ' onComplete animated');
                }
            });
        });
        
    });


    // set a timeline for the footer element, starting when top of footer reach bottom of scroller, the timeline will be using the footerTween animation
    const footerTL = gsap.timeline({
        scrollTrigger: {
            id: 'footer',
            trigger: footer,
            start: () => "top bottom",
            end: () => "bottom bottom",
            toggleActions: 'play none reverse reset',
            snap: {
                snapTo: 1,
                duration: 1,// {min: 0.5, max: 1},
                ease: "none"                    
            },
            // markers: {
            //     startColor: "purple",
            //     endColor: "blue",
            //     fontSize: "14px",
            //     indent: 100,
            //     fontWeight: "bold"
            // },
            onEnter: () => {
                console.log('onEnter footer');
            },
            onLeave: () => {
                console.log('onLeave footer');
                // run tween for the footer element, rising from the bottom of the screen
            },
            onEnterBack: () => {
                console.log('onEnterBack footer');
                // run tween for the footer element, rising from the bottom of the screen
            },
            onLeaveBack: () => {
                console.log('onLeaveBack footer');
            }
        }
    });
    footerTL.fromTo(footerInner, {
        y: () => footerInner.offsetHeight,
        opacity: () => 0
    },{
        y: () => 0,
        opacity: () => 1,
        duration: 2,
        ease: "power1.out"
    });

}
// beforeunload | pagehide event
window.addEventListener("pagehide", (event) => {
    // scroll to top of the page on page load
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      });
    console.log('page hide #### scrollTop end');

});
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
// init() on page load 
window.addEventListener('load', () => {
    init();
    console.log('on load ---- init end');
});