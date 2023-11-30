import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import Logo from '../assets/logo.svg';


export function DescriptionScreen({ navigation }) {
  return (
    <View className="wrapper" style={styles.wrapper}>
      <Logo style={styles.logo} width={60} height={60} />
      <Text style={styles.title}>Sylvia is a step-by-step guide to changing your name, created especially for the <Text style={styles.highlight}>TGNC*</Text> community.  The process can be confusing, but we're here to help.</Text>
      <Text style={styles.subtitle}>* We use the acronym TGNC (transgender and gender nonconforming) to include all members of our trans, genderqueer, and gender nonconforming family.</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#27187E',
    alignItems: 'center',
  },

  logo: {
    top: '25%',
  },

  title: {
    top: '28%',
    width: '73%',
    color: 'white', 
    fontSize: 26, 
    fontWeight: '300',
    lineHeight: 33,
    textAlign: 'center',
  },

  highlight: {
    color: '#F5BC9C',
  },

  subtitle: {
    top: '35%',
    width: '73%',
    color: '#F5BC9C',
    fontSize: 20, 
    fontWeight: '300',
    lineHeight: 26,
    textAlign: 'center',
  },
});

