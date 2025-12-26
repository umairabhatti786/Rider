import React from 'react';
import RootNavigator from './src/routes/RootNavigator';
import { View } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider} from "react-redux";
import store from "./src/redux/store";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
          <Provider store={store}>

      <BottomSheetModalProvider>
        <RootNavigator />
      </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
