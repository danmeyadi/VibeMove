import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from '../screens/MainTabs';

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}