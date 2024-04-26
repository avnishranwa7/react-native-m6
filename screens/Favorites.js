import { useContext } from "react";

// local imports
import SafeView from "../components/SafeView";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { StyleSheet, Text } from "react-native";

const Favorites = () => {
  const { ids } = useContext(FavoritesContext);
  const filterFn = (meal) => ids.includes(meal.id);

  return (
    <SafeView viewStyles={styles.rootView}>
      {ids.length !== 0 ? (
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
