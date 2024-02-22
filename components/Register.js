import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRegisterUserMutation } from '../store/apiSlice';

const Register = ({ styles, form, setForm, setNewAccount }) => {
	const [registerUser, { error }] = useRegisterUserMutation();
	const createAlert = (error) => {
		Alert.alert(error.status, error.message, [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
		]);
	};

	const handleSubmit = async () => {
		const user = await registerUser({
			email: form.email,
			password: form.password,
		});
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Getting Started</Text>

					<Text style={styles.subtitle}>Create an account to continue</Text>
				</View>

				<KeyboardAwareScrollView>
					<View style={styles.form}>
						<View style={styles.input}>
							<Text style={styles.inputLabel}>Full name</Text>

							<TextInput
								onChangeText={(fullname) => setForm({ ...form, fullname })}
								placeholder="John Doe"
								placeholderTextColor="#6b7280"
								style={styles.inputControl}
								value={form.fullname}
							/>
						</View>

						<View style={styles.input}>
							<Text style={styles.inputLabel}>Email address</Text>

							<TextInput
								autoCapitalize="none"
								autoCorrect={false}
								keyboardType="email-address"
								onChangeText={(email) => setForm({ ...form, email })}
								placeholder="john@example.com"
								placeholderTextColor="#6b7280"
								style={styles.inputControl}
								value={form.email}
							/>
						</View>

						<View style={styles.input}>
							<Text style={styles.inputLabel}>Password</Text>

							<TextInput
								autoCorrect={false}
								onChangeText={(password) => setForm({ ...form, password })}
								placeholder="********"
								placeholderTextColor="#6b7280"
								style={styles.inputControl}
								secureTextEntry={true}
								value={form.password}
							/>
						</View>

						<View style={styles.input}>
							<Text style={styles.inputLabel}>Confirm Password</Text>

							<TextInput
								autoCorrect={false}
								onChangeText={(confirmPassword) =>
									setForm({ ...form, confirmPassword })
								}
								placeholder="********"
								placeholderTextColor="#6b7280"
								style={styles.inputControl}
								secureTextEntry={true}
								value={form.confirmPassword}
							/>
						</View>

						<View style={styles.formAction}>
							<TouchableOpacity
								onPress={() => {
									handleSubmit();
								}}
							>
								<View style={styles.btn}>
									<Text style={styles.btnText}>Sign up</Text>
								</View>
							</TouchableOpacity>
						</View>

						<TouchableOpacity
							onPress={() => {
								setNewAccount(false);
							}}
						>
							<Text style={styles.formFooter}>
								Already have an account?{' '}
								<Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
							</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAwareScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Register;
