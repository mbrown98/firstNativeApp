import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textStyle1} />
      <Text style={styles.textStyle2}>Box Screen 2</Text>
      <Text style={styles.textStyle3}>Box Screen 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
  },
  textStyle1: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    // flex: 1,
  },
  textStyle2: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    top: 100,
    // borderWidth: 3,
    // borderColor: "red",
    // // alignSelf: "center",
    // position: "absolute", //ignores siblings
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // ...StyleSheet.absoluteFillObject,

    // flex: 2,
  },
  textStyle3: {
    height: 100,
    width: 100,
    backgroundColor: "pink",
    // borderWidth: 3,
    // borderColor: "red",
    // flex: 2,
  },
});
export default BoxScreen;
