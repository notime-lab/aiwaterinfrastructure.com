// 滚动渐入
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// 数字动画
const counters = document.querySelectorAll('.metric span');

const runCounter = (el) => {
  let target = +el.getAttribute('data-target');
  let count = 0;

  let step = target / 50;

  let interval = setInterval(() => {
    count += step;
    if (count >= target) {
      el.innerText = target;
      clearInterval(interval);
    } else {
      el.innerText = Math.floor(count);
    }
  }, 30);
};

window.addEventListener('scroll', () => {
  counters.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50 && !el.classList.contains('done')) {
      runCounter(el);
      el.classList.add('done');
    }
  });
});
