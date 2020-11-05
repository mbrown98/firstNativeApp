import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const INCREMENT = 1;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === {colorToChange: "red" OR "green" OR "blue" , amount: 10 OR -10}
  switch (action.action) {
    case "increase":
      return { ...state, count: state.count + action.amount };

    case "decrease":
      return { ...state, count: state.count + action.amount };

    default:
      return state;
  }
};

const CounterScreen = () => {
  //array destructuring
  //    const colors = ["red", "green"];
  //    const [colorOne, colorTwo] = colors;
  const [state, runMyReducer] = useReducer(reducer, {
    count: 0,
  });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          runMyReducer({ action: "increase", amount: INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          runMyReducer({ action: "decrease", amount: -1 * INCREMENT });
        }}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
