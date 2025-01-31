import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Главная">
        <Stack.Screen
          name="Главная"
          options={{
            title: "Главная",
            headerStyle: {
              backgroundColor: "#2098a8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Магазин"
          options={{
            title: "Магазин",
            headerStyle: {
              backgroundColor: "#2098a8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={ShopScreen}
        />
        <Stack.Screen
          name="Профиль"
          options={{
            title: "Профиль",
            headerStyle: {
              backgroundColor: "#2098a8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

