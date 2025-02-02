import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
  <Drawer.Navigator screenOptions={{
    headerStyle : {backgroundColor : '#351401'},
    headerTintColor : 'white',
    drawerStyle: { backgroundColor: '#3f2f25' },
    drawerContentStyle: { backgroundColor: '#3f2f25' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#e4baa1',
    // sceneContainerStyle: { backgroundColor: '#3f2f25' },
    drawerContentContainerStyle: { backgroundColor: '#3f2f25' },
    contentStyle: { backgroundColor: '#3f2f25' }
}}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} 
    options={{
      title : 'All Categories',
      drawerIcon : ({color,size}) => <Ionicons name="list" color={color} size={size}/>
    }}
    />
    <Drawer.Screen name="Favorites" component={FavoritesScreen}
    options={{
      title : 'Favorites',
      drawerIcon : ({color,size}) => <Ionicons name="star" color={color} size={size}/>
    }}
    />
  </Drawer.Navigator>
  )
}

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle : {backgroundColor : '#351401'},
            headerTintColor : 'white',
            contentStyle : {backgroundColor : '#3f2f25'},
        }}>
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown : false}}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
          <Stack.Screen name="MealDetail" options={{title : 'About the Meal',}} component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#24180f',
  },
});
