import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }
  function addGoalHandler(enteredGoalText) {
    setListOfGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ])
  }

  function deleteGoal(id) {
    setListOfGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    }
  );    
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add new goal'
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={listOfGoals} renderItem={(itemData) => {
          return (
          <GoalItem 
          text={itemData.item.text}
          onDeleteItem={deleteGoal}
          id={itemData.item.id}
          />
        );
        }} />
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
  goalsContainer: {
    flex: 5
  }
});
