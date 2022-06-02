import { mario } from '../components';
import { handleChangeScore } from './change-score';

window.addEventListener('keydown', () => {
  mario.classList.add('jump');
  setTimeout(() => mario.classList.remove('jump'), 500);

  handleChangeScore();
});
