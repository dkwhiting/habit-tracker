import React, { createContext, useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './BottomNav';
import AuthPage from './AuthPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const UserContext = createContext();
const Main = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				setCurrentUser({ uid: user.uid, displayName: user.displayName });
				console.log(user);
			} else {
				setCurrentUser(null);
			}
		});
	}, []);

	return (
		<>
			{!currentUser ? (
				<AuthPage />
			) : (
				<UserContext.Provider value={currentUser}>
					<NavigationContainer>
						<BottomNav />
					</NavigationContainer>
				</UserContext.Provider>
			)}
		</>
	);
};

export default Main;
