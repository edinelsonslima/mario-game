const score = document.querySelector('.score');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const overlay = document.querySelector('.overlay');
const reset = document.querySelector('.reset');
const overlayScore = document.querySelector('.overlay-score');
const startGameInfo = document.querySelector('.start-game');

let countScore = 0;
let startGame = true;
let timerVerifyDead;
let timerScore;
let timerSpeed;

startGameInfo.innerHTML =
  'Pressione qualquer tecla para iniciar <br/> O tempo é contabilizado a cada segundo';

reset.addEventListener('click', () => window.location.reload());

window.addEventListener('keypress', () => {
  pipe.classList.add('pipeRun');
  mario.classList.add('jump');

  setTimeout(() => mario.classList.remove('jump'), 500);

  if (startGame) {
    let pipeSpeed = 1.5;
    startGameInfo.innerHTML = '';
    startGameInfo.style.background = 'transparent';
    timerScore = setInterval(() => {
      countScore++;
      score.innerHTML = `SCORE ${countScore}`;
    }, 1000);

    timerSpeed = setInterval(() => {
      pipeSpeed -= 0.1;
      if (pipeSpeed <= 0) {
        pipeSpeed = 0.6;
      }
      console.log({ pipeSpeed });
      pipe.style.animationDelay = `pipe-animate ${pipeSpeed}s infinite linear`;
    }, 1000 * 10);
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
