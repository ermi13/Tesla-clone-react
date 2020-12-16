import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";
function index(props) {
  const type = props.type;

  const backgroundColor = type === "primary" ? "#171A20CC" : "white";
  const color = type === "primary" ? "white" : "black";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          props.onPress();
        }}
      >
        <Text style={[styles.text, { color: color }]}>{props.content}</Text>
      </Pressable>
    </View>
  );
}

export default index;
