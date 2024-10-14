import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import GameTile from './GameTile';
import {
	useDeleteGameMutation,
	useFetchAllGamesQuery,
} from '../store/apiSlice';
import { UserContext } from './Main';
import SkeletonGameTile from './SkeletonGameTile';
import LoadingModal from './LoadingModal';
import Monicon from '@monicon/native';

const Dashboard = ({ showNewGame, setShowNewGame }) => {
	const [expandedTile, setExpandedTile] = useState(null);
	const [sortAscending, setSortAscending] = useState(false);
	const user = useContext(UserContext);
	const [openGames, setOpenGames] = useState([])
	const [completedGames, setCompletedGames] = useState([])
	const {
		data: games,
		error,
		isLoading: gamesLoading,
	} = useFetchAllGamesQuery(user.uid);
	const [
		deleteGame, // This is the mutation trigger
		{ isLoading: deleteUpdating }, // This is the destructured mutation result
	] = useDeleteGameMutation();

	useEffect(() => {
		if (games) {
			setOpenGames(games.filter(game => !game.completed))
			setCompletedGames(games.filter(game => game.completed))
		}
	}, [games])

	return (
		<View style={{ height: '100%', paddingTop: 50, paddingHorizontal:10 }}>
			{gamesLoading 
				? <>
					<View style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 8,
					}}>
						<View style={{backgroundColor:'lightgray',height:45,width:'50%'}}></View>
						<SkeletonGameTile index={1} />
						<SkeletonGameTile index={2} />
						<SkeletonGameTile index={3} />
						<SkeletonGameTile index={4} />
					</View>
				</>
				:<> 
					{ openGames.length
						? <View style={{display:'flex',flexDirection:'column',gap:8}}>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}
							>
								<View style={{display:'flex',justifyContent:'center'}}>
									<Text style={{ fontSize: 18}}>Open Games</Text>
								</View>
								<Pressable
									style={{
										fontSize: 18,
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}
									onPress={() => setSortAscending(!sortAscending)}
								>
									<Monicon
										name="flowbite:sort-outline"
										size={25}
									/>
									<Text>{sortAscending ? 'Oldest' : 'Newest'}</Text>
								</Pressable>
							</View>
							<View
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: 8,
								}}
							>
								{openGames
									.sort((a, b) => {
										if (sortAscending) {
											return a.id - b.id;
										}
										return b.id - a.id;
									})
									.map((game, index) => {
										return (
											<GameTile
												key={game.id.toString()}
												game={game}
												index={index}
												expandedTile={expandedTile}
												setExpandedTile={setExpandedTile}
												deleteGame={deleteGame}
											/>
										);
									})
								}
							</View>
						</View>
						: <Text>You don't have any games in progress</Text>
					}
					{completedGames.length
						? <View style={{display:'flex',flexDirection:'column',gap:8}}>
								<View style={{display:'flex',justifyContent:'center'}}>
									<Text style={{ fontSize: 18}}>Completed Games</Text>
								</View>							
								<View
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: 8,
								}}
								>
								{
									completedGames.map((game, index) => {
										return (
											<GameTile
											key={game.id.toString()}
											game={game}
											index={index}
											expandedTile={expandedTile}
											setExpandedTile={setExpandedTile}
											/>
										);
									})
								}
							</View>
						</View>
						: null
					}
				</>
			}
		</View>
	);
};

export default Dashboard;
