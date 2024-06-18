import { Cell } from '../cell/Cell';

export const Field = (template) => {
	return `
        <div 
            class='nonograms__field'
            style='grid-template-columns: repeat(${template.length}, auto)'
        >
        ${template.map((row, x) => row.map((v, y) => 
		Cell(v, '' , x, y)).join('')).join('')}
        </div>
    `;
};
