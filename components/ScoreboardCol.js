import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ScoreboardCol = ({ rounds, score, index }) => {
	return (
		<View
			style={[
				index == 0
					? styles.firstChild
					: index == rounds.length - 1
					? styles.lastChild
					: styles.middleChild,
				{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: 30,
					height: 30,
					borderTopWidth: 1,
					borderLeftWidth: 1,
					borderWidth: 1,
					borderColor: 'red',
				},
			]}
		>
			<Text>{score}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	firstChild: { backgroundColor: 'red' },
	lastChild: { backgroundColor: 'blue' },
	middleChild: { backgroundColor: 'green' },
});

export default ScoreboardCol;
