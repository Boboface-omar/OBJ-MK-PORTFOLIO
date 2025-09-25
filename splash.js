const tl = gsap.timeline();

tl.from(".letters span", {
    y: -200,
    opacity: 0,
    duration: 1.5,
    ease: "bounce.out",
    stagger: 0.3,
    rotation: 15
});

tl.to(".splash-screen", {
    duration: 1,
    opacity: 0,
    scale: 1.2,
    delay: 1,
    onComplete: () => {
        window.location.href = "index.html";
    }
});