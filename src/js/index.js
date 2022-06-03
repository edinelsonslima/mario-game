const score = document.querySelector('.score');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const overlay = document.querySelector('.overlay');
const reset = document.querySelector('.reset');
const overlayScore = document.querySelector('.overlay-score');

let countScore = 0;

const timerReset = setInterval(() => {
  handleLogicForGameOver(timerReset);
}, 10);

const handleChangeScore = () => {
  setTimeout(() => {
    if (!mario.classList.contains('dead')) {
      countScore++;
      score.innerHTML = `SCORE ${countScore}`;
    }
  }, 900);
};

const handleLogicForGameOver = (timerClear) => {
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

    overlayScore.innerHTML = `SCORE ${countScore}`;
    overlay.style.display = 'flex';
    return clearInterval(timerClear);
  }
};

const handleResetGame = () => {
  mario.src = './src/assets/mario.gif';
  mario.style.marginLeft = '';
  mario.style.bottom = '0';
  mario.style.width = '150px';
  mario.classList.remove('dead');

  countScore = 0;

  overlay.style.display = 'none';
  score.innerHTML = `SCORE ${countScore}`;

  pipe.style.animation = 'pipe-animate 1.5s infinite linear';
  pipe.style.left = '';

  const timer = setInterval(() => {
    handleLogicForGameOver(timer);
  }, 10);
};

reset.addEventListener('click', () => {
  handleResetGame();
});

window.addEventListener('keydown', () => {
  //handle mario jump
  mario.classList.add('jump');
  setTimeout(() => mario.classList.remove('jump'), 500);

  //handle mario change score
  handleChangeScore();

  //handle mario reset game
  if (overlay.style.display === 'flex') {
    handleResetGame();
  }
});
