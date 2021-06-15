import React from "react";
import { useState } from "react";
import { View } from "react-native";
import TodoItem from "../compenents/TodoItem";

const MainScreen: React.FC = () => {
  const [completed, setCompleted] = useState(true);

  const toggleCompleted = () => setCompleted((prevState) => !prevState);
  return (
    <View>
      <TodoItem
        completed={completed}
        todo="Buy bread"
        handleChange={toggleCompleted}
      />
    </View>
  );
};

export default MainScreen;
