import { View, Text, Pressable, Animated, Dimensions } from 'react-native';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import PlusCircle from '../assets/svgs/PlusCircle';

const NewGameButton = () => {
	const [showNewGame, setShowNewGame] = useState(true);
	const navigation = useNavigation();
	const windowHeight = Dimensions.get('window').height;
	const slideAnim = useRef(new Animated.Value(windowHeight - 90)).current;
	const [changeColorAnim, setChangeColorAnim] = useState(new Animated.Value(0));
	const rotateAnim = useRef(new Animated.Value(0)).current;
	const interpolation = changeColorAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['rgb(239, 71, 111)', 'rgb(6, 214, 160)'],
		useNativeDriver: true,
	});

	return (
		<Pressable
			style={{
				top: windowHeight - 115,
				transform: [{ translateX: Dimensions.get('window').width / 2 - 45 }],
				position: 'absolute',
				zIndex: 999,
			}}
			onPress={() => {
				navigation.navigate('NewGame');
			}}
		>
			<PlusCircle />
		</Pressable>
	);
};

export default NewGameButton;
