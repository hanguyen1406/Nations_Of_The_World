import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import ChauLuc from '../screens/ChauLuc';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChauLuc" component={ChauLuc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
