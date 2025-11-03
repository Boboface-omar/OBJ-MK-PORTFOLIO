CustomEase.create("hop", "0.9, 0, 0.1, 1");

gsap.set([".preloader-header a", ".preloader-copy p"], { autoAlpha: 0, y: 20 });

const preloaderImages = gsap.utils.toArray(".preloader-images .img");
const preloaderImagesInner = gsap.utils.toArray(".preloader-images img");

const tl = gsap.timeline({ delay: 0.25 });

tl.to(".progress-bar", {
  scaleX: 1,
  duration: 5,
  ease: "power3.inOut",
})
  .set(".progress-bar", { transformOrigin: "right" })
  .to(".progress-bar", {
    scaleX: 0,
    duration: 1,
    ease: "power3.in",
  });

preloaderImages.forEach((preloaderImg, index) => {
  tl.to(
    preloaderImg,
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.8,
      delay: index * 0.75,
    },
    "-=5"
  );
});

preloaderImagesInner.forEach((preloaderImagesInner, index) => {
  tl.to(
    preloaderImagesInner,
    {
      scale: 1.1,
      duration: 2.4,
      ease: "power3.inOut",
      delay: index * 0.75,
    },
    "-=5.25"
  );
});

tl.to(
  [".preloader-header a", ".preloader-copy p"],
  {
    autoAlpha: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.2,
  },
  "-=5.5"
);

tl.to(
  ".preloader-images",
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    duration: 1.5,
    ease: "power3.inOut",
  },
  "-=1.5"
);

tl.to(
  ".preloader",
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    duration: 2,
    ease: "power3.inOut",
  },
  "-=0.5"
);

tl.to(
  ".preloader-header",
  {
    autoAlpha: 0,
    duration: 1.5,
    ease: "power3.inOut",
  },
  "<"
);

tl.from(
  ".main-nav",
  {
    y: -100,
    autoAlpha: 0,
    duration: 1,
    ease: "power3.out",
  },
  "-=0.5"
);

const container = document.querySelector(".stacks-container");
const cards = gsap.utils.toArray(".stack-item");

let hoverTimeline;

// (bounce par défaut)
cards.forEach((card, i) => {
  const delay = i * 0.1; // petit décalage pour que le bounce soit ondulé
  gsap.to(card, {
    y: "+=10",
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "bounce.inOut",
    delay: delay,
  });
});

// Animation d’ouverture (au hover du container)
container.addEventListener("mouseenter", () => {
  hoverTimeline = gsap.timeline({
    defaults: { duration: 0.6, ease: "power3.out" },
  });

  const centerIndex = Math.floor(cards.length / 2);
  const spacing = 120; // espace entre cartes

  cards.forEach((card, i) => {
    const offset = (i - centerIndex) * spacing;
    hoverTimeline.to(
      card,
      {
        x: offset,
        y: 0,
        rotation: 0,
        zIndex: 20 - Math.abs(centerIndex - i),
      },
      0
    );
  });
});

// Revenir à la pile initiale
container.addEventListener("mouseleave", () => {
  hoverTimeline.reverse();
});

// Effet quand on survole une carte spécifique
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.15,
      y: -40,
      zIndex: 50,
      duration: 0.4,
      ease: "power3.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.inOut",
    });
  });
});
