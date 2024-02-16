import Dashboard from './Dashboard';
import Settings from './Settings';
import NewGame from './NewGame';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomNav({ setShowAuth }) {
	return (
		<Tab.Navigator
			initialRouteName="Dashboard"
			activeColor="#F0F0F0"
			inactiveColor="#3e2465"
			barStyle={{
				backgroundColor: '#FFF',
				position: 'absolute',
				display: 'flex',
				height: 200,
			}}
			showLabel={false}
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					position: 'relative',
					height: 90,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Dashboard}
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
				component={Dashboard}
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
				name="NewGame"
				component={NewGame}
				options={{
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
			<Tab.Screen
				name="Friends"
				component={Dashboard}
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
