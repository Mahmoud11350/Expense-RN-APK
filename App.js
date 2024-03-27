import { StatusBar } from "expo-status-bar";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ResentExpenses from "./screens/ResentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { AntDesign, Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddExpense from "./screens/AddExpense";
import { ExpensesProvider } from "./store/ExpensesCtx";
import UpdateExpense from "./screens/UpdateExpense";

const Tap = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TapNavigation = () => {
  const Navigate = useNavigation();
  const headerBtn = () => {
    return (
      <Pressable
        style={{ padding: 16 }}
        onPress={() => Navigate.navigate("NewExpense")}
      >
        <View>
          <AntDesign name="pluscircle" size={24} />
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <Tap.Navigator
        screenOptions={{
          headerTitleStyle: { fontSize: 18, fontWeight: "bold" },
          headerRight: headerBtn,
          headerStyle: {
            backgroundColor: "#1a73e8",
          },
          headerTintColor: "#FFF",
          tabBarStyle: {
            backgroundColor: "#1a73e8",
          },

          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#CCC",
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      >
        <Tap.Screen
          name="ResentExpenses"
          component={ResentExpenses}
          options={{
            title: "Resent Expenses ",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="hourglass-half" color={color} size={size} />
            ),
          }}
        />
        <Tap.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: "All Expenses ",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="wallet" color={color} size={size} />
            ),
          }}
        />
      </Tap.Navigator>
    </>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <ExpensesProvider>
          <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
              name="TapNavigation"
              component={TapNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="NewExpense" component={AddExpense} />
            <Stack.Screen name="EditExpense" component={UpdateExpense} />
          </Stack.Navigator>
        </ExpensesProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
