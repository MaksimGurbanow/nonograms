export const Controlers = () => {
	return `      
	<div class="nonograms__controlers">
		<button class="nonograms__reset button">
			Reset game
		</button>
		<button class="nonograms__save button">
			Save
		</button>
		<button class="nonograms__last button">
			Play last game
		</button>
		<button class="nonograms__random button">
			Random Game
		</button>
		<button class="nonograms__theme button"
			onclick="document.body.classList
			.toggle('dark')"
		>
			Change Theme
		</button>
		<button class="nonograms__solution button">
			Solution
		</button>
		<button class="nonograms__toggle-sound button">
			On/Off &#xf001;
		</button>
		<button class="nonograms__story button">
			Previous Games
		</button>
  	</div>
	`;
};
