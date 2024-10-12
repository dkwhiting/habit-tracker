import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
	useRegisterUserMutation,
	useSignInUserMutation,
} from '../store/apiSlice';
import Register from './Register';
import Login from './Login';
import SetUserDetails from './SetUserDetails';

const AuthPage = ({ signInUser, setShowAuth }) => {
	const [errorMessage, setErrorMessage] = useState([]);
	const [showPage, setShowPage] = useState('login');
	const [form, setForm] = useState({
		displayName: '',
		email: 'jobin@faker.com',
		password: 'password',
		confirmPassword: '',
	});

	return showPage === 'register' ? (
		<Register
			styles={styles}
			form={form}
			setForm={setForm}
			setShowPage={setShowPage}
		/>
	) : showPage === 'login' ? (
		<Login
			styles={styles}
			form={form}
			setForm={setForm}
			setShowPage={setShowPage}
			signInUser={signInUser}
		/>
	) : showPage === 'setDetails' ? (
		<SetUserDetails
			styles={styles}
			setShowPage={setShowPage}
			signInUser={signInUser}
		/>
	) : null;
};

export default AuthPage;

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
