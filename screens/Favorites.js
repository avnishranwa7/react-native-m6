import { useSelector } from "react-redux";

// local imports
import SafeView from "../components/SafeView";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, Text } from "react-native";

const Favorites = () => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const filterFn = (meal) => favoriteMealIds.includes(meal.id);

  return (
    <SafeView viewStyles={styles.rootView}>
      {favoriteMealIds.length !== 0 ? (
        <MealsList filterFn={filterFn} />
      ) : (
        <Text style={styles.text}>No favourites meals</Text>
      )}
    </SafeView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  rootView: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
