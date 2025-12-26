import React, { useMemo } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import CustomText from '../Text';
import { ButtonProps } from '../../utils/Types';
import { theme } from '../../utils/Themes';
import sizeHelper from '../../utils/Helpers';
import { fonts } from '../../utils/Themes/fonts';

const CustomButton = ({
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
  marginTop
}: ButtonProps) => {
  const memoizedStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
      width: width || '100%',
      height: sizeHelper.calHp(height || 80),
      backgroundColor: bgColor || theme.colors.buttonbackground,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: sizeHelper.calHp(borderRadius || 23),
      borderWidth: borderWidth || 0,
      borderColor: borderColor,
      paddingHorizontal: paddingHorizontal,
      flexDirection: 'row',
      gap: sizeHelper.calWp(15),
      marginTop:marginTop
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
      activeOpacity={0.5}
      style={memoizedStyle}
    >
       
         {
          text&&(

             <CustomText
        text={text}
        color={textColor || theme.colors.buttonfont}
        size={size || 26}
        fontWeight={"700"}
        fontFam={fontFam || fonts.IBMPlexSansArabic_Bold}
      />

          )
         }
       {children}
   
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
