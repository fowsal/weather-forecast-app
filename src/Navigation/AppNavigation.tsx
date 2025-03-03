import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import MovieScreen from "../Screens/MovieScreen/MovieScreen";
import PersonScreen from "../Screens/PersonScreen/Personscreen";
import Searchscreen from "../Screens/SearchScreen/Searchscreen";
export type StackNavigationPropType={
  Home:undefined;
  Movie:{
    imdbID:string;
  };
  Person:undefined;
  search:undefined;

}
const Stack = createNativeStackNavigator<StackNavigationPropType>();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Movie" options={{ headerShown: false}} component={MovieScreen } />
        <Stack.Screen name="Person" options={{ headerShown: false}} component={PersonScreen } />
        <Stack.Screen name="search" options={{ headerShown: false}} component={Searchscreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

