import { View, Text, TextInput, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Switch } from 'react-native-elements';
import { addGame } from '../store/gameSlice';
import PlayerSelectTile from './PlayerSelectTile';
import { colorCalc, colors, playerIcons } from '../data';
import { Iconify } from 'react-native-iconify';

const NewGame = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [players, setPlayers] = useState([
		{
			name: 'Dallin',
			color: colors[0],
			icon: (
				<Iconify
					icon="game-icons:chewed-skull"
					size={35}
				/>
			),
		},
	]);
	const [newPlayer, setNewPlayer] = useState('');
	const [highestWins, setHighestWins] = useState(true);
	const [error, setError] = useState('');

	const body = {
		name,
		players,
		highestWins,
		created: Date.now().toString().slice(0, 10).replace(/-/g, ''),
		completed: false,
	};

	const handleSubmit = () => {
		if (!name) {
			setError('Name can not be left blank');
			console.log(error);
		} else if (players.length < 1) {
			setError('You must add at least one player');
			console.log(error);
		} else {
			dispatch(addGame(body));
		}
	};

	const handleAddPlayer = () => {
		setPlayers([
			...players,
			{
				name: newPlayer,
				color: colors[colorCalc(players.length)],
				icon: playerIcons[Math.floor(Math.random() * playerIcons.length - 1)],
			},
		]);
		setNewPlayer('');
	};

	return (
		<ScrollView style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
			{error ? <Text>{error}</Text> : null}
			<TextInput
				style={{ fontSize: 24, padding: 5, alignSelf: 'center' }}
				value={name}
				type="string"
				placeholder="Enter a name for your game"
				onChangeText={setName}
				inputGoal="text"
			/>
			<View>
				<Text style={{ fontSize: 22, padding: 5, alignSelf: 'center' }}>
					Add Players!
				</Text>
				<TextInput
					style={{ fontSize: 18, padding: 5 }}
					value={newPlayer}
					type="string"
					placeholder="Player name"
					onChangeText={setNewPlayer}
					inputGoal="text"
					enablesReturnKeyAutomatically={true}
					onSubmitEditing={() => handleAddPlayer()}
				/>
				<View
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 5,
						padding: 5,
					}}
				>
					{players.length > 0
						? players.map((player, index) => {
								return (
									<PlayerSelectTile
										player={player}
										key={index}
									/>
								);
						  })
						: null}
				</View>
			</View>
			<View style={{ display: 'flex', flexDirection: 'row', padding: 5 }}>
				<Text style={{ fontSize: 16, padding: 5 }}>Highest score wins</Text>
				<Switch
					trackColor={{ false: '#BCBCBC', true: '#06d6a0 ' }}
					thumbColor={'#FFFFFF'}
					ios_backgroundColor="#DDDDDD"
					onValueChange={setHighestWins}
					value={highestWins}
				/>
			</View>
			<Button
				title="Start Game"
				color="white"
				onPress={() => handleSubmit()}
				style={{ width: '80%', alignSelf: 'center', borderRadius: 5 }}
			/>
		</ScrollView>
	);
};

export default NewGame;
