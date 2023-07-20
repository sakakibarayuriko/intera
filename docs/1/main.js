const animation = () => {
  const tl = gsap.timeline();
  tl.to('.fv__bg',
  {
    transform: 'scale(1.5)',
    duration: 1.5,
    ease: 'expo.inOut',
    onComplete: () => {
      document.querySelectorAll('.fv__title span').forEach((el, index) => {
        gsap.fromTo(el,
        {
          top: 0,
        },
        {
          top: index % 2 ? Math.floor(Math.random() * 20) + 1 : -1 * Math.floor(Math.random() * 20) + 1,
          opacity: 1,
          duration: 0.12,
          delay: index >= 5 ? index * 0.12 + 0.4 : index * 0.12,
          ease: 'bounce.in',
        });
      });
    }
  })
  .to('.fv__copy',
  {
    opacity: 1,
    duration: 0.8,
    ease: 'expo.inOut',
    onComplete: () => {
      document.querySelector('.fv__bg').classList.add('fv__bg--animation');
    }
  },
  '<2.6');
}

animation();
