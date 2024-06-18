export const WinnerModal = (time) => {
	return `
        <div class='nonograms__winner-modal'>
        <div class="nonograms__winner-content">
        Great! You have solved the nonogram in ${time} seconds!
        <button class='button'>Close</button>
        </div>
        </div>
    `;
};
