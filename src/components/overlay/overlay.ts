import { overlayContent } from './content';

const overlay = document.createElement('div');
overlay.appendChild(overlayContent);
overlay.classList.add('overlay');

export { overlay };