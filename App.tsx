
import React, { useEffect } from "react";
import RootNavigator from "./src/routes/RootNavigator";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { SafeAreaProvider } from "react-native-safe-area-context";

const App = ({ children, edges }: any) => {
  // useEffect(() => {
  //   (async () => {
  //     await initTensorFlow();
  //   })();
  // }, []);
return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
          <BottomSheetModalProvider>
            <RootNavigator />
          </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
