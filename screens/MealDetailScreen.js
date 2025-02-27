import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import {FavoritesContext} from "../store/context/favorites-context";

export default function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler(){
    if(mealIsFavorite){
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }
  useLayoutEffect(()=> {
    navigation.setOptions({
        headerRight : () => {
            return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} color="white" onPress={changeFavoriteStatusHandler} />
        }
    } );
  },[navigation,changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer} >
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image}/>
      <Text style = { styles.title}> {selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
     <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients}/>
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps}/>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    rootContainer : {
     marginBottom : 32,
    },
  image: {
    width: "100%",
    height: 350,
  },
  title : {
    fontWeight : 'bold',
    margin : 8,
    fontSize : 24,
    textAlign : 'center',
    color : 'white',
  },
  detailText : {
    color : 'white',
  },
  listOuterContainer : {
    alignItems : 'center',
  },
  listContainer : {
    width : '80%',
  }

});
