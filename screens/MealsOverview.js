import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

// local imports
import { CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const MealsOverview = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const filterFn = (meal) => meal.categoryIds.includes(categoryId);

  return <MealsList filterFn={filterFn} />;
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
