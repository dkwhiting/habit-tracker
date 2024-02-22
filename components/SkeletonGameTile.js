import { View, StyleSheet } from 'react-native';
import { colorCalc, colors } from '../data';

const SkeletonGameTile = ({ index }) => {
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
