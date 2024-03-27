import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useGlobalExpenseCtx } from "../store/ExpensesCtx";

const InputField = ({ label, type, placeholder, multiline, value }) => {
  const { handleExpense } = useGlobalExpenseCtx();
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, { height: multiline ? 100 : null }]}
        placeholder={placeholder}
        keyboardType={type}
        multiline={multiline}
        value={value}
        onChangeText={handleExpense.bind(this, label)}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  fieldContainer: {
    marginVertical: 16,
    marginLeft: 8,
    flex: 1,
  },
  label: {
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "#EEE",
    padding: 4,
  },
});
