import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// local imports
import { MEALS } from "../data/dummy-data";
import SubtitleList from "../components/MealDetail/SubtitleList";
import IconButton from "../components/IconButton";

const MealDetail = ({ route, navigation }) => {
  const id = route.params.id;
  const meal = MEALS.find((m) => m.id === id);

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerRight: () => <IconButton name="star" color="white" />,
      }),
    [navigation]
  );

  return (
    <ScrollView style={styles.rootView}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.detailsView}>
        <Text style={styles.detailItem}>{meal.duration}m</Text>
        <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>
          {meal.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.wrapperView}>
        <View style={styles.listContainer}>
          <SubtitleList title="Ingredients" data={meal.ingredients} />
          <SubtitleList title="Steps" data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  rootView: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    color: "white",
  },
  wrapperView: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
