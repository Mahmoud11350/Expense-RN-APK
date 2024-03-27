import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import Button from "../components/UI/Button";
import { useGlobalExpenseCtx } from "../store/ExpensesCtx";

const UpdateExpense = ({ route }) => {
  const expenseId = route.params.expenseId;
  const { getSingleExpense } = useGlobalExpenseCtx();

  useLayoutEffect(() => {
    getSingleExpense(expenseId);
  }, []);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF", padding: 16 }}>
      <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
        <ExpenseForm type="update" />
        <View style={styles.btnContainer}>
          <Button
            title={"Cancel"}
            btnStyle={styles.cancelBtn}
            ripple={{ color: "#7d2019" }}
          />
          <Button
            title={"Update"}
            btnStyle={[styles.addBtn]}
            ripple={{ color: "#0e5952" }}
          />
          <Button
            title={"Delete"}
            btnStyle={[styles.addBtn]}
            ripple={{ color: "#0e5952" }}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default UpdateExpense;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginTop: 16,
    gap: 8,
  },
  cancelBtn: {
    backgroundColor: "#f44336",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
  },
  addBtn: {
    backgroundColor: "#009688",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
  },
});
