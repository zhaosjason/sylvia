import { StyleSheet, Text, View } from 'react-native';
import Logo from './assets/logo.svg';

export default function App() {
  return (
    <View className="wrapper" style={styles.wrapper}>
      <View className="container_door" style={styles.container_door}>
        <View className="door" style={styles.door} />
        {/* <View className="Rectangle35" style={{ width: 435.50, height: 899, left: -15.50, top: -47, position: 'absolute', backgroundColor: 'radial-gradient(90.02% 121.67% at 217.61% 524.22%, #FFB997 0%, rgba(117, 139, 253, 0) 100%)' }}></View> */}
      </View>
      <View className="container_text" style={styles.container_text}>
        <View className="Sylvia" style={{textAlign: 'center', color: 'white', fontSize: 40, fontWeight: '400', lineHeight: 60, wordWrap: 'break-word' }}>
          <Text style={{color: 'white', fontSize: 40, fontWeight: '400'}}>Sylvia</Text>
        </View>
        {/* <View className="HelloWelcomeToSylvia" style={{ width: 242, height: 61, left: 86, top: 436, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontWeight: '400', lineHeight: 30, wordWrap: 'break-word' }}>
          <Text>Hello, Welcome to Sylvia.</Text>
        </View> */}
        <Logo width={120} height={40} />
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
    height: '33%',
    top: '33%',
    left: '50%',
    backgroundColor: '#FFB997',
  },

  container_text: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
});
