import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textContainer} placeholder='Mi novia bella'/>
        <Button title='ADD GF!'></Button>
      </View>
      <View>
        <Text>Novia bella</Text>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 3,
    justifyContent: 'space-around'
  },
  textContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '30%',
    padding: 5,
  }

});
