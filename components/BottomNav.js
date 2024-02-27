import Dashboard from './Dashboard';
import Settings from './Settings';
import NewGame from './NewGame';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ButtonGroup, Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, View } from 'react-native';
import { useState } from 'react';
import FriendsPage from './FriendsPage';
import LiveGame from './LiveGame';
import { useNavigation } from '@react-navigation/native';
import NewGameButton from './NewGameButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

function BottomNav({ setShowAuth }) {
	const navigation = useNavigation();
	const [liveGame, setLiveGame] = useState(false);
	const [showNewGame, setShowNewGame] = useState(false);

	return (
		<Tab.Navigator
			initialRouteName="Dashboard"
			activeColor="#F0F0F0"
			inactiveColor="#3e2465"
			showLabel={false}
			barStyle={{
				backgroundColor: '#FFF',
				display: 'flex',
				height: 200,
				justifyContent: 'start',
				alignItems: 'start',
				position: 'absolute',
				zIndex: 999,
			}}
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					height: 90,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				children={() => <Dashboard />}
				onPress={() => console.log('HELLO')}
				options={{
					tabBarShowLabel: false,
					tabBarLabel: 'Home',
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name={'home'}
								type={'material-community'}
								color={focused ? 'rgb(239, 71, 111)' : '#BABABA'}
								size={40}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Dashboard"
				children={() => <Dashboard />}
				options={{
					tabBarLabel: 'Dashboard',
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name={'view-dashboard'}
								type={'material-community'}
								color={focused ? 'rgb(239, 71, 111)' : '#BABABA'}
								size={40}
							/>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name="null"
				children={() => <NewGame />}
				options={{ tabBarIconStyle: { display: 'none' } }}
			/>
			<Tab.Screen
				name="Friends"
				children={() => <FriendsPage />}
				options={{
					tabBarLabel: 'Friends',
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name={'account-group'}
								type={'material-community'}
								color={focused ? 'rgb(239, 71, 111)' : '#BABABA'}
								size={40}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				children={() => <Settings setShowAuth={setShowAuth} />}
				options={{
					tabBarLabel: 'Settings',
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name={'cog'}
								type={'material-community'}
								color={focused ? 'rgb(239, 71, 111)' : '#BABABA'}
								size={40}
							/>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default BottomNav;
