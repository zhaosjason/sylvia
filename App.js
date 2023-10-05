import { StyleSheet, Text, View } from 'react-native';
import Logo from './assets/logo.svg';

export default function App() {
  return (
    <View className="wrapper" style={styles.wrapper}>
      <View className="container_door" style={styles.container_door}>
        <View className="door" style={styles.door} />
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

  door_light: {
    // width: 435.50, 
    // height: 899, 
    // left: -15.50, 
    // top: -47, 
    width: '20%',
    height: '40%',
    top: '50%',
    left: '50%',
    position: 'absolute', 
    backgroundColor: 'radial-gradient(90.02% 121.67% at 217.61% 524.22%, #FFB997 0%, rgba(117, 139, 253, 0) 100%)',
    // backgroundColor: 'red',
  },

  container_text: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'absolute',
  },

  container_title: {
    top: '65%',
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
    flexDirection: 'row',
    textAlign: 'center',
    wordWrap: 'break-word',
  },

  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
});
