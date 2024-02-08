import { Iconify } from 'react-native-iconify';
import {
	mdiCardsClub,
	mdiCardsHeart,
	mdiCardsDiamond,
	mdiCardsSpade,
	mdiBomb,
	mdiBottleTonicSkull,
	mdiBoomerang,
	mdiChessBishop,
	mdiChessKing,
	mdiChessQueen,
	mdiChessPawn,
	mdiChessKnight,
	mdiChessRook,
	mdiGhost,
	mdiGoogleDownasaur,
	mdiOcarina,
	mdiOneUp,
	mdiPacMan,
	mdiPokeball,
	mdiSkull,
	mdiStarFace,
	mdiWizardHat,
	mdiSword,
	mdiTriforce,
	mdiSpaceInvaders,
} from '@mdi/js';

export const activities = [
	{
		name: 'Exercise',
		icon: null,
		habitType: 'build',
		goal: 30,
		unit: 'minutes',
	},
	{
		name: 'Alcohol',
		icon: null,
		habitType: 'quit',
		goal: 6,
		unit: 'drinks',
	},
	{
		name: 'Drink Water',
		icon: null,
		habitType: 'build',
		goal: 8,
		unit: 'glasses',
	},
];

export const games = [
	{
		id: 1,
		name: 'Nertz',
		players: [
			{ name: 'Dallin', score: 20 },
			{ name: 'Abbey', score: 100 },
			{ name: 'Chris', score: 0 },
			{ name: 'Annabelle', score: 80 },
		],
		created: 'Today',
		highestWins: true,
		completed: false,
	},
	{
		id: 2,
		name: 'Bananagrams',
		players: [
			{ name: 'Dallin', score: 1 },
			{ name: 'Abbey', score: 2 },
		],
		created: 'Yesterday',
		highestWins: true,
		completed: false,
	},
	{
		id: 3,
		name: 'Scrabble',
		players: [{ name: 'Abbey', score: 2 }],
		created: 'Yesterday',
		highestWins: true,
		completed: false,
	},
	{
		id: 4,
		name: 'Quixx',
		players: [
			{ name: 'Dallin', score: 0 },
			{ name: 'Abbey', score: 0 },
			{ name: 'Annabelle', score: 0 },
			{ name: 'Chris', score: 0 },
			{ name: 'Lucy', score: 0 },
			{ name: 'Nate', score: 0 },
		],
		created: 'Yesterday',
		highestWins: true,
		completed: false,
	},
	{
		id: 5,
		name: 'Quixx',
		players: [
			{ name: 'Dallin', score: 100 },
			{ name: 'Abbey', score: 80 },
			{ name: 'Annabelle', score: 40 },
			{ name: 'Chris', score: 50 },
			{ name: 'Lucy', score: 30 },
			{ name: 'Nate', score: 0 },
		],
		created: 'Yesterday',
		highestWins: true,
		completed: true,
	},
];

export const colors = [
	'6, 214, 160',
	'239, 71, 111',
	'27, 154, 170',
	'255, 196, 61',
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

export const playerIcons = [
	<Iconify
		size={35}
		icon="game-icons:angler-fish"
	/>,
	<Iconify
		size={35}
		icon="game-icons:alien-stare"
	/>,
	<Iconify
		size={35}
		icon="game-icons:alien-stare"
	/>,
	<Iconify
		size={35}
		icon="game-icons:ammonite"
	/>,
	<Iconify
		size={35}
		icon="game-icons:baby-face"
	/>,
	<Iconify
		size={35}
		icon="game-icons:bandit"
	/>,
	<Iconify
		size={35}
		icon="game-icons:bastet"
	/>,
	<Iconify
		size={35}
		icon="game-icons:bird-twitter"
	/>,
	<Iconify
		size={35}
		icon="game-icons:bat-mask"
	/>,
	<Iconify
		size={35}
		icon="game-icons:boar"
	/>,
	<Iconify
		size={35}
		icon="game-icons:buffalo-head"
	/>,
	<Iconify
		size={35}
		icon="game-icons:bear-head"
	/>,
	<Iconify
		size={35}
		icon="game-icons:chicken"
	/>,
	<Iconify
		size={35}
		icon="game-icons:brain"
	/>,
	<Iconify
		size={35}
		icon="game-icons:crowned-skull"
	/>,
	<Iconify
		size={35}
		icon="game-icons:caesar"
	/>,
	<Iconify
		size={35}
		icon="game-icons:double-dragon"
	/>,
	<Iconify
		size={35}
		icon="game-icons:cigale"
	/>,
	<Iconify
		size={35}
		icon="game-icons:dwarf-face"
	/>,
	<Iconify
		size={35}
		icon="game-icons:death-star"
	/>,
	<Iconify
		size={35}
		icon="game-icons:fluffy-trefoil"
	/>,
	<Iconify
		size={35}
		icon="game-icons:dutch-bike"
	/>,
	<Iconify
		size={35}
		icon="game-icons:fish-monster"
	/>,
	<Iconify
		size={35}
		icon="game-icons:electric"
	/>,
	<Iconify
		size={35}
		icon="game-icons:fishbone"
	/>,
	<Iconify
		size={35}
		icon="game-icons:flat-paw-print"
	/>,
	<Iconify
		size={35}
		icon="game-icons:ghost"
	/>,
	<Iconify
		size={35}
		icon="game-icons:fire-bomb"
	/>,
	<Iconify
		size={35}
		icon="game-icons:gluttony"
	/>,
	<Iconify
		size={35}
		icon="game-icons:fox"
	/>,
	<Iconify
		size={35}
		icon="game-icons:horse-head"
	/>,
	<Iconify
		size={35}
		icon="game-icons:giant-squid"
	/>,
	<Iconify
		size={35}
		icon="game-icons:mite"
	/>,
	<Iconify
		size={35}
		icon="game-icons:golf-flag"
	/>,
	<Iconify
		size={35}
		icon="game-icons:sea-turtle"
	/>,
	<Iconify
		size={35}
		icon="game-icons:jet-fighter"
	/>,
	<Iconify
		size={35}
		icon="game-icons:skateboard"
	/>,
	<Iconify
		size={35}
		icon="game-icons:sea-serpent"
	/>,
	<Iconify
		size={35}
		icon="game-icons:snowflake-2"
	/>,
	<Iconify
		size={35}
		icon="game-icons:seahorse"
	/>,
	<Iconify
		size={35}
		icon="game-icons:spider-mask"
	/>,
	<Iconify
		size={35}
		icon="game-icons:sitting-dog"
	/>,
	<Iconify
		size={35}
		icon="game-icons:squid"
	/>,
	<Iconify
		size={35}
		icon="game-icons:soccer-ball"
	/>,
	<Iconify
		size={35}
		icon="game-icons:thor-hammer"
	/>,
	<Iconify
		size={35}
		icon="game-icons:spiked-dragon-head"
	/>,
	<Iconify
		size={35}
		icon="game-icons:unicorn"
	/>,
	<Iconify
		size={35}
		icon="game-icons:t-rex-skull"
	/>,
	<Iconify
		size={35}
		icon="game-icons:wine-glass"
	/>,
	<Iconify
		size={35}
		icon="game-icons:three-pointed-shuriken"
	/>,
	<Iconify
		size={35}
		icon="game-icons:wolf-howl"
	/>,
];

export const colorCalc = (index) => {
	if (index + 1 > 4) {
		return colorCalc(index - 4);
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
