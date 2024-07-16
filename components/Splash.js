import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
// import { RadialGradient } from 'react-native-gradients';
import Logo from '../assets/logo.svg';
import Door from '../assets/door.svg';


// TODO: Native-CSS door + light experiments
// const colorList = [
//   {offset: '0%', color: '#231557', opacity: '1'},
//   {offset: '29%', color: '#44107A', opacity: '1'},
//   {offset: '67%', color: '#FF1361', opacity: '1'},
//   {offset: '100%', color: '#FFF800', opacity: '1'}
// ]


export function SplashScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
      <View className="wrapper" style={styles.wrapper}>
        <View className="container_door" style={styles.container_door}>
          <Door style={styles.door_svg} width={'100%'} height={'100%'} />
          {/* TODO: Native-CSS door + light experiments */}
          {/* <View className="door" style={styles.door} /> */}
          {/* <RadialGradient className="door_light" style={styles.door_light} /> */}
          {/* <RadialGradient x="50%" y="5i0%" rx="50%" ry="50%" colorList={colorList}/> */}
          {/* <View style={styles.trapezoid} /> */}
        </View>
        <View className="container_text" style={styles.container_text}>
          <View className="container_title" style={styles.container_title}>
            <Text style={styles.title}>Sylvia</Text>
            <Logo style={styles.logo} width={60} height={60} />
          </View>
          <View className="container_subtitle" style={styles.container_subtitle}>
            <Text style={styles.subtitle}>Hello, Welcome to Sylvia.</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#27187E',
  },

  container_door: {
    flex: 1,
    alignItems: 'center',
  },

  door_svg: {
    left: 10,
  },

  container_text: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
  },

  container_title: {
    height: '50%',
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  title: {
    color: 'white', 
    fontSize: 40, 
    fontWeight: '400',
  },

  logo: {
    marginBottom: 5,
  },

  container_subtitle: {
    top: '53%',
    position: 'absolute',
    paddingLeft: 15,
    textAlign: 'center',
    wordWrap: 'break-word',
  },

  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
});

