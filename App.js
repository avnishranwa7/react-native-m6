import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// local imports
import CategoriesScreen from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";

const NavStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <NavStack.Navigator>
          <NavStack.Screen
            name="Meals Categories"
            component={CategoriesScreen}
          />
          <NavStack.Screen name="Meals Overview" component={MealsOverview} />
        </NavStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
