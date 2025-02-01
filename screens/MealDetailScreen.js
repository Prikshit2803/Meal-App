import { Text, View } from "react-native";

export default function MealDetailScreen({route}){
    const id = route.params.mealId;
  return <View>
    <Text> Details - {id}</Text>
  </View>
}