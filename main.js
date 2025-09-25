const tl = gsap.timeline({ defaults: { duration: 1 } });
tl.from(".profiles-section", {
    opacity: 0,
    y: 70,
    ease: "power2.out",
    duration: 1.5
});
gsap.from("h2, p", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.2
});
gsap.from(".omar-socials a", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.2
});
gsap.from(".modibo-socials a", {
    opacity: 0,
    x: 100,
    duration: 1,
    stagger: 0.2
});
gsap.from(".middle-infinity", {
    opacity: 0,
    y: -50,
    duration: 1
});
gsap.from(".infinity", {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    delay: 0.5
});

