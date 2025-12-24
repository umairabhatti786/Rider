import React, { useState } from "react";
import { Image, StatusBar, View } from "react-native";
import CustomText from "../../../components/Text";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomInput from "../../../components/Input";
import { icons } from "../../../assets/icons";
import CustomButton from "../../../components/Button";
import GradientText from "../../../GradientText";
import SimpleToggleButton from "../../../components/SimpleToggleButton";
import GradientButton from "../../../components/GradientButton";

function LoginScreen({navigation}:any) {
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  return (

    <ScreenLayout style={{ flex: 1, backgroundColor: theme.colors.white }} >
      <StatusBar
        hidden={true}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: sizeHelper.calWp(16),
          backgroundColor: theme.colors.background,
          width: sizeHelper.calWp(175),
          height: sizeHelper.calHp(80),
          borderWidth: 1,
          borderColor: theme.colors.white,
          borderRadius: sizeHelper.calWp(30),
          shadowColor: '#333333',
          elevation: 5
        }}
      >
        <CustomText
          text={"עברית"}
          size={25}
          fontWeight={"700"}
        />
        <Image
          source={images.explore}
          style={{
            width: sizeHelper.calWp(35),
            height: sizeHelper.calWp(35)
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: sizeHelper.calHp(225),
          gap: sizeHelper.calWp(60)
        }}
      >
        <Image
          source={images.icon_logo}
          style={{
            width: sizeHelper.calWp(115),
            height: sizeHelper.calWp(180)
          }}
        />
        <View
          style={{
            gap: sizeHelper.calHp(5)
          }}
        >
          <CustomText
            text={"اهلاً كابتن, جاهز تنطلق؟"}
            size={44}
            fontWeight={"800"}
          />
          <CustomText
            text={"من هنا يبدأ مشوارك كمندوب توصيل في يلا جيتك"}
            size={22}
            color="#847D83F5"
            style={{
              textAlign: 'center',
            }}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          marginTop: sizeHelper.calHp(50)
        }}
      >
        <CustomText
          text={"تسجيل الدخول إلى حسابك"}
          size={30}
          fontWeight="700"
        />
        <CustomInput
          placeholder="رقم الهاتف"
          textAlign={"right"}
          backgroundColor={theme.colors.background}
          borderWidth={1}
          borderRadius={sizeHelper.calWp(30)}
          borderColor={'white'}
          rightSource={images.number}
          marginTop={sizeHelper.calHp(36)}
        />
        <CustomInput
          placeholder="كلمة السر"
          textAlign={"right"}
          backgroundColor={theme.colors.background}
          borderWidth={1}
          borderRadius={sizeHelper.calWp(30)}
          borderColor={'white'}
          rightSource={images.lock}
          marginTop={sizeHelper.calHp(26)}
          secureTextEntry={showPassowrd}
          onRightSource={() => setShowPassowrd(!showPassowrd)}
          leftSource={!showPassowrd ? icons.eye_off : icons.eye}
        />
      </View>
      <GradientButton
        text="تسجيل الدخول الى حسابي"
        width={'70%'}
        marginTop={sizeHelper.calHp(30)}
        onPress={()=>navigation.navigate('OfflinePage')}
      />
        <GradientText
          text={"اريد أن اصبح سائق  يلا جيتك"}
          size={30}
          fontWeight="700"
          style={{
            textAlign:'center'
          }}
        />
    </ScreenLayout>)
}

export default LoginScreen;
