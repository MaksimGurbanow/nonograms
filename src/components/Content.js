import { Board } from './board/Board';

export const Content = (template) => {
	return `      
	<div class="nonograms__content">
      ${Board(template)}
    </div>
	`;
};
