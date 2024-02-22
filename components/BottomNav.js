import Dashboard from './Dashboard';
import Settings from './Settings';
import NewGame from './NewGame';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, View } from 'react-native';
import { useState } from 'react';
import FriendsPage from './FriendsPage';

const Tab = createBottomTabNavigator();

function BottomNav({ setShowAuth }) {
	const [liveGame, setLiveGame] = useState(false);
	const [showNewGame, setShowNewGame] = useState(false);

	return (
		<View style={{ height: '100%', width: '100%', position: 'relative' }}>
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
					children={() => <Dashboard setShowNewGame={setShowNewGame} />}
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
					children={() => <Dashboard setShowNewGame={setShowNewGame} />}
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
				{!liveGame ? (
					<Tab.Screen
						name="NewGame"
						children={() => <NewGame setShowNewGame={setShowNewGame} />}
						options={{
							unmountOnBlur: true,
							tabBarLabel: 'New Game',
							tabBarIcon: ({ focused }) => (
								<View
									style={{
										width: 90,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										overflow: 'visible',
										position: 'absolute',
										top: -25,
										borderRadius: '100%',
									}}
								>
									<Icon
										name={'plus-circle'}
										type={'material-community'}
										color={'rgb(6, 214, 160)'}
										size={90}
									/>
								</View>
							),
						}}
					/>
				) : null}
				<Tab.Screen
					name="Friends"
					children={() => <FriendsPage setShowNewGame={setShowNewGame} />}
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
					children={() => (
						<Settings
							setShowAuth={setShowAuth}
							setShowNewGame={setShowNewGame}
						/>
					)}
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
		</View>
	);
}

export default BottomNav;
