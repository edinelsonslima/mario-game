import { mario, score } from '../components';
let countScore = 0;

const handleChangeScore = (): void => {
  setTimeout(() => {
    if (!mario.classList.contains('dead')) {
      countScore++;
      score.innerHTML = `SCORE ${countScore}`;
    }
  }, 900);
};

export { handleChangeScore };
