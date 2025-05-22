import { StyleSheet, Button, TextInput, View, Modal, Image } from "react-native"
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
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image
                    source={{ uri: 'https://m.media-amazon.com/images/I/813kqvYoRfL.png' }}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textContainer}
                    placeholder='Goal to achieve'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={() => { addGoalHandler(), props.onCancel() }} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default GoalInput

const styles = StyleSheet.create({

    textContainer: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 5,
    },
    inputContainer: {
        flex: 1,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cdcdcd'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8,

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
})