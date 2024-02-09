import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import GameTile from './GameTile';
import { useSelector } from 'react-redux';
import { Iconify } from 'react-native-iconify';
import { useFetchAllGamesQuery } from '../store/apiSlice';
import { UserContext } from './Main';

const Dashboard = () => {
	const [expandedTile, setExpandedTile] = useState(null);
	const [sortAscending, setSortAscending] = useState(false);
	const user = useContext(UserContext);
	const { data, error, isLoading } = useFetchAllGamesQuery(user.uid);

	console.log(user);

	return (
		<ScrollView style={{ height: '100%' }}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text style={{ fontSize: 24, padding: 5 }}>Open Games</Text>
				<Pressable
					style={{
						fontSize: 18,
						padding: 5,
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
					onPress={() => setSortAscending(!sortAscending)}
				>
					<Iconify
						icon="flowbite:sort-outline"
						size={25}
					/>
					<Text>{sortAscending ? 'Ascending' : 'Descending'}</Text>
				</Pressable>
			</View>
			<View
				style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 5 }}
			>
				{data?.length > 0
					? data
							.filter((game) => !game.completed)
							.sort((a, b) => {
								if (sortAscending) {
									return a.id - b.id;
								}
								return b.id - a.id;
							})
							.map((game, index) => {
								return (
									<GameTile
										key={game.id}
										game={game}
										index={index}
										expandedTile={expandedTile}
										setExpandedTile={setExpandedTile}
									/>
								);
							})
					: null}
			</View>
			<Text style={{ fontSize: 24, padding: 5 }}>Completed Games</Text>
			<View
				style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 5 }}
			>
				{data?.length > 0
					? data
							.filter((game) => game?.completed)
							.map((game, index) => {
								return (
									<GameTile
										key={game.id}
										game={game}
										index={index}
										expandedTile={expandedTile}
										setExpandedTile={setExpandedTile}
									/>
								);
							})
					: null}
			</View>
		</ScrollView>
	);
};

export default Dashboard;
