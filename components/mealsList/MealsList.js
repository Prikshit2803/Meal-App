import {View, StyleSheet, FlatList  } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({items}){
     function renderMealItem(itemData){
            const item = itemData.item;
            const mealItemprop = {
                id : item.id,
                title : item.title,
                imageUrl : item.imageUrl,
                duration : item.duration,
                complexity : item.complexity,
                affordability : item.affordability,
            }
            return <MealItem  {...mealItemprop} />
          }
    
        return (
            <View style={styles.container}>
               <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
            </View>
        );
}


const styles = StyleSheet.create({
    container : {
     flex : 1,
     padding : 16,
    },
 });