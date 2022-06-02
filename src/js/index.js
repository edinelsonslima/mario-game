const score = document.querySelector('.score');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const overlay = document.querySelector('.overlay');

let countScore = 0;

//handle mario jump
window.addEventListener('keydown', () => {
  mario.classList.add('jump');
  setTimeout(() => mario.classList.remove('jump'), 500);

  handleChangeScore();
});

//Handle game over
const time = setInterval(() => {
  const pipeLocalization = pipe.offsetLeft;
  const marioLocalization = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');
  if (
    pipeLocalization <= 120 &&
    pipeLocalization > 0 &&
    marioLocalization < 80
  ) {
    pipe.style.animation = '';
    pipe.style.left = `${pipeLocalization}px`;

    mario.src = './src/assets/game-over.png';
    mario.style.marginLeft = '50px';
    mario.style.bottom = `-200px`;
    mario.style.width = '80px';
    mario.classList.add('dead');

    overlay.style.display = 'flex';
    return clearInterval(time);
  }
}, 10);

const handleChangeScore = () => {
  setTimeout(() => {
    if (!mario.classList.contains('dead')) {
      countScore++;
      score.innerHTML = `SCORE ${countScore}`;
    }
  }, 900);
};
