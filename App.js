import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Main from './components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<Main />
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
