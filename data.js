export const colors = [
	'6, 214, 160',
	'239, 71, 111',
	'27, 154, 170',
	'255, 196, 61',
	'151, 97, 210',
	'255, 139, 61',
];

export const icons = [
	{ name: 'cards-club', type: 'material-community' },
	{ name: 'cards-heart', type: 'material-community' },
	{ name: 'cards-diamond', type: 'material-community' },
	{ name: 'cards-spade', type: 'material-community' },
	{ name: 'bomb', type: 'material-community' },
	{ name: 'bottle-tonic-skull', type: 'material-community' },
	{ name: 'boomerang', type: 'material-community' },
	{ name: 'chess-bishop', type: 'material-community' },
	{ name: 'chess-king', type: 'material-community' },
	{ name: 'chess-queen', type: 'material-community' },
	{ name: 'chess-bishop', type: 'material-community' },
	{ name: 'chess-rook', type: 'material-community' },
	{ name: 'chess-pawn', type: 'material-community' },
	{ name: 'ghost', type: 'material-community' },
	{ name: 'google-downasaur', type: 'material-community' },
	{ name: 'ocarina', type: 'material-community' },
	{ name: 'one-up', type: 'material-community' },
	{ name: 'pac-man', type: 'material-community' },
	{ name: 'pokeball', type: 'material-community' },
	{ name: 'skull', type: 'material-community' },
	{ name: 'star-face', type: 'material-community' },
	{ name: 'wizard-hat', type: 'material-community' },
	{ name: 'sword', type: 'material-community' },
	{ name: 'triforce', type: 'material-community' },
	{ name: 'space-invaders', type: 'material-community' },
];

export const colorCalc = (index) => {
	if (index + 1 > 6) {
		return colorCalc(index - 6);
	}
	return index;
};

export const sortGames = (games, sortType) => {
	let sortedGames;
	if (sortType === 'ascending') {
		sortedGames = games.sort((a, b) => a - b);
	} else if (sortType === 'descending') {
		sortedGames = games.sort((a, b) => b - a);
	}
};
