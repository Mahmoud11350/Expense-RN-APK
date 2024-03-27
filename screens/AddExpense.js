import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import Button from "../components/UI/Button";
import { useGlobalExpenseCtx } from "../store/ExpensesCtx";

const AddExpense = () => {
  const { addNewExpense, isAddingExpense, handleCancelAddingExpense } =
    useGlobalExpenseCtx();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF", padding: 16 }}>
      <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
        <ExpenseForm />
        <View style={styles.btnContainer}>
          <Button
            title={"Cancel"}
            btnStyle={styles.cancelBtn}
            ripple={{ color: "#7d2019" }}
            onPress={handleCancelAddingExpense}
          />
          <Button
            title={isAddingExpense ? "ADDING" : "ADD"}
            btnStyle={[styles.addBtn]}
            ripple={{ color: "#0e5952" }}
            onPress={addNewExpense}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    marginTop: 16,
  },
  cancelBtn: {
    backgroundColor: "#f44336",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  addBtn: {
    backgroundColor: "#009688",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
});
