import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

// local imports
import CategoriesScreen from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import MealDetail from "./screens/MealDetail";
import Favorites from "./screens/Favorites";
import FavoritesContextProvider from "./store/context/favorites-context";

const NavStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
      sceneContainerStyle={{ backgroundColor: "#3f2f25" }}
    >
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="category" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <NavStack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              headerTitleAlign: "center",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <NavStack.Screen
              name="Meals Categories"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <NavStack.Screen name="Meals Overview" component={MealsOverview} />
            <NavStack.Screen
              name="Meal Details"
              component={MealDetail}
              options={{ title: "About the Meal" }}
            />
          </NavStack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
