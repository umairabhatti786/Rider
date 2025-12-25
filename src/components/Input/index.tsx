import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomText from "../Text";
import { InputProps } from "../../utils/Types";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";

const CustomInput = ({
  placeholder,
  keyboard,
  secureTextEntry,
  fontWeight,
  multiline,
  fontSize,
  value,
  onChangeText,
  onBlur,
  error,
  editable,
  color,
  maxLength,
  placeholderTextColor,
  borderRadius,
  backgroundColor,
  textAlign,
  textAlignVertical,
  paddingTop,
  onSubmitEditing,
  label,
  borderColor,
  fontFamily,
  width,
  rightSource,
  height,
  leftSource,
  rightSourceSize,
  borderWidth,
  marginTop,
  leftSourceSize,
  onLeftSource
}: InputProps) => {
  return (
    <View style={{ width: width || "100%" }}>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingRight: sizeHelper.calWp(25),
          height: sizeHelper.calHp(height || 90),
          borderRadius: sizeHelper.calWp(borderRadius ||30),
          borderWidth: borderWidth ||1,
          borderColor: borderColor ||theme.colors.white,
          backgroundColor: backgroundColor || theme.colors.white,
          elevation: 2,
          shadowRadius:2,
          gap:sizeHelper.calWp(20)
        }}
      >

           {leftSource && (
          <TouchableOpacity
            onPress={onLeftSource}
            disabled={!onLeftSource}
            activeOpacity={0.6}
            style={{
              justifyContent: "center",
              alignItems: "center",
            height:"100%",
            paddingLeft:sizeHelper.calWp(25)
            }}
          >
            <Image
              source={leftSource}
              style={{
                width: sizeHelper.calWp(leftSourceSize || 45),
                height: sizeHelper.calWp(leftSourceSize || 45),
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
       

        <TextInput
          value={value}
          editable={editable}
          onSubmitEditing={onSubmitEditing}
          allowFontScaling={false}
          style={{
            flex: 1,
            fontSize: sizeHelper.calHp(fontSize || 25),
            height: leftSource?"90%":"100%",
            fontFamily: fontFamily || fonts.IBMPlexSansArabic_Regular,
            fontWeight: fontWeight || "400",
            color: color || theme.colors.black,
            textAlign: textAlign,
            textAlignVertical: textAlignVertical,
            paddingTop: paddingTop || 0,
            paddingVertical: 0,
          }}
          placeholder={placeholder}
          multiline={multiline}
          placeholderTextColor={
            placeholderTextColor || theme.colors.black
          }
          keyboardType={keyboard}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry || false}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
        />

         {rightSource && (
          <Image
            source={rightSource}
            style={{
              width:sizeHelper.calWp(rightSourceSize|| 35),
              height: sizeHelper.calWp(rightSourceSize|| 35),
            }}
            resizeMode="contain"
          />
        )}

     
      </View>
    </View>
  );
};

export default CustomInput;
