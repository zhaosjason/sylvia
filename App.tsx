import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SplashScreen } from './components/screens/Splash';
import { DescriptionScreen } from './components/screens/Onboard';
import { LoginScreen } from './components/screens/Login';
import { SignupScreen } from './components/screens/Signup';

import SupabaseAuth from './components/screens/SupabaseAuth';
import { View, Text } from 'react-native';

import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { Session } from '@supabase/supabase-js';

import 'react-native-url-polyfill/auto';


const Stack = createNativeStackNavigator();


export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="Description" component={DescriptionScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        {/* Add more components here */}
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <SupabaseAuth />
    //   {session && session.user && <Text>{session.user.id}</Text>}
    // </View>
  );
}