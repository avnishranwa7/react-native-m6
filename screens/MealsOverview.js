import { FlatList, StyleSheet, Text, View } from "react-native";

// local imports
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route }) => {
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  function renderMealItem(item) {
    return <MealItem title={item.item.title} />;
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
