import { View, Text, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { colorCalc, colors } from '../data';
import { Button, Icon } from 'react-native-elements';
import GameTileLeaders from './GameTileLeaders';
import { dateToString } from '../utils';

const SkeletonGameTile = ({ index }) => {
	const expandAnim = useRef(new Animated.Value(50)).current;
	const fadeAnim = useRef(new Animated.Value(0)).current;

	const fadeOut = () => {
		// Will change fadeAnim value to 0 in 3 seconds
		Animated.timing(expandAnim, {
			toValue: 50,
			duration: 300,
			useNativeDriver: false,
		}).start();

		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 200,
			useNativeDriver: false,
		}).start();
	};

	return (
		<View
			style={{
				backgroundColor: `rgb(${colors[colorCalc(index)]})`,
				borderRadius: 10,
				overflow: 'hidden',
			}}
		>
			<View style={{ height: 50 }}>
				<View
					style={{
						backgroundColor: 'rgba(255, 255, 255, 0.075)',
						width: 500,
						height: 500,
						transform: 'rotate(135deg)',
						zIndex: -999,
						position: 'absolute',
						left: -350,
						top: -300,
					}}
				/>
				<View
					style={{
						backgroundColor: 'rgba(255, 255, 255, 0.075)',
						width: 500,
						height: 500,
						transform: 'rotate(135deg)',
						zIndex: -999,
						position: 'absolute',
						right: -375,
						bottom: -400,
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	colorContainer: {
		marginTop: 50,
	},
	activityTile: {
		margin: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '95%',
	},
});

export default SkeletonGameTile;
