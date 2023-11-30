import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SplashScreen } from './components/Splash.js';
import { DescriptionScreen } from './components/Onboard.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="Description" component={DescriptionScreen} />
        {/* Add more components here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}