import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import ScoreCell from './ScoreCell';

const Scoreboard = ({ game }) => {
	const [rounds, setRounds] = useState([]);
	const [orderedPlayers, setOrderedPlayers] = useState()
	const [leftColumnWidth, setLeftColumnWidth] = useState(0);
	const [rightColumnWidth, setRightColumnWidth] = useState(0);
	const scrollViewRef = useRef(null);
	const ScreenWidth = Dimensions.get('window').width;

	const handleLeftColumnLayout = (event) => {
		const { width } = event.nativeEvent.layout;
		setLeftColumnWidth(width);
	  };
	
	  const handleRightColumnLayout = (event) => {
		const { width } = event.nativeEvent.layout;
		setRightColumnWidth(width);
	  };

	useEffect(() => {
	if (scrollViewRef.current) {
		scrollViewRef.current.scrollToEnd({ animated: false });  // You can set animated to true if you want it to scroll smoothly
	}
	}, [rounds]);

	const sortPlayers = () => {
		const sortedPlayers = [...game.players].sort((a, b) => {
			const totalScoreA = a.score.reduce((acc, score) => acc + score, 0);
			const totalScoreB = b.score.reduce((acc, score) => acc + score, 0);
			return totalScoreB - totalScoreA;
		})
		return sortedPlayers
	}

	useEffect(() => {
		const highest = [...game.players].sort(
			(a, b) => b.score.length - a.score.length
		)[0].score;
		setRounds(highest);
		setOrderedPlayers(sortPlayers())
	}, [game]);

	return (
	<View style={{display:'flex', flexDirection: 'column', gap:4, height:'100%'}}>
		<View style={styles.scoresContainer}>
			<View style={styles.playersColumn} onLayout={handleLeftColumnLayout}>
				<Text style={styles.headerCell}>Players</Text>
				{
				orderedPlayers 
					? orderedPlayers.map((player, i) => <Text key={i} style={i % 2 === 0 ? styles.singleCellEven : styles.singleCellOdd}>{player.name}</Text>)
					: null
				}
			</View>
			<ScrollView 
				ref={scrollViewRef}
				horizontal 
				overScrollMode={false}
				bounces={false}
				contentContainerStyle={{ 
					paddingLeft: leftColumnWidth,
					paddingRight: rightColumnWidth,
					flexGrow: 1
				}}
			>
				<View style={styles.roundsContainer}>
					{[...rounds].reverse().map((round, i) => {
						return (
							<View key={i} style={[styles.roundsColumn, {flex: 1, flexWrap:'nowrap'}]}>
								<Text numberOfLines={1} style={[styles.headerCell, {textAlign: 'center', flexWrap:'nowrap'}]}>Round {parseInt(i) + 1}</Text>
								{orderedPlayers.map((player, i) => {
									return (
										<ScoreCell round={round} player={player} i={i} style={[i % 2 === 0 ? styles.singleCellEven : styles.singleCellOdd, {textAlign: 'right'}]}/>
									)
								})}
							</View>
						)
					})}
				</View>
			</ScrollView>
			<View style={styles.totalsColumn} onLayout={handleRightColumnLayout}>
				<Text style={[styles.headerCell, {textAlign:'center'}]}>Total</Text>
				{
					orderedPlayers 
						? orderedPlayers.map((player, i) => {
							return (
								<Text key={i} style={[i % 2 === 0 ? styles.singleCellEven : styles.singleCellOdd, {fontWeight:'bold', textAlign:'center'}]}>
									{player.score.reduce((a,b)=>{
										return a + b
									},0)}
								</Text>
							)
						})
						: null
				}
			</View>
		</View>
		<TouchableOpacity
			style={styles.endRound}
			onPress={()=>{}}
		>
			<Text style={{color:'white', textAlign:'center', fontSize:20, fontWeight:'bold'}}>End Round</Text>
		</TouchableOpacity>
	</View>
	)
}

const styles = StyleSheet.create({
	scoresContainer: {
		position:'relative',
		display: 'flex',
		flexDirection: 'row',
	},
	roundsContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexGrow: 1,
	},
	playersColumn: {
		zIndex:2,
		left:0,
		position:'absolute',
		display: 'flex',
		flexDirection: 'column',
		borderRightColor:'white',
		borderRightWidth:2
	},
	roundsColumn: {
		minWidth: 120,
		display: 'flex',
		flexDirection: 'column',
	},
	totalsColumn: {
		zIndex:2,
		right:0,
		position:'absolute',
		display: 'flex',
		flexDirection: 'column',
		borderLeftColor:'white',
		borderLeftWidth:2
	},
	headerCell: {
		padding: 8,
		fontSize: 20,
		backgroundColor: 'rgb(239, 71, 111)',
		fontWeight: 'bold',
		color: 'white'
	},
	singleCellOdd: {
		paddingHorizontal: 8,
		paddingVertical:24,
		fontSize: 20,
		backgroundColor: 'lightgray'
	},
	singleCellEven: {
		paddingHorizontal: 8,
		paddingVertical:24,
		fontSize: 20,
		backgroundColor: '#f2f2f2'
	},
	endRound: {
		backgroundColor: '#06D6A0',
		padding: 8,
		margin: 16,
		borderRadius: 10
	}
})

export default Scoreboard;
