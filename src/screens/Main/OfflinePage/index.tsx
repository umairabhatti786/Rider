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

function OfflinePage({navigation}:any) {
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
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        backgroundColor: theme.colors.white,
                        padding: sizeHelper.calWp(20),
                        borderRadius: sizeHelper.calWp(999),
                        shadowColor: '#000',
                        elevation: 5

                    }}
                >
                    <Image
                        source={images.customer_care}
                        style={{
                            width: sizeHelper.calWp(50),
                            height: sizeHelper.calWp(50)
                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: theme.colors.white,
                        padding: sizeHelper.calWp(20),
                        borderRadius: sizeHelper.calWp(999),
                        shadowColor: '#000',
                        elevation: 5,
                        gap: sizeHelper.calWp(20),
                        width:sizeHelper.calWp(300)

                    }}
                >
                    <SimpleToggleButton />
                    <CustomText
                        text={"غير متصل"}
                        color="#ACB3BE"
                        size={28}
                    />
                </View>
                <View
                    style={{
                        backgroundColor: theme.colors.white,
                        padding: sizeHelper.calWp(20),
                        borderRadius: sizeHelper.calWp(999),
                        shadowColor: '#000',
                        elevation: 5

                    }}
                >
                    <Image
                        source={images.menu}
                        style={{
                            width: sizeHelper.calWp(50),
                            height: sizeHelper.calWp(50)
                        }}
                    />
                </View>
            </View>
            <View
                style={{
                    alignItems: 'center',
                    marginTop: sizeHelper.calHp(150),
                    gap: sizeHelper.calWp(5)
                }}
            >
                <CustomText
                    text={"قم بتغيير حالتك الى متصل"}
                    size={36}
                    fontWeight={"800"}
                />
                <CustomText
                    text={"قم بتفعيل حالة الحساب لتتمكن من قبول الطلبات"}
                    size={22}
                    color="#847D83F5"
                    style={{
                        textAlign: 'center',
                    }}
                />
            </View>
            <View
            style={{
                marginTop:sizeHelper.calHp(50),
                alignItems:'center',
                justifyContent:'center'
            }}
            >
                <Image source={images.frame}/>
                <CustomButton
                onPress={()=>navigation.navigate('OrderPage')}
                text="أحتاج المساعدة"
                marginTop={sizeHelper.calHp(60)}
                />
                <View 
                style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    // alignContent:'center',
                    gap:sizeHelper.calWp(18),
                    marginTop:sizeHelper.calHp(50)
                    
                }}
                >
                    <CustomText
                    text={"تواصل مع الدعم الفني اذا كنت تواجهة مشكلة  "}
                    size={25}
                    color="#847D83F5"
                />
                <View 
                style={{
                    width:sizeHelper.calWp(8),
                    height:sizeHelper.calWp(8),
                    borderRadius:999,
                    backgroundColor:"#847D83F5",
                    alignSelf:'center',
                    marginTop:sizeHelper.calHp(10)
                }}
                />
                </View>
            </View>
        </ScreenLayout>)
}

export default OfflinePage;
