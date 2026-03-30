const faders = document.querySelectorAll('.fade');

const appearOnScroll = () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);
