import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ title, btnStyle, ripple, onPress }) => {
  return (
    <Pressable android_ripple={ripple} style={btnStyle} onPress={onPress}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});
