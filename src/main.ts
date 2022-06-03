import './style.css';
import './functions';

import { overlay, container } from './components';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.appendChild(overlay);
app.appendChild(container);
