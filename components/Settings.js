import React from 'react';
import { View, Button } from 'react-native';
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
				console.error(error);
			});
	};

	return (
		<View style={{ paddingTop: 70 }}>
			<Button
				title="Sign out"
				onPress={handleSignOut} // No need for arrow function
			/>
		</View>
	);
};

export default Settings;
