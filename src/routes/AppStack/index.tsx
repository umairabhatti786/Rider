import React, { useEffect, useRef, useState } from "react";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/Auth/Login";
import SplashScreen from "../../screens/Auth/Splash";
import OfflinePage from "../../screens/Main/OfflinePage";
import OrderPage from "../../screens/Main/OrderPage";

const Stack = createNativeStackNavigator<any>();
const AppStack = () => {
  return (
    <>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OfflinePage" component={OfflinePage} />
        <Stack.Screen name="OrderPage" component={OrderPage} />




      </Stack.Navigator>
    </>
  );
};
export default AppStack;
