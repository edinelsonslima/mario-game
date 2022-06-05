const score = document.querySelector('.score');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const overlay = document.querySelector('.overlay');
const reset = document.querySelector('.reset');
const overlayScore = document.querySelector('.overlay-score');

let countScore = 0;

window.addEventListener('keypress', () => {
  pipe.classList.add('pipeRun');

  while (!mario.classList.contains('dead')) {
    countScore++;
    score.innerHTML = `SCORE ${countScore}`;
  }

  const timerVerifyDead = setInterval(() => {
    handleLogicForGameOver(timerVerifyDead);
  }, 10);
});

const handleLogicForGameOver = (timer1) => {
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

    return clearInterval(timer1);
  }
};

const handleResetGame = () => {
  window.location.reload();

  const timer = setInterval(() => {
    handleLogicForGameOver(timer);
  }, 10);
};

reset.addEventListener('click', () => {
  handleResetGame();
});

window.addEventListener('keypress', () => {
  mario.classList.add('jump');
  setTimeout(() => mario.classList.remove('jump'), 500);

  //handle mario change score
  handleChangeScore();

  //handle mario reset game
  if (overlay.style.display === 'flex') {
    handleResetGame();
  }
});
