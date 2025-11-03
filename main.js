// gsap.registerPlugin(SplitText);

CustomEase.create("hop", "0.9, 0, 0.1, 1");

gsap.set([".preloader-header a", ".preloader-copy p"], { autoAlpha: 0, y: 20 });

const preloaderImages= gsap.utils.toArray('.preloader-images .img');
const preloaderImagesInner= gsap.utils.toArray('.preloader-images img');

const tl = gsap.timeline({ delay: 0.25});

tl.to(".progress-bar",{
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut"
})
.set(".progress-bar",{ transformOrigin: "right"})
.to(".progress-bar",{
    scaleX: 0,
    duration: 1,
    ease: "power3.in"
})

preloaderImages.forEach((preloaderImg, index) => {
    tl.to(preloaderImg, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.8, // Increased from 1.5
        delay: index * 0.75,
    }, "-=5");  
})

preloaderImagesInner.forEach((preloaderImagesInner, index) => {
    tl.to(preloaderImagesInner, {
        scale: 1.1,
        duration: 2.4, // Increased from 2
        ease: "power3.inOut",
        delay: index * 0.75,
    }, "-=5.25");  
})

tl.to([".preloader-header a", ".preloader-copy p"], {
    autoAlpha: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.2
}, "-=5.5");

tl.to(
    ".preloader-images",{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "power3.inOut",
    },
    "-=1.5"
);

tl.to(
    ".preloader", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "power3.inOut",
    },
    "-=0.5"
);

tl.to(
    ".preloader-header", {
        autoAlpha: 0,
        duration: 1.5,
        ease: "power3.inOut"
    },
    "<"
);