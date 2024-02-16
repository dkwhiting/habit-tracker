import { View, Text, TextInput, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Switch } from 'react-native-elements';
import { addGame } from '../store/gameSlice';
import PlayerSelectTile from './PlayerSelectTile';
import { colorCalc, colors, icons, playerIcons } from '../data';
import { Iconify } from 'react-native-iconify';
import { useAddNewGameMutation } from '../store/apiSlice';

const NewGame = () => {
	const [name, setName] = useState('');
	const [players, setPlayers] = useState([
		{
			name: 'Dallin',
			color: colors[0],
			score: 0,
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

	const handleSubmit = async () => {
		try {
			if (!name) {
				setError('Name can not be left blank');
			} else if (players.length < 1) {
				setError('You must add at least one player');
			} else {
				const date = new Date();
				const body = {
					name,
					players,
					highestWins,
					created: date.toISOString().slice(0, 10).replace(/-/g, ''),
					completed: false,
				};
				await addGame({
					userId: 'WhmxUY9EbUOzApjcpladJlaPOGW2',
					gameId: Date.now().toString(),
					body,
				});
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleAddPlayer = () => {
		setPlayers([
			...players,
			{
				name: newPlayer,
				color: colors[colorCalc(players.length)],
				icon: icons[Math.floor(Math.random() * icons.length - 1)],
				score: '0',
			},
		]);
		setNewPlayer('');
	};

	return (
		<View
			style={{
				height: '100%',
				display: 'flex',
				paddingRight: 10,
				paddingLeft: 10,
				paddingTop: 70,
			}}
		>
			<ScrollView
				style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
				contentContainerStyle={{ display: 'flex', flexGrow: 1 }}
			>
				{error ? <Text>{error}</Text> : null}
				<TextInput
					style={{
						fontSize: 30,
						padding: 10,
						alignSelf: 'center',
						backgroundColor: 'white',
						borderRadius: 20,
					}}
					value={name}
					type="string"
					placeholder="Enter a name for your game"
					onChangeText={setName}
					inputGoal="text"
				/>

				<View style={{ flex: 1, paddingTop: 15 }}>
					<Text
						style={{
							fontSize: 22,
							padding: 5,
							paddingBottom: 15,
						}}
					>
						Players
					</Text>
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
							enablesReturnKeyAutomatically={true}
							onSubmitEditing={() => handleAddPlayer()}
							blurOnSubmit={false}
						/>
					</View>
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
			</ScrollView>
		</View>
	);
};

export default NewGame;
