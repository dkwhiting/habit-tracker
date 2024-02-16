import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';

const Settings = ({ setShowAuth }) => {
	const handleSignOut = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				setShowAuth(false);
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<View>
			<Button
				title="Sign out"
				onPress={() => handleSignOut()}
			></Button>
		</View>
	);
};

export default Settings;
