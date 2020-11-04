import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "Hi there";

  const greeting2 = <Text>Hell to you?</Text>;

  const name = "Matt";
  return (
    <View>
      <Text style={styles.style1}>Getting started with React Native</Text>
      <Text style={styles.style2}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  style1: {
    fontSize: 30,
  },
  style2: {
    fontSize: 50,
  },
});

export default ComponentsScreen;
