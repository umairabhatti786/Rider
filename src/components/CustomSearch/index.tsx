import { View, TextInput } from "react-native";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";

const CustomSearch = ({
  props,
  height,
  width,
  borderRadius,
  borderColor,
  placeholder,
  value,
  onChangeText,
  textAlignVertical,
  onSubmitEditing,
  fontSize,
}: any) => {
  return (
    <View
      style={{
        ...props,
        width: width || "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingHorizontal: sizeHelper.calWp(25),
          height: sizeHelper.calHp(height || 80),
          alignItems: "center",
          gap: sizeHelper.calWp(10),
          borderWidth: 1,
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.white,
          borderRadius: borderRadius || sizeHelper.calWp(20),
        }}
      >
        <TextInput
          value={value}
          onSubmitEditing={onSubmitEditing}
          allowFontScaling={false}
          style={{
            flex: 1,
            fontSize: sizeHelper.calHp(fontSize || 24),
            height: "100%",
            fontFamily: fonts.IBMPlexSansArabic_Regular,
            fontWeight: "500",
            alignItems:"flex-end",
            textAlign:"right",
            color: theme.colors.black,
            textAlignVertical: textAlignVertical,
            paddingVertical: 0,
          }}
          placeholder={placeholder}
          placeholderTextColor={"#7F7F7F"}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};
export default CustomSearch;
