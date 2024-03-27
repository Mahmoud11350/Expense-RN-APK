import { createContext, useContext, useEffect, useState } from "react";
import http from "../axios/axios";
import { useNavigation } from "@react-navigation/native";

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [expense, setExpense] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const [allExpenses, setAllExpenses] = useState([]);
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const navigation = useNavigation();

  const getExpenses = async () => {
    const { data } = await http.get("/expense.json");
    const expenses = [];
    for (const key in data) {
      const expenseObject = {
        id: key,
        amount: data[key].amount,
        date: data[key].date,
        description: data[key].description,
      };
      expenses.push(expenseObject);
    }
    setAllExpenses(expenses);
  };
  useEffect(() => {
    getExpenses();
  }, []);

  const handleExpense = (value, enteredText) => {
    setExpense((oldExpenses) => {
      return { ...oldExpenses, [value]: enteredText };
    });
  };
  const addNewExpense = async () => {
    setIsAddingExpense(true);
    const {
      config: { data },
    } = await http.post("/expense.json", expense);
    setIsAddingExpense(false);
    setExpense(() => {
      return {
        amount: "",
        date: "",
        description: "",
      };
    });
    navigation.navigate("AllExpenses");
  };

  const handleCancelAddingExpense = () => {
    setExpense(() => {
      return {
        amount: "",
        date: "",
        description: "",
      };
    });
    navigation.navigate("AllExpenses");
  };

  const handleExpenseForward = (id) => {
    navigation.navigate("EditExpense", {
      expenseId: id,
    });
  };

  const getSingleExpense = async (expenseId) => {
    const expense = allExpenses.filter((expense) => expense.id == expenseId);
    setExpense({
      amount: expense[0].amount,
      date: expense[0].date,
      description: expense[0].description,
    });
  };
  return (
    <ExpensesContext.Provider
      value={{
        expense,
        handleExpense,
        addNewExpense,
        isAddingExpense,
        handleCancelAddingExpense,
        allExpenses,
        handleExpenseForward,
        getSingleExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export const useGlobalExpenseCtx = () => useContext(ExpensesContext);
