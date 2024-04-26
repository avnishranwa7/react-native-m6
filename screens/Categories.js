import { FlatList } from "react-native";

// local imports
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import SafeView from "../components/SafeView";

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(item) {
    function pressHandler() {
      navigation.navigate("Meals Overview", { categoryId: item.item.id });
    }

    return (
      <CategoryGridTile
        title={item.item.title}
        color={item.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <SafeView>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </SafeView>
  );
};

export default CategoriesScreen;
