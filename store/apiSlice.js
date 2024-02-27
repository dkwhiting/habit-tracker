// src/features/scores/scoresSlice.ts
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	arrayUnion,
	collection,
	doc,
	updateDoc,
	getDocs,
	setDoc,
	Timestamp,
	deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import {
	createUserWithEmailAndPassword,
	getAuth,
	sendEmailVerification,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
const auth = getAuth();

export const firestoreApi = createApi({
	baseQuery: fakeBaseQuery(),
	tagTypes: ['Games', 'User'],
	endpoints: (builder) => ({
		fetchAllGames: builder.query({
			async queryFn(userId) {
				try {
					const ref = collection(db, 'users', userId, 'games');
					const querySnapshot = await getDocs(ref);
					let games = [];
					querySnapshot?.forEach((doc) => {
						games.push({
							id: doc.id,
							...doc.data(),
						});
					});
					return { data: games };
				} catch (error) {
					console.error(error.message);
					return { error: error.message };
				}
			},
			providesTags: ['Games'],
		}),
		addNewGame: builder.mutation({
			async queryFn({ userId, gameId, body }) {
				try {
					await setDoc(doc(db, 'users', userId, 'games', gameId), body);
					return { data: null };
				} catch (error) {
					console.error(error.message);
					return { error: error.message };
				}
			},
			invalidatesTags: ['Games'],
		}),
		deleteGame: builder.mutation({
			async queryFn({ userId, gameId }) {
				try {
					await deleteDoc(doc(db, 'users', userId, 'games', gameId));
					return { data: null };
				} catch (error) {
					console.error(error.message);
					return { error: error.message };
				}
			},
			invalidatesTags: ['Games'],
		}),
		registerUser: builder.mutation({
			async queryFn({ email, password, displayName }) {
				let user;
				let errorCode;
				let errorMessage;
				createUserWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						// Signed up
						user = userCredential.user;
					})
					.catch((error) => {
						errorCode = error.code;
						errorMessage = error.message;
					});
				console.error(errorCode);
				console.error(errorMessage);
				return { data: { error: { errorCode, errorMessage } } };
			},
			invalidatesTags: ['User', 'Games'],
		}),
		signInUser: builder.mutation({
			async queryFn({ email, password }) {
				let user;
				signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						console.log('Signed in successfully with user');
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
					});
				return { data: null };
			},
			invalidatesTags: ['User', 'Games'],
		}),
		updateUser: builder.mutation({
			async queryFn({ email, password, displayName }) {
				let user;
				if (displayName) {
					updateProfile(auth.currentUser, {
						displayName: displayName,
					})
						.then(() => {
							// Profile updated!
							// ...
						})
						.catch((error) => {
							const errorCode = error.code;
							const errorMessage = error.message;
						});
				}
				sendEmailVerification(auth.currentUser)
					.then(() => {
						// Email verification sent!
						// ...
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						// ..
					});
				return { data: null };
			},
			invalidatesTags: ['User'],
		}),
	}),
});

export const {
	useFetchAllGamesQuery,
	useAddNewGameMutation,
	useDeleteGameMutation,
	useSignInUserMutation,
	useRegisterUserMutation,
	useUpdateUserMutation,
} = firestoreApi;
