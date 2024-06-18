export const WinTable = (wins) => {
	let tableRows = '';
	wins.forEach((win, index) => {
		tableRows += `
            <tr>
                <td>${index + 1}</td>
                <td>${win.name}</td>
                <td>${win.time}</td>
                <td>${win.level}</td>
            </tr>
        `;
	});

	return `
        <div class='nonograms__wins'>
            <table class='nonograms__table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>
    `;
};
