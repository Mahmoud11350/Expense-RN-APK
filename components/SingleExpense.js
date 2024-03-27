import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useGlobalExpenseCtx } from "../store/ExpensesCtx";

const SingleExpense = ({ amount, date, description, id }) => {
  const { handleExpenseForward } = useGlobalExpenseCtx();
  return (
    <Pressable onPress={handleExpenseForward.bind(this, id)}>
      <View style={styles.container}>
        <View>
          <Text style={styles.descriptionText}>{description}</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
            }}
          >
            <AntDesign name="calendar" size={24} color="black" />
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
        <View>
          <View style={styles.amount}>
            <Text style={styles.amountText}>{amount} $</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SingleExpense;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#b9d4e9",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
  },
  amount: {
    padding: 4,
    minWidth: 100,
    minHeight: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a73e8",
  },
  amountText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionText: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  dateText: { fontSize: 16, fontWeight: "bold" },
});
