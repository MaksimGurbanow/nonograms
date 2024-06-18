import { Timer } from './timer/Timer';

export const Header = (name) => {
	return `        
    <div class="nonograms__header">
      <h1 class="nonograms__title">Nonograms</h1>
      <h3 class="nonograms__name">${name}</h3>
      ${Timer(0, 0, 0)}
    </div>
    `;
};
