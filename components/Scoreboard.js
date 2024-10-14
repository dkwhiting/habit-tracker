import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import ScoreCell from './ScoreCell';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import usePlayerTotalScore from '../hooks/usePlayerTotalScore';
import useSortPlayersByScore from '../hooks/useSortPlayersByScore';
import { useInitializeNewRoundMutation } from '../store/apiSlice';

const Scoreboard = ({ game }) => {
	const [leftColumnWidth, setLeftColumnWidth] = useState(0);
	const [rightColumnWidth, setRightColumnWidth] = useState(0);
	const [scrollViewWidth, setScrollViewWidth] = useState(0)
	const scrollViewRef = useRef(null);
	const screenWidth = Dimensions.get('window').width;
	const sortedPlayers = useSortPlayersByScore(game)
	const [initializeNewRound, {isLoading, isError, error}] = useInitializeNewRoundMutation();

	const handleEndRound = async () => {
		try {
			await initializeNewRound(game)
		} catch (error) {
			console.error(error)
		}
	}

	const calculateScrollOffsets = (event) => {
		const { width } = event.nativeEvent.layout;
		const columnWidth = width / Object.keys(game.scores).length
		const offsets = []
		Object.keys(game.scores).forEach((round, i)=>{ 
			offsets.push(columnWidth * (i + 1))
		})
	} 

	const handleLeftColumnLayout = (event) => {
		const { width } = event.nativeEvent.layout;
		setLeftColumnWidth(width);
	  };
	
	  const handleRightColumnLayout = (event) => {
		const { width } = event.nativeEvent.layout;
		setRightColumnWidth(width);
	  };

	  useEffect(() => {
		if (scrollViewRef.current && scrollViewWidth > 0) {
		  scrollViewRef.current.scrollTo({
			x: scrollViewWidth - screenWidth, // Scroll to the end
			animated: false,
		  });
		}
	  }, [scrollViewWidth]);

	return (
		<View style={{display:'flex', flexDirection: 'column', gap:4, height:'100%'}}>
			<View style={styles.scoresContainer}>
				<View style={styles.playersColumn} onLayout={handleLeftColumnLayout}>
					<Text style={styles.headerCell}>Players</Text>
					{
					Object.entries(sortedPlayers) 
						? Object.entries(sortedPlayers).map(([key, player], i) => <Text key={i} style={i % 2 === 0 ? styles.singleCellEven : styles.singleCellOdd}>{player.name}</Text>)
						: null
					}
				</View>
				<ScrollView 
					ref={scrollViewRef}
					horizontal 
					overScrollMode={false}
					bounces={false}
					showsHorizontalScrollIndicator={false}
					onContentSizeChange={(width, height) => setScrollViewWidth(width)}
					contentContainerStyle={{ 
						paddingLeft: leftColumnWidth,
						paddingRight: rightColumnWidth,
						flexGrow: 1
					}}
				>
					<View style={styles.roundsContainer} onLayout={calculateScrollOffsets}>
						{Object.entries(game.scores).map(([roundKey, round], i) => {
							return (
								<View key={i} style={[styles.roundsColumn, {flex: 1, flexWrap:'nowrap'}]}>
									<Text numberOfLines={1} style={[styles.headerCell, {textAlign: 'center', flexWrap:'nowrap'}]}>Round {parseInt(i) + 1}</Text>
									{Object.entries(sortedPlayers).map(([playerKey, player], i) => {
										return (
											<ScoreCell key={i} game={game} roundKey={roundKey} playerKey={playerKey} style={[i % 2 === 0 ? styles.singleCellEven : styles.singleCellOdd, {textAlign: 'right'}]}/>
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
						Object.entries(sortedPlayers) 
							? Object.entries(sortedPlayers).map(([playerKey, player], i) => {
								return (
									<Text key={i} style={[i % 2 === 0 ? styles.singleCellEven : styles.singleCellOdd, {fontWeight:'bold', textAlign:'center'}]}>
										{usePlayerTotalScore(game.scores, playerKey)}
									</Text>
								)
							})
							: null
					}
				</View>
			</View>
			<TouchableOpacity
				style={styles.endRound}
				onPress={handleEndRound}
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
