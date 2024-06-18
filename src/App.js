import { Content } from './components/Content';
import { Controlers } from './components/Controlers';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { WinnerModal } from './components/winnerModal/WinnerModal';

export const App = (templates, name, isWin, spentTime) => {
	return `<div id="nonograms" class="nonograms">
      ${isWin ? WinnerModal(spentTime) : ''}
      ${NavBar(templates)}
      ${Header(name)}
      ${Content(templates[name])}
      ${Controlers()}
    </div>
    `;
};
