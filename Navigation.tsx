import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./components/Products";
import Barcode from "./components/Barcode";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ProductList">
                <Stack.Screen name="ProductList" component={ProductList} />
                <Stack.Screen name="Barcode" component={Barcode} />
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
};

export default Navigation;
