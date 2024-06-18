import { Template } from '../template/Template';

export const MatrixLevel = (level) => {
	return `
        <div class='nonograms__level'>
            <h3>${level[0]}</h3>
            ${Object.keys(level[1]).map((templateName) => 
		Template(templateName, level[0])
	).join('')}
        </div>
    `;
};
