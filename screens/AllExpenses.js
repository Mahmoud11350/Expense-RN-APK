import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useGlobalExpenseCtx } from "../store/ExpensesCtx";
import { FlatList } from "react-native";
import SingleExpense from "../components/SingleExpense";

const AllExpenses = () => {
  const { allExpenses } = useGlobalExpenseCtx();

  return (
    <View style={styles.container}>
      <FlatList
        data={allExpenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SingleExpense
            amount={item.amount}
            date={item.date}
            description={item.description}
            id={item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 16,
  },
});

export default AllExpenses;
