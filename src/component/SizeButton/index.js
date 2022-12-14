import { View, Text, StyleSheet } from "react-native";
import React, { Children } from "react";

export default function SizeButton(props) {
  return (
    <View
      style={[styles.container, { backgroundColor: props.bgColor || "#fff" }]}
    >
      <Text style={[styles.text, { color: props.color || "#ddd" }]}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#e6e6e6",
    borderWidth: 3,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
