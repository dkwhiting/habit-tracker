import {
	View,
	Text,
	TextInput,
	ScrollView,
	Dimensions,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import React, {
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Switch } from 'react-native-elements';
import { addGame } from '../store/gameSlice';
import PlayerSelectTile from './PlayerSelectTile';
import { colorCalc, colors, icons, playerIcons } from '../data';
import { useAddNewGameMutation } from '../store/apiSlice';
import { useKeyboard } from '../hooks/useKeyboard';
import LoadingModal from './LoadingModal';
import { Animated } from 'react-native';
import { UserContext } from './Main';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NewGame = ({ showNewGame, setShowNewGame, navigation }) => {
	const keyboardHeight = useKeyboard();
	const windowHeight = Dimensions.get('window').height;
	const [contentBottom, setContentBottom] = useState(0);
	const user = useContext(UserContext);
	const [name, setName] = useState('');
	const [players, setPlayers] = useState([
		{
			name: user.displayName,
			color: colors[0],
			score: [0],
			icon: { name: 'ghost', type: 'material-community' },
		},
	]);
	const [newPlayer, setNewPlayer] = useState('');
	const [highestWins, setHighestWins] = useState(true);
	const [error, setError] = useState('');
	const [
		addGame, // This is the mutation trigger
		{ isLoading: isUpdating }, // This is the destructured mutation result
	] = useAddNewGameMutation();

	//Handle modal animation
	const showModalAnim = useRef(new Animated.Value(windowHeight - 90)).current;

	const handleSubmit = async () => {
		try {
			if (!name) {
				setError('Name can not be left blank');
			} else if (players.length < 1) {
				setError('You must add at least one player');
			} else {
				const date = new Date();
				const gameId = Date.now().toString();
				const body = {
					name,
					players,
					highestWins,
					created: date.toISOString().slice(0, 10).replace(/-/g, ''),
					completed: false,
				};
				const newGame = await addGame({
					userId: user.uid,
					gameId: gameId,
					body,
				});
				navigation.pop();
				navigation.navigate('LiveGame', { game: newGame.data });
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleAddPlayer = () => {
		if (newPlayer.length > 0) {
			setPlayers([
				...players,
				{
					id: players.length - 1,
					name: newPlayer,
					color: colors[colorCalc(players.length)],
					icon: icons[Math.floor(Math.random() * icons.length - 1)],
					score: [0],
				},
			]);
			setNewPlayer('');
		}
	};

	return (
		<>
			{isUpdating ? <LoadingModal /> : null}
			<View style={{ flex: 1 }}>
				<TextInput
					style={{
						width: '100%',
						fontSize: 30,
						padding: 10,
						alignSelf: 'center',
						backgroundColor: 'white',
						borderRadius: 20,
					}}
					value={name}
					type="string"
					placeholder={!error ? 'Enter a name for your game' : error}
					placeholderTextColor={!error ? '#BABABA' : 'red'}
					onChangeText={setName}
					onFocus={() => setError('')}
					inputGoal="text"
					// autoFocus
				/>
				<View style={{ flex: 1, paddingTop: 15 }}>
					<ScrollView
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 5,
							padding: 5,
							flex: 0,
							flex: 1,
						}}
					>
						<Text
							style={{
								fontSize: 22,
								padding: 5,
								paddingBottom: 15,
							}}
						>
							Players
						</Text>
						{players.length > 0
							? players.map((player, index) => {
									return (
										<PlayerSelectTile
											player={player}
											key={index}
											players={players}
											setPlayers={setPlayers}
											index={index}
										/>
									);
							  })
							: null}
						<TextInput
							style={{
								fontSize: 18,
								padding: 13,
								backgroundColor: 'white',
								borderRadius: 10,
							}}
							value={newPlayer}
							type="string"
							placeholder="Player name"
							onChangeText={setNewPlayer}
							inputGoal="text"
							autoComplete="off"
							autoCorrect={false}
							enablesReturnKeyAutomatically={true}
							onSubmitEditing={() => handleAddPlayer()}
							blurOnSubmit={false}
						/>
					</ScrollView>
				</View>
				<View style={{ display: 'flex', flexDirection: 'column', padding: 5 }}>
					<View style={{ display: 'flex', flexDirection: 'row' }}>
						<Text style={{ fontSize: 16, padding: 5 }}>Highest score wins</Text>
						<Switch
							trackColor={{ false: '#BCBCBC', true: '#06d6a0 ' }}
							thumbColor={'#FFFFFF'}
							ios_backgroundColor="#DDDDDD"
							onValueChange={setHighestWins}
							value={highestWins}
						/>
					</View>
				</View>
				<Button
					title="Start Game"
					color="white"
					onPress={() => handleSubmit()}
					style={{
						width: '80%',
						alignSelf: 'center',
						borderRadius: 5,
						paddingBottom: 30,
					}}
				/>
			</View>
		</>
	);
};

export default NewGame;
