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
import { fonts } from "../../../utils/Themes/fonts";
import OrderDetailModal from "../../../components/OrderDetailModal";

function OrderPage({ navigation }: any) {
    const [isModalVisible, setIsModalVisible] = useState(false);
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
                        width: sizeHelper.calWp(270)

                    }}
                >
                    <SimpleToggleButton />
                    <CustomText
                        text={"متصل"}
                        color="#FF4500"
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
            <CustomText
                text={"الطلبات الجديدة"}
                size={36}
                fontWeight={"800"}
                style={{
                    marginTop: sizeHelper.calHp(120),
                    alignSelf: 'flex-end',
                    fontFamily: fonts.IBMPlexSansArabic_Bold
                }}
            />
            <View
                style={{
                    backgroundColor:theme.colors.white,
                    borderWidth:1,
                    borderColor:"#ACB3BE",
                    borderRadius:sizeHelper.calWp(30),
                    shadowColor:theme.colors.black,
                    elevation:5,
                    padding:sizeHelper.calWp(30)
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems:'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <View
                    // Left
                    >
                        <View
                            style={{
                                backgroundColor: theme.colors.buttonbackground,
                                padding:sizeHelper.calWp(4),
                                width:sizeHelper.calWp(150),
                                borderRadius:sizeHelper.calWp(20),
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                        >
                            <CustomText
                                text={"#12345"}
                                color="#E91219"
                            />
                        </View>
                        <View 
                        style={{
                            alignItems:'flex-end',
                            marginTop:sizeHelper.calHp(40)
                        }}
                        >
                            <CustomText
                                text={"طريقة الدفع:"}
                                color="#5C5C5C"
                                size={24}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems:'center',
                                    gap: sizeHelper.calWp(10)
                                }}
                            >
                                <CustomText
                                    text={"نقداً"}
                                    size={26}
                                    fontWeight="700"
                                />
                                <Image
                                    source={images.dollar}
                                    style={{
                                        width: sizeHelper.calWp(28),
                                        height: sizeHelper.calWp(28)
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View
                    // right
                    >
                        <CustomText
                            text={"مقهى روقة | Roka Cafe"}
                            color="#FF4500"
                            size={25}
                            fontWeight="700"
                            style={{
                                textAlign:'right'
                            }}
                        />
                        <CustomText
                            text={"الدوار الثاني, قرية اللقية - النقب "}
                            color="#333333"
                            size={22}
                        />
                        <View
                        style={{
                            alignItems:'flex-end',
                            marginTop:sizeHelper.calHp(40)}}
                        >
                            <CustomText
                                text={"المكسب:"}
                                color="#5C5C5C"
                                size={24}
                            />
                            <CustomText
                                text={"₪ 25"}
                                size={34}
                                fontWeight="700"
                            />
                        </View>

                    </View>
                </View>
                <View
                style={{
                    marginTop:sizeHelper.calHp(25),
                    gap:sizeHelper.calWp(20)
                }}
                >
                    <CustomButton
                        text="قبول الطلب"
                        textColor={"#15803D"}
                        bgColor={"#C3E3D0"}
                        width={'100%'}
                        borderRadius={20}
                        
                        />
                    <CustomButton
                        text="قبول الطلب"
                        textColor={"#E91219"}
                        borderWidth={1}
                        borderColor={"#FA6E23"}
                        bgColor={"#F5F5F5"}
                        width={'100%'}
                        borderRadius={20}
                        onPress={() => setIsModalVisible(true)}

                        />
                </View>
            </View>
            
            <OrderDetailModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
        </ScreenLayout>)
}

export default OrderPage;
