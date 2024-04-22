document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
    
  let t1 = gsap.timeline();
        t1.from(".sec01", 4, {
            y: -100,
            x: -150,
            ease: Power3.easeInOut
        })
        t1.from(".sec02", 4, {
            y: -150,
            x: -250,
            ease: Power3.easeInOut
        }, '-=4')
        .from(".sec03", 4, {
            y: -80,
            x: -100,
            ease: Power3.easeInOut
        }, '-=4')
        .from(".sec04", 4, {
            y: -100,
            x: -150,
            ease: Power3.easeInOut
        }, '-=4')
        .from(".sec05", 4, {
            y: -80,
            x: -200,
            ease: Power3.easeInOut
        }, '-=4')
        .from(".sec06", 4, {
            y: -100,
            x: -350,
            ease: Power3.easeInOut
        }, '-=4')
        .from(".sec07", 4, {
            y: -50,
            x: -150,
            ease: Power3.easeInOut
        }, '-=4')
        .from(".sec08", 4, {
            y: 50,
            x: -350,
            ease: Power3.easeInOut
        }, '-=4')
        .from(".sec09", 4, {
            y: 100,
            x: -200,
            ease: Power3.easeInOut
        }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.first',
        duration: '100%',
        triggerHook: 0,
        offset: '300'
    })
        .setTween(t1)
        .setPin('.first')
        .addTo(controller);

    let t2 = gsap.timeline();
    t2
        .to('.top .container', 4, {
            height: 0
        });

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
        .setTween(t2)
        .setPin('.second')
        .addTo(controller);

    let t3 = gsap.timeline();
    t3
        .to('.sec301', 4, {
            y: -250,
            ease: Power3.easeInOut
        })
        .to('.sec302', 4, {
            y: -200,
            ease: Power3.easeInOut
        }, '-=4')
        .to('.sec303', 4, {
            y: -100,
            ease: Power3.easeInOut
        }, '-=4')
        .to('.sec304', 4, {
            y: 0,
            ease: Power3.easeInOut
        }, '-=4')
        .to('.sec305', 4, {
            y: 150,
            ease: Power3.easeInOut
        }, '-=4')
        .to('.sec306', 4, {
            y: 250,
            ease: Power3.easeInOut
        }, '-=4')

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
    })
        .setTween(t3)
        .setPin('.third')
        .addTo(controller);

    let t4 = gsap.timeline();
    t4
        .to('.sec401', 4, {
            autoAlpha: 0
        })
        .from('.sec402', 4, {
            autoAlpha: 0
        }, '-=4')
        .from('.sec403', 4, {
            autoAlpha: 0
        })
        .from('.sec404', 4, {
            autoAlpha: 0
        })

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
    })
        .setTween(t4)
        .setPin('.forth')
        .addTo(controller);
})