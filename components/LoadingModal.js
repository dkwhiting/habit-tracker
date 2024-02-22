import { View, Text } from 'react-native';
import React from 'react';
import LoadingLogo from './LoadingLogo';

const LoadingModal = () => {
	return (
		<View
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute',
				height: '100%',
				width: '100%',
				zIndex: 999,
			}}
		>
			<View
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					height: '100%',
					width: '100%',
					backgroundColor: 'black',
					opacity: 0.15,
				}}
			></View>
			<View style={{ width: 60, height: 60 }}>
				<LoadingLogo />
			</View>
		</View>
	);
};

export default LoadingModal;
