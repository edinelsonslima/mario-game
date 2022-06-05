const score = document.querySelector('.score');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const overlay = document.querySelector('.overlay');
const reset = document.querySelector('.reset');
const overlayScore = document.querySelector('.overlay-score');

let countScore = 0;
let startGame = true;
let timerVerifyDead;
let timerScore;

window.addEventListener('keypress', () => {
  pipe.classList.add('pipeRun');

  if (startGame) {
    timerScore = setInterval(() => {
      countScore++;
      score.innerHTML = `SCORE ${countScore}`;
    }, 1000);
  }

  startGame = false;

  timerVerifyDead = setInterval(() => {
    handleLogicForGameOver();
  }, 10);
});

const handleLogicForGameOver = () => {
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

    clearInterval(timerScore);
    clearInterval(timerVerifyDead);
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

  //handle mario reset game
  if (overlay.style.display === 'flex') {
    handleResetGame();
  }
});
