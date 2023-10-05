import { StyleSheet, Text, View } from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import Logo from './assets/logo.svg';
import Door from './assets/door.svg';

// TODO: Native-CSS door + light experiments
// const colorList = [
//   {offset: '0%', color: '#231557', opacity: '1'},
//   {offset: '29%', color: '#44107A', opacity: '1'},
//   {offset: '67%', color: '#FF1361', opacity: '1'},
//   {offset: '100%', color: '#FFF800', opacity: '1'}
// ]

export default function App() {
  return (
    <View className="wrapper" style={styles.wrapper}>
      <View className="container_door" style={styles.container_door}>
        <Door style={{ top: '-30%', left: '2%' }} width={'100%'} height={'150%'} />
        {/* TODO: Native-CSS door + light experiments */}
        {/* <View className="door" style={styles.door} /> */}
        {/* <RadialGradient className="door_light" style={styles.door_light} /> */}
        {/* <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList}/> */}
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
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#27187E',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  container_door: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  door: {
    width: '20%',
    height: '40%',
    top: '33%',
    left: '50%',
    backgroundColor: '#FFB997',
  },

  // TODO: For better rendering / native device support, it's prob better
  // to generate the door and light with native CSS.

  // door_light: {
  //   width: '20%',
  //   height: '40%',
  //   top: '50%',
  //   left: '50%',
  //   position: 'absolute', 
  //   backgroundColor: 'radial-gradient(90.02% 121.67% at 217.61% 524.22%, #FFB997 0%, rgba(117, 139, 253, 0) 100%)',
  //   // backgroundColor: 'red',
  // },

  // trapezoid: {
  //   width: 200,
  //   height: 0,
  //   borderBottomWidth: 100,
  //   borderBottomColor: 'red',
  //   borderLeftWidth: 50,
  //   borderLeftColor: 'transparent',
  //   borderRightWidth: 50,
  //   borderRightColor: 'transparent',
  //   borderStyle: 'solid'
  //  },

  container_text: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'absolute',
  },

  container_title: {
    top: '65%',
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    // borderWidth: 1,
    // borderColor: "red",
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
    top: '72%',
    paddingLeft: 10,
    flexDirection: 'row',
    textAlign: 'center',
    wordWrap: 'break-word',
    // borderWidth: 1,
    // borderColor: "red",
  },

  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
});
