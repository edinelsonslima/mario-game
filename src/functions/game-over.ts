import { mario, pipe, overlay } from '../components';

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
    mario.style.bottom = '-200px';
    mario.style.width = '80px';
    mario.classList.add('dead');

    overlay.style.display = 'flex';
    return clearInterval(time);
  }
}, 10);
