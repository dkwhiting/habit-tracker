import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import gameReducer from './gameSlice';
import { firestoreApi } from './apiSlice';

export default configureStore({
	reducer: {
		[firestoreApi.reducerPath]: firestoreApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(firestoreApi.middleware),
});
