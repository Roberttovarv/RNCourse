import { StyleSheet, Button, TextInput, View, Modal } from "react-native"
import { useState } from 'react';


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredGoalText) {
        setEnteredGoalText(enteredGoalText)
      }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textContainer}
                placeholder='Goal to achieve'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
        </Modal>
    )
};

export default GoalInput

const styles = StyleSheet.create({

    textContainer: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        flex: 1,
        margin: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#cccccc'
    }
})