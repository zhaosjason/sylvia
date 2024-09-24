import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';

import { supabase } from '../../lib/supabase';
import Logo from '../../assets/logo.svg';


export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) { 
      Alert.alert(error.message);
    } else {
      navigation.navigate("Description");
    }
    setLoading(false);
  }

  return (
    <SafeAreaView className="wrapper" style={styles.wrapper}>
      <Logo style={styles.logo} width={60} height={60} />
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#AAA"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#AAA"
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <Text 
        onPress={() => navigation.navigate("Signup")}
        style={[styles.title, styles.signup]}
      >
        Sign up
      </Text>

      <Text 
        onPress={() => navigation.navigate("ForgotPassword")}
        style={[styles.title, styles.forgot_pass]}
      >
        Forgot password?
      </Text>

      <Pressable
        title="Login"
        onPress={() => signInWithEmail()}
        style={styles.button}
      >
        <Text style={styles.button_title}>></Text>
      </Pressable>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#27187E',
    alignItems: 'center',
    width: '100%',
  },

  logo: {
    top: '15%',
  },

  title: {
    top: '18%',
    width: '73%',
    color: 'white', 
    fontSize: 26, 
    fontWeight: '300',
    lineHeight: 33,
    textAlign: 'center',
  },

  signup: {
    top: '28%',
    fontSize: 18,
    textDecorationLine: 'underline',
  },

  forgot_pass: {  
    top: '29%',
    fontSize: 18,
    textDecorationLine: 'underline',
  },

  input: {
    top: '25%',
    height: 40,
    width: '73%',
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'bottom',
  },

  button: {
    top: '35%',
    height: 50,
    width: 50,
    marginLeft: 'auto',
    marginRight: '13.5%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
  },

  button_title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

