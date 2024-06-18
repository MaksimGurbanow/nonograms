import { MenuBtn } from './menuBtn/MenuBtn';
import { MenuModal } from './menuModal/MenuModal';

export const NavBar = () => {
	return `
        <div class='nonograms__navbar'>
		${MenuBtn()}
		${MenuModal()}
        </div>
    `;
};
