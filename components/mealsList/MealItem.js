import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "../MealDetails";

export default function MealItem({id,title,imageUrl,duration,complexity,affordability}){
    const navigation = useNavigation();

    function selectMealItemHandler(){
    navigation.navigate("MealDetail",{
        mealId : id
    });
}
    return (
        <View style={styles.mealItem}>
            <Pressable style={({pressed}) => pressed ? styles.buttonPressed : null} android_ripple={{color : '#ccc'}} onPress={selectMealItemHandler} >
              <View style={styles.innerContainer}>
                <View >
                   <Image source={{uri : imageUrl}} style={styles.image}/>
                   <Text style={styles.title}>{title}</Text>
                </View>
               <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
               </View>
            </Pressable>
        </View>
    );
}



const styles = StyleSheet.create({
 mealItem : {
    margin : 16,
    borderRadius : 8,
    overflow : Platform.select({'ios' : 'visible' , 'android' : 'hidden'}),
    backgroundColor : 'white',
    elevation : 4,
    shadowColor : 'black',
    shadowOffset : {height : 2,width : 0},
    shadowOpacity : 0.35,
    shadowRadius : 12,
 },
 buttonPressed : {
    opacity : 0.5,
 },
 innerContainer : {
    borderRadius : 8,
    overflow : 'hidden',
 },
 image : {
    width : '100%',
    height : 200,
 },
 title : {
    fontWeight : 'bold',
    textAlign : 'center',
    fontSize: 18,
    margin : 12,
 },

});