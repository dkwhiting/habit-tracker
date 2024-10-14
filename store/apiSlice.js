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
	getDoc,
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
	tagTypes: ['Games', 'User', 'currentGame'],
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
		fetchSingleGame: builder.query({
			async queryFn({ userId, gameId }) {
				try {
					// Reference the specific game document
					const ref = doc(db, 'users', userId, 'games', gameId);
					const docSnapshot = await getDoc(ref);
		
					// Check if the document exists
					if (!docSnapshot.exists()) {
						return { error: 'Game not found' };
					}
		
					// Return the game data
					return { data: docSnapshot.data() };
				} catch (error) {
					console.error(error.message);
					return { error: error.message };
				}
			},
			providesTags: ['currentGame'],
		}),
		addNewGame: builder.mutation({
			async queryFn({ ownerId, gameId, body }) {
			  try {
				// Get reference to the game document
				const docRef = doc(db, 'users', ownerId, 'games', gameId);
				
				// Use setDoc to create or update the document with { merge: true }
				await setDoc(docRef, body, { merge: true });
		  
				// Fetch the newly created or updated document
				const docSnap = await getDoc(docRef);
				let game;
		  
				if (docSnap.exists()) {
				  game = docSnap.data();
		  
				  // Optional: Ensure that game data is serializable if needed
				  game = {
					...game,
					// Ensure any non-serializable fields are excluded or transformed here
				  };
				} else {
				  console.error('No such document exists!');  // Should not happen
				  return { error: 'Document does not exist' };
				}
		  
				// Return the fetched game data
				return { data: game };
			  } catch (error) {
				// Return the error message if something goes wrong
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
			  try {
				const userCredential = await createUserWithEmailAndPassword(auth, email, password);
				const user = userCredential.user;
		  
				// Optionally set displayName (if needed)
				if (displayName) {
				  await updateProfile(user, { displayName });
				}
		  
				// Extract only serializable user properties
				const userData = {
				  uid: user.uid,
				  email: user.email,
				  displayName: user.displayName,
				};
		  
				return { data: userData };
			  } catch (error) {
				return { error: { message: error.message, code: error.code } };
			  }
			},
			invalidatesTags: ['User', 'Games'],
		  }),
		  
		  
		signInUser: builder.mutation({
			async queryFn({ email, password }) {
				try {
				  const { user } = await signInWithEmailAndPassword(auth, email, password);
				  
				  // Extract only serializable fields from the user object
				  const serializedUser = {
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
				  };
			
				  return { data: serializedUser };
				} catch (error) {
				  return { error: error.message };
				}
			  },
			  invalidatesTags: ['User'],
		}),
		updateUser: builder.mutation({
			async queryFn({ email, password, displayName }) {
			  const user = auth.currentUser;
		  
			  if (displayName) {
				try {
				  await updateProfile(user, { displayName });
				} catch (error) {
				  return { error: error.message };
				}
			  }
		  
			  try {
				await sendEmailVerification(user);
			  } catch (error) {
				return { error: error.message };
			  }
		  
			  // Extract only serializable fields
			  const serializedUser = {
				uid: user.uid,
				email: user.email,
				displayName: user.displayName,

			  };
		  
			  return { data: serializedUser };
			},
			invalidatesTags: ['User'],
		  }),
		  
		updateRoundScore: builder.mutation({
			async queryFn({ ownerId, gameId, playerKey, roundKey, newScore }) {
			  try {
				// Get the document reference for the game
				const gameDocRef = doc(db, 'users', ownerId, 'games', gameId);
		  
				// Check if the game document exists
				const gameDocSnap = await getDoc(gameDocRef);
		  
				if (!gameDocSnap.exists()) {
				  console.log('No such game!');
				  return { error: 'Game not found' };
				}
		  
				// Update the score for the specific player in the specified round
				await updateDoc(gameDocRef, {
				  [`scores.${roundKey}.${playerKey}`]: newScore
				});
		  
				// Return the updated game data
				const updatedGameData = (await getDoc(gameDocRef)).data();
		  
				return { data: updatedGameData };
			  } catch (error) {
				console.error(error.message);
				return { error: error.message };
			  }
			},
			invalidatesTags: ['currentGame'],
		  }),
			initializeNewRound: builder.mutation({
				async queryFn( game ) {
					try {
					const {gameId, ownerId, players} = game
					// Get the document reference for the game
					const gameDocRef = doc(db, 'users', ownerId, 'games', gameId);

					// Check if the game document exists
					const gameDocSnap = await getDoc(gameDocRef);

					if (!gameDocSnap.exists()) {
					console.log('No such game!');
					return { error: 'Game not found' };
					}

					const roundCount = Object.keys(game.scores).length;
					const nextRoundKey = `round_${roundCount + 1}`;

					// Initialize the new round's scores for all players
					const newRoundScores = {};
					Object.keys(players).forEach((playerKey) => {
						newRoundScores[playerKey] = 0; // Initialize scores for each player
					});

					// Update the score for the specific player in the specified round
					await updateDoc(gameDocRef, {
					[`scores.${nextRoundKey}`]: newRoundScores
					});

					// Return the updated game data
					const updatedGameData = (await getDoc(gameDocRef)).data();

					return { data: updatedGameData };
				} catch (error) {
					console.error(error.message);
					return { error: error.message };
				}
			},
			invalidatesTags: ['currentGame'],
		})
	}),
});

export const {
	useFetchAllGamesQuery,
	useFetchSingleGameQuery,
	useAddNewGameMutation,
	useDeleteGameMutation,
	useSignInUserMutation,
	useRegisterUserMutation,
	useUpdateUserMutation,
	useUpdateRoundScoreMutation,
	useInitializeNewRoundMutation,
} = firestoreApi;
