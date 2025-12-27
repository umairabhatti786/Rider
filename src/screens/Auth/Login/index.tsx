import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "../../../components/Text";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomInput from "../../../components/Input";
import { icons } from "../../../assets/icons";
import GradientText from "../../../GradientText";
import GradientButton from "../../../components/GradientButton";
import { fonts } from "../../../utils/Themes/fonts";
import ExploreIcon from "../../../assets/svgs/exploreIcon.svg";
import AppLogo from "../../../assets/svgs/appLogo.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function LoginScreen({ navigation }: any) {
  const [showPassowrd, setShowPassowrd] = useState(false);
  return (
    <>

      <ScreenLayout
        backgroundColor="transparent"
        style={{ backgroundColor: "transparent" }}
      >

          <KeyboardAwareScrollView
    enableOnAndroid
    enableAutomaticScroll
    keyboardOpeningTime={0}
    extraScrollHeight={80}
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingBottom: sizeHelper.calHp(80), // 🔥 VERY IMPORTANT
      gap:sizeHelper.calHp(30)
    }}
  >

        <TouchableOpacity style={styles.earth_container}>
          <CustomText
            text={"עברית"}
            size={22}
            fontWeight={"700"}
            fontFam={fonts.IBMPlexSansArabic_SemiBold}
          />
          <ExploreIcon
            height={sizeHelper.calWp(30)}
            width={sizeHelper.calWp(30)}
          />
        </TouchableOpacity>

        
        <View
          style={{
            alignItems: "center",
            marginTop: "30%",
            gap: sizeHelper.calWp(60),
          }}
        >
          <AppLogo
            height={sizeHelper.calWp(170)}
            width={sizeHelper.calWp(170)}
          />
          <View>
            <CustomText
              text={"اهلاً كابتن, جاهز تنطلق؟"}
              style={{
                textAlign: "center",
              }}
              size={40}
              fontWeight={"700"}
              fontFam={fonts.IBMPlexSansArabic_Bold}
            />
            <CustomText
              text={"من هنا يبدأ مشوارك كمندوب توصيل في يلا جيتك"}
              color={theme.colors.grey_text}
              style={{
                textAlign: "center",
              }}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            marginTop: sizeHelper.calHp(50),
            gap: sizeHelper.calHp(20),
          }}
        >
          <CustomText
            text={"تسجيل الدخول إلى حسابك"}
            size={27}
            fontFam={fonts.IBMPlexSansArabic_Bold}
            fontWeight="700"
          />
          <CustomInput
            placeholder="رقم الهاتف"
            textAlign={"right"}
            backgroundColor={theme.colors.background}
            rightSource={images.number}
          />
          <CustomInput
            placeholder="كلمة السر"
            textAlign={"right"}
            backgroundColor={theme.colors.background}
            rightSourceSize={45}
            rightSource={images.lock}
            secureTextEntry={showPassowrd}
            onLeftSource={() => setShowPassowrd(!showPassowrd)}
            leftSource={!showPassowrd ? icons.eye_off : icons.eye}
          />
        </View>
        <GradientButton
          style={{ marginTop: sizeHelper.calHp(50) }}
          text="تسجيل الدخول الى حسابي"
          width={"73%"}
          onPress={() => navigation.navigate("OfflinePage")}
        />
        <GradientText
          text={"اريد أن اصبح سائق  يلا جيتك"}
          size={30}
          fontWeight="700"
          fontFamily={fonts.IBMPlexSansArabic_Bold}
          style={{
            textAlign: "center",
          }}
        >
          <CustomText
            text={"تسجيل الدخول إلى حسابك"}
            size={20}
            fontFam={fonts.IBMPlexSansArabic_Bold}
            fontWeight="700"
          />
        </GradientText>

          </KeyboardAwareScrollView>

      </ScreenLayout>

      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
        }}
        source={images.login_background}
      />
    </>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  earth_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeHelper.calWp(13),
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(25),
    shadowColor: "#09090B",
    elevation: 3,
    alignSelf: "flex-start",
    paddingHorizontal: sizeHelper.calWp(25),
    paddingVertical: sizeHelper.calHp(15),
  },
});
