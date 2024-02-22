import { View, Text } from 'react-native';
import React from 'react';

const PlayerSelectModal = () => {
	return (
		<View
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute',
				height: 100,
				width: 100,
				zIndex: 999,
			}}
		>
			<Text>PlayerSelectModal</Text>
		</View>
	);
};

export default PlayerSelectModal;
