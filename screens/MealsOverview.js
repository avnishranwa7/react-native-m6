import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

// local imports
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  function renderMealItem(item) {
    return <MealItem {...item.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
