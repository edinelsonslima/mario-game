import { overlayTextTitle } from './text-title';
import { overlayScore } from './score';

const overlayTitle = document.createElement('div');
overlayTitle.classList.add('overlay-title');
overlayTitle.appendChild(overlayTextTitle);
overlayTitle.appendChild(overlayScore);

export { overlayTitle };