import React from "react";
import {
  StyleSheet,
  ViewStyle,
  View,
  ImageBackground,
  StatusBar,
  StatusBarStyle,
  Platform,
} from "react-native";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenLayoutProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  barStyle?: StatusBarStyle; // "light-content" | "dark-content" | "default"
  translucent?: boolean;
  paddingTop?: any
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  style,
  backgroundColor = theme.colors.background,
  paddingTop
}) => {

  const insets = useSafeAreaInsets();

  return (
    <>
<StatusBar backgroundColor={theme.colors.white} barStyle={"dark-content"}/>
      <SafeAreaView style={[styles.background, {
        backgroundColor:backgroundColor||theme.colors.background,
        paddingTop: sizeHelper.calHp(paddingTop ||10),



      }]}>
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.background

  },
  container: {
    flex: 1,
    gap: sizeHelper.calHp(30),
    paddingHorizontal: sizeHelper.calWp(36),
    marginTop: sizeHelper.calHp(Platform.OS=="ios"?0: 14),
    backgroundColor: theme.colors.background


  },
});

export default ScreenLayout;
