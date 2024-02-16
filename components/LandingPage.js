import { View, Text, Pressable } from 'react-native';
import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LandingLogo from './LandingLogo';
import { Button } from 'react-native-elements';

SplashScreen.preventAutoHideAsync();

const LandingPage = ({ setShowAuth }) => {
	const [fontsLoaded, fontError] = useFonts({
		'CarterOne-Regular': require('../assets/fonts/CarterOne-Regular.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<View
			style={{
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative',
				gap: 60,
			}}
			onLayout={onLayoutRootView}
		>
			<View
				style={{
					opacity: 0,
					position: 'absolute',
					width: '100%',
					height: '45%',
					backgroundColor: 'red',
					zIndex: 3,
					top: 190,
					left: 0,
				}}
			/>
			<Text
				style={{
					fontFamily: 'CarterOne-Regular',
					fontSize: 79,
					position: 'absolute',
					top: 315,
					zIndex: 2,
					color: 'white',
					textShadowColor: 'rgba(0, 0, 0, 1)',
					textShadowOffset: { width: 0, height: 1 },
					textShadowRadius: 4,
				}}
			>
				ScoreHQ
			</Text>
			<Pressable>
				<Text></Text>
			</Pressable>
			<LandingLogo />
			<Pressable
				onPress={() => setShowAuth(true)}
				style={{
					backgroundColor: 'rgb(6, 214, 160)',
					width: '80%',
					height: 50,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 100,
				}}
			>
				<Text
					style={{
						fontSize: 25,
						color: 'white',
						fontWeight: 300,
					}}
				>
					Let the games begin!
				</Text>
			</Pressable>
		</View>
	);
};

export default LandingPage;
