import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


export default function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {
    function pressHandler(){
      navigation.navigate("MealsOverview",{
        categoryId : itemData.item.id
      });
    }
    return (
      <View style={{ flex: 1, backgroundColor: '#3f2f25' }}>
      <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} style={{ backgroundColor: '#3f2f25' }}/>
      </View>
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
