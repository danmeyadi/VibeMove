import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <View><Text>Home 🏠</Text></View>} />
      <Tab.Screen name="Chat" component={() => <View><Text>Chat 💬</Text></View>} />
    </Tab.Navigator>
  );
}