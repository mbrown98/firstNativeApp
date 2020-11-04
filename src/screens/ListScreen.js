import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Matt", age: "20" },
    { name: "Eric", age: "20" },
    { name: "Greg", age: "20" },
    { name: "Nick", age: "20" },
    { name: "Jay", age: "20" },
  ];

  return (
    <FlatList
      //horizontal={true} OR just horizontal
      //showsHorizontalScrollIndicator={false}
      //    hides scrollbar
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        //element === {item: {name: .......}, index: 0 }
        //destructure item from element prop
        return (
          <Text style={styles.textStyle}>
            {item.name}: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 100,
  },
});

export default ListScreen;
