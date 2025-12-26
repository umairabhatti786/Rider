import React, { useEffect, useRef, useState } from "react";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/Auth/Login";
import SplashScreen from "../../screens/Auth/Splash";
import OfflinePage from "../../screens/Main/OfflinePage";
import OrderPage from "../../screens/Main/OrderPage";
import CaptainSettings from "../../screens/Main/CaptainSettings";
import OrderHistory from "../../screens/Main/OrderHistory";
import WalletScreen from "../../screens/Main/Wallet";

const Stack = createNativeStackNavigator<any>();
const AppStack = () => {
  return (
    <>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OfflinePage" component={OfflinePage} />
        <Stack.Screen name="OrderPage" component={OrderPage} />
          <Stack.Screen name="CaptainSettings" component={CaptainSettings} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
                    <Stack.Screen name="WalletScreen" component={WalletScreen} />






      </Stack.Navigator>
    </>
  );
};
export default AppStack;
