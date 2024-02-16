import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './BottomNav';
import AuthPage from './AuthPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSignInUserMutation } from '../store/apiSlice';
import LoadingModal from './LoadingModal';
import LandingPage from './LandingPage';

export const UserContext = createContext();
const Main = () => {
	const auth = getAuth();
	const [signInUser, { isLoading, error }] = useSignInUserMutation();
	const [currentUser, setCurrentUser] = useState(null);
	const [showAuth, setShowAuth] = useState(false);

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

	return (
		<>
			{!currentUser && showAuth ? (
				<AuthPage signInUser={signInUser} />
			) : !currentUser ? (
				<LandingPage setShowAuth={setShowAuth} />
			) : isLoading ? (
				<LoadingModal />
			) : (
				<UserContext.Provider value={currentUser}>
					<NavigationContainer>
						<BottomNav setShowAuth={setShowAuth} />
					</NavigationContainer>
				</UserContext.Provider>
			)}
		</>
	);
};

export default Main;
