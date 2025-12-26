import React, { useMemo } from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import CustomText from "../Text";
import { ButtonProps } from "../../utils/Types";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import LinearGradient from "react-native-linear-gradient";

const GradientText = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  disable = false,
  borderWidth,
  paddingHorizontal,
  fontWeight,
  children,
  marginTop,
}: ButtonProps) => {
  const memoizedStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
      width: width,
      height: sizeHelper.calHp(height || 85),
      backgroundColor: bgColor,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: sizeHelper.calWp(borderRadius || 34),
      borderWidth: borderWidth || 0,
      borderColor: borderColor,
      paddingHorizontal: paddingHorizontal,
      flexDirection: "row",
      gap: sizeHelper.calWp(15),
      marginTop: marginTop,
    };

    return [baseStyle, style] as StyleProp<ViewStyle>;
  }, [
    width,
    height,
    bgColor,
    borderRadius,
    borderWidth,
    borderColor,
    paddingHorizontal,
    style,
  ]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      // style={{ width: "100%" }}
      activeOpacity={0.5}
    >
      <LinearGradient
        colors={["rgba(250,110,35,1)", "rgba(233,18,25,1)", "rgba(230	,0,	35,1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.5, 1]}
        style={memoizedStyle}
      >
        <CustomText
          text={text}
          color={textColor || theme.colors.white}
          size={size || 26}
          fontWeight={"700"}
          fontFam={fontFam || fonts.IBMPlexSansArabic_Bold}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default React.memo(GradientText);
