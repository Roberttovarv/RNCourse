import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [listOfGoals, setListOfGoals] = useState([])

  function goalInputHandler(enteredGoalText) {
      setEnteredGoalText(enteredGoalText)
  }

  function addGoalHandler() {
    setListOfGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()}
    ])    
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textContainer}
        placeholder='Goal to achieve'
        onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={listOfGoals} renderItem={(itemData)=> { 
          return <GoalItem text={itemData.item.text}/>
          }}/>
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
