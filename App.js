import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Main from './components/Main';

const App = () => {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
};

export default App