import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/mealsList/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";

export default function MealsOvervieScreen({route,navigation}){
     const catId = route.params.categoryId;
    //    const catId = useRoute().params.categoryId;
    const displayedMeals = MEALS.filter(item => {
        return item.categoryIds.indexOf(catId)>=0;
    });


    useLayoutEffect(() => {
        const displayTitle = CATEGORIES.find((category) => category.id===catId).title;
        navigation.setOptions({
                title : displayTitle
        });
    },[catId, navigation]);

    return <MealsList items={displayedMeals}/>
   
}
