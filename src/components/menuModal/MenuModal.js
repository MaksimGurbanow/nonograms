import { templates } from '../../utils/templates';
import { MatrixLevel } from '../matrixLevel/MatrixLevel';

export const MenuModal = () => {
	return `
        <div class='nonograms__modal-menu'>
            ${Object.entries(templates).map((v) => 
		MatrixLevel(v)).join('')}
        </div>
    `;
};
