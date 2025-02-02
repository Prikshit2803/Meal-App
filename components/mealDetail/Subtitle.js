import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({children}){
    return (
       <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    subTitle : {
        fontSize : 20,
        color : '#e2b497',
        fontWeight : 'bold',
        textAlign : 'center',
      },
      subTitleContainer : {
          padding : 6,
          marginHorizontal : 12,
          marginVertical : 6,
          borderBottomWidth : 2,
          borderBottomColor : '#e2b497',
      }
});