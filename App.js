import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textContainer} placeholder='Goal to achieve'/>
        <Button title='Add Goal'></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals:</Text>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center',
    paddingTop: 50,
    marginBottom: 26,
    paddingHorizontal: 16,

  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    margin: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },
  textContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 5,
  },
  goalsContainer: {
    flex: 5
  }
});
