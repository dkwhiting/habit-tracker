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
import { useSignInUserMutation } from '../store/apiSlice';

const Login = ({ styles, form, setForm, setShowPage, signInUser }) => {
	// const [signInUser, { isLoading: isUpdating, error }] = useSignInUserMutation();
	const createAlert = (error) => {
		Alert.alert(error.status, error.message, [
			{
				text: 'Cancel',
				style: 'cancel',
			},
		]);
	};

	const handleSubmit = async () => {
		const user = await signInUser({
			email: form.email,
			password: form.password,
		});
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Welcome Back</Text>

					<Text style={styles.subtitle}>Sign in to continue</Text>
				</View>

				<KeyboardAwareScrollView>
					<View style={styles.form}>
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

						<View style={styles.formAction}>
							<TouchableOpacity
								onPress={() => {
									handleSubmit();
								}}
							>
								<View style={styles.btn}>
									<Text style={styles.btnText}>Sign in</Text>
								</View>
							</TouchableOpacity>
						</View>

						<TouchableOpacity
							onPress={() => {
								setShowPage('register');
							}}
						>
							<Text style={styles.formFooter}>
								New to ScoreHQ?{' '}
								<Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
							</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAwareScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Login;
