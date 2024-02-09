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
} from 'firebase/firestore';
import { db } from '../firebase';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
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
		registerUser: builder.mutation({
			async queryFn({ email, password }) {
				createUserWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						// Signed up
						const user = userCredential.user;
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						// ..
					});
				return { data: null };
			},
			invalidatesTags: ['User', 'Games'],
		}),
		signInUser: builder.mutation({
			async queryFn({ email, password }) {
				let user;
				console.log(email, password);
				signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						console.log(
							'Signed in successfully with user: ',
							userCredential.user
						);
						user = userCredential.user;
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
					});
				return { data: null };
			},
			invalidatesTags: ['User', 'Games'],
		}),
	}),
});

export const {
	useFetchAllGamesQuery,
	useAddNewGameMutation,
	useSignInUserMutation,
	useRegisterUserMutation,
} = firestoreApi;
