import { FlatList, StyleSheet, View } from "react-native";

// local imports
import { MEALS } from "../../data/dummy-data";
import MealItem from "./MealItem";

const MealsList = ({ filterFn }) => {
  const meals = MEALS.filter(filterFn);

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

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
