import { clouds, clouds2 } from './clouds';
import { mario } from './mario';
import { pipe } from './pipe';
import { score } from './score';

const container = document.createElement('div');

container.classList.add('container');

container.appendChild(clouds2);
container.appendChild(clouds);
container.appendChild(mario);
container.appendChild(score);
container.appendChild(pipe);

export { container };
