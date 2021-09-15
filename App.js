import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserDetailScreen from './screens/UserDetailScreen'
import UserListScreen from "./screens/UsersList"
import CreateUserScreen from "./screens/CreateUserScreen"
import PruebaGuardado from "./screens/PruebaGuardad"
import SeeStored from "./screens/SeeStored"

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PruebaGuardado" component={PruebaGuardado} />
      <Stack.Screen name="SeeStored" component={SeeStored} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
