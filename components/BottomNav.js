import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Settings from './Settings';
import NewGame from './NewGame';

const Tab = createBottomTabNavigator();

function BottomNav() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Dashboard"
				component={Dashboard}
			/>
			<Tab.Screen
				name="New Game"
				component={NewGame}
			/>
			<Tab.Screen
				name="Settings"
				component={Settings}
			/>
		</Tab.Navigator>
	);
}

export default BottomNav;
