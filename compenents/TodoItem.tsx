import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface TodoItemProps {
  completed: boolean;
  todo: string;
  handleChange: Function;
}

const TodoItem: React.FC<TodoItemProps> = ({
  completed,
  todo,
  handleChange,
}) => {
  return (
    <View style={styles.root}>
      {/* <Pressable onPress={() => setDone(!done)} testID="checkbox"> */}
      <TouchableOpacity testID="checkbox" onPress={() => handleChange()}>
        {completed ? (
          <View testID="completed">
            <Feather name="check-square" size={20} color="green" />
          </View>
        ) : (
          <View testID="not-completed">
            <Feather name="square" size={20} />
          </View>
        )}
      </TouchableOpacity>
      {/* </Pressable> */}
      <Text testID="todo">{todo}</Text>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
