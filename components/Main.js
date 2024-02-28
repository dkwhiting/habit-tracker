import React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import BottomNav from './BottomNav';
import AuthPage from './AuthPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSignInUserMutation } from '../store/apiSlice';
import LoadingModal from './LoadingModal';
import LandingPage from './LandingPage';
import SetUserDetails from './SetUserDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewGame from './NewGame';
import NewGameButton from './NewGameButton';
import PlusCircle from '../assets/svgs/PlusCircle';
import { Pressable } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import LiveGame from './LiveGame';

export const UserContext = createContext();
const Stack = createNativeStackNavigator();

const Main = () => {
	const auth = getAuth();
	const [signInUser, { isLoading, error }] = useSignInUserMutation();
	const [currentUser, setCurrentUser] = useState(null);
	const [showAuth, setShowAuth] = useState(false);
	const [needsDisplayName, setNeedsDisplayName] = useState(true);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				setCurrentUser({ uid: user.uid, displayName: user.displayName });
			} else {
				setCurrentUser(null);
			}
		});
	}, []);

	useEffect(() => {
		console.log(currentUser);
	}, [currentUser]);

	return (
		<>
			{!currentUser && showAuth ? (
				<AuthPage signInUser={signInUser} />
			) : !currentUser ? (
				<LandingPage setShowAuth={setShowAuth} />
			) : isLoading ? (
				<LoadingModal />
			) : !currentUser.displayName ? (
				<SetUserDetails setNeedsDisplayName={setNeedsDisplayName} />
			) : (
				<UserContext.Provider value={currentUser}>
					<NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen
								name="BottomNav"
								component={BottomNav}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="NewGame"
								component={NewGame}
								options={({ navigation }) => ({
									presentation: 'modal',
									title: 'Create a new game',
									headerRight: () => (
										<Pressable onPress={() => navigation.pop()}>
											<Icon
												name="close-circle"
												type="material-community"
												size={40}
												color="red"
											/>
										</Pressable>
									),
								})}
							/>
							<Stack.Screen
								name="LiveGame"
								component={LiveGame}
								options={({ route }) => ({
									title: route.params.game.name,
									headerBackTitle: 'Back',
								})}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</UserContext.Provider>
			)}
		</>
	);
};

export default Main;
