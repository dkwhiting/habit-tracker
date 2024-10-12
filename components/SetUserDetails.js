import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useUpdateUserMutation } from '../store/apiSlice';

const SetUserDetails = ({ setNeedsDisplayName }) => {
	const [updateUser, { error }] = useUpdateUserMutation();
	const [form, setForm] = useState({
		displayName: '',
		icon: '',
	});

	const handleSubmit = () => {
		console.log(form)
		try {
			updateUser({ displayName: form.displayName });
			setNeedsDisplayName(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Lets update your details!</Text>
				</View>

				<KeyboardAwareScrollView>
					<View style={styles.form}>
						<View style={styles.input}>
							<Text style={styles.inputLabel}>Display name</Text>
							<Text style={styles.subtitle}>
								This is how other players will see you in game
							</Text>

							<TextInput
								onChangeText={(displayName) =>
									setForm({ ...form, displayName })
								}
								placeholder=""
								placeholderTextColor="#6b7280"
								style={styles.inputControl}
								value={form.displayName}
							/>
						</View>

						<View style={styles.formAction}>
							<TouchableOpacity
								onPress={() => {
									handleSubmit();
								}}
							>
								<View style={styles.btn}>
									<Text style={styles.btnText}>Continue</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									setNeedsDisplayName(false);
								}}
							>
								<View style={styles.btn}>
									<Text style={styles.btnText}>Skip</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAwareScrollView>
			</View>
		</SafeAreaView>
	);
};

export default SetUserDetails;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 24,
		paddingHorizontal: 0,
		flexGrow: 1,
		flexShrink: 1,
		flexBasis: 0,
	},
	header: {
		marginVertical: 24,
		paddingHorizontal: 24,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#1d1d1d',
		marginBottom: 6,
	},
	subtitle: {
		fontSize: 14,
		fontWeight: '500',
		color: '#929292',
	},
	/** Form */
	form: {
		paddingHorizontal: 24,
	},
	formAction: {
		marginVertical: 24,
	},
	formFooter: {
		fontSize: 15,
		fontWeight: '500',
		color: '#222',
		textAlign: 'center',
	},
	/** Input */
	input: {
		marginBottom: 16,
	},
	inputLabel: {
		fontSize: 17,
		fontWeight: '600',
		color: '#222',
		marginBottom: 8,
	},
	inputControl: {
		height: 44,
		backgroundColor: '#f1f5f9',
		paddingHorizontal: 16,
		borderRadius: 12,
		fontSize: 15,
		fontWeight: '500',
		color: '#222',
	},
	/** Button */
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderWidth: 1,
		backgroundColor: '#007aff',
		borderColor: '#007aff',
	},
	btnText: {
		fontSize: 17,
		lineHeight: 24,
		fontWeight: '600',
		color: '#fff',
	},
});
