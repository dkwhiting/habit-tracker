import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNav from './components/BottomNav';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState('user')

  return (
    <>
    {!user
      ? <Login />
      : <NavigationContainer>
          <BottomNav />
        </NavigationContainer>
    }
    </>
  );
};

export default App