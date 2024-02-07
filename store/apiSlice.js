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

export const firestoreApi = createApi({
	baseQuery: fakeBaseQuery(),
	tagTypes: ['Games'],
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
	}),
});

export const { useFetchAllGamesQuery, useAddNewGameMutation } = firestoreApi;
