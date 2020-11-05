import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === {colorToChange: "red" OR "green" OR "blue" , amount: 10 OR -10}
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };

    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  //runMyReducer usually referred to as dispatch
  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          runMyReducer({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          runMyReducer({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          runMyReducer({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
