import { StyleSheet, Text, Pressable, View } from "react-native"

function GoalItem(props) {


  return (
    <View>
        <Pressable
          android_ripple={{ color: '#dddddd' }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
        <Text style={styles.goalItem}>{props.text}</Text>
    </Pressable>
      </View>
  )
}
export default GoalItem;

const styles = StyleSheet.create({

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  pressedItem: {
    opacity: 0.5
  }
})
