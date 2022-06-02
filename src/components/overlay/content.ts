import { overlayFooter } from './footer';
import { overlayTitle } from './title';

const overlayContent = document.createElement('div');
overlayContent.classList.add('overlay-content');
overlayContent.appendChild(overlayTitle);
overlayContent.appendChild(overlayFooter);

export { overlayContent };