import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Settings from './Settings';
import NewGame from './NewGame';

const Tab = createBottomTabNavigator();

function BottomNav({ setShowAuth }) {
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
				children={() => <Settings setShowAuth={setShowAuth} />}
			/>
		</Tab.Navigator>
	);
}

export default BottomNav;
