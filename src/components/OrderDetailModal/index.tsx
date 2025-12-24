import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { images } from "../../assets/images";
import CustomText from "../Text";
import { Modal } from "react-native";
import sizeHelper from "../../utils/Helpers";
import { icons } from "../../assets/icons";
import CustomButton from "../Button";
import GradientText from "../../GradientText";
import GradientButton from "../GradientButton";



const OrderDetailModal = ({ isVisible, setIsVisible }: any) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setIsVisible(false)}
    >

      <View style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <View style={{
          backgroundColor: 'white',
          padding: sizeHelper.calWp(40),
          borderRadius: sizeHelper.calWp(30),
          width: '100%',
        }}>
          <View
            style={{
              width: sizeHelper.calWp(80),
              height: sizeHelper.calHp(8),
              backgroundColor: "#CCCCCC",
              borderRadius: sizeHelper.calWp(30),
              alignSelf: 'center'
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: sizeHelper.calWp(60)
            }}
          >
            <CustomText
              text={"تفاصيل الطلب"}
              size={38}
              fontWeight="700"
            />
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
            >
              <Image
                source={icons.cross}
                style={{
                  width: sizeHelper.calWp(150),
                  height: sizeHelper.calWp(150),
                  alignSelf: 'flex-end'
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <CustomText
              text={"#12345"}
              size={24}
              color="#6B7480"
            />
            <CustomText
              text={"مكسيكاني اللقية | اللقية"}
              size={26}
              fontWeight="700"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: sizeHelper.calHp(60)
            }}
          >
            <CustomText
              text={"المسافة لنوصيل الطلب:"}
              size={25}
              color="#6B7480"
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: sizeHelper.calWp(10)
              }}
            >
              <CustomText
                text={"تسليم الطلب"}
                size={25}
                color="#6B7480"
              />
              <Image
                source={images.profile}
                style={{
                  width: sizeHelper.calWp(40),
                  height: sizeHelper.calWp(40)
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <CustomText
              text={" 12.3 كم"}
              size={24}
              color="#FF4500"
            />
            <CustomText
              text={"الى [اسم العميل], [العنوان المحفوظ]"}
              size={24}
              fontWeight="700"
              style={{
                marginRight: sizeHelper.calWp(34)
              }}
            />
          </View>
          <CustomButton
            text="نقدا"
            size={30}
            width={"75%"}
            marginTop={sizeHelper.calHp(50)}
            style={{
              alignSelf: 'center'
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 26
            }}
          >
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <CustomText
                text={"مكسب المندوب:"}
                size={24}
                color="#5C5C5C"
              />
              <CustomText
                text={"₪ 25 "}
                size={50}
                fontWeight="700"
                color="#FF4500"
              />
            </View>
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <CustomText
                text={"سعر المطعم:"}
                size={24}
                color="#5C5C5C"
              />
              <CustomText
                text={"₪ 105 "}
                size={50}
                fontWeight="700"
                color="#6B7480"
              />
            </View>
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <CustomText
                text={"اجمالي:"}
                size={24}
                color="#5C5C5C"
              />
              <CustomText
                text={"₪ 130 "}
                size={50}
                fontWeight="700"
                color="#6B7480"
              />
            </View>
          </View>
          <GradientButton
            text="قبول الطلب"
            width={'100%'}
            height={100}
            borderRadius={100}
            marginTop={sizeHelper.calHp(50)}
            onPress={() => setIsVisible(false)}

          />
        </View>
      </View>
    </Modal>

  );
};

export default OrderDetailModal;