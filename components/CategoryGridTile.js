import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTile({title,color,onPress}){
    return (
          <View style={styles.gridItem}>
            <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null] } android_ripple={{color : color}} onPress={onPress}>
                <View style={[styles.innerContainer,  {backgroundColor : color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
          </View>
    );
}


const styles = StyleSheet.create({
    gridItem : {
       flex : 1,
       margin : 40,
       height: 150,
       borderRadius : 8,
       elevation : 4,
       backgroundColor : 'white', /*necessary for shadow to appear in ios */
       shadowColor : 'black',
       shadowOffset : {height : 2,width : 0},
       shadowOpacity : 0.5,
       shadowRadius : 8,
       overflow: Platform.OS === 'android' ? 'hidden' : 'visible', 
    },
    button : {
        flex : 1,
    },
    buttonPressed: {
        opacity: 0.7,
      },
    innerContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center",
        padding : 16,
        borderRadius : 8,
    },
    title : {
        fontWeight : 'bold',
        fontSize : 14,
    }
});