import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InputField from "./InputField";
import { useGlobalExpenseCtx } from "../store/ExpensesCtx";

const ExpenseForm = ({ type }) => {
  const { expense } = useGlobalExpenseCtx();
  const { amount, date, description } = expense;

  return (
    <>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {type ? "Update Your Expense" : "Add Your Expense"}{" "}
        </Text>
        <View style={styles.rowFields}>
          <InputField label={"amount"} type={"decimal-pad"} value={amount} />
          <InputField
            label={"date"}
            placeholder={"YYYY-MM-DD"}
            type={"number-pad"}
            value={date}
          />
        </View>
        <InputField
          label={"description"}
          multiline={true}
          value={description}
        />
      </View>
    </>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  rowFields: {
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 54,
    marginBottom: 32,
    textAlign: "center",
  },
});
