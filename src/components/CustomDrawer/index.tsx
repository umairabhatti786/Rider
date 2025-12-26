import React, { useEffect, useState } from "react";
import {
  useWindowDimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  Platform,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { images } from "../../assets/images";
import GradientText from "../../GradientText";
import CustomText from "../Text";
import CustomButton from "../Button";

import { fonts } from "../../utils/Themes/fonts";
import GradientCapitalSetting from "../../assets/svgs/gradientCapitalSetting.svg";
import CapitalSetting from "../../assets/svgs/capitalSetting.svg";
import Transactions from "../../assets/svgs/transactions.svg";
import GradientTransactions from "../../assets/svgs/gradientTransactions.svg";
import GradientOrderHistory from "../../assets/svgs/gradientOrderHistory.svg";
import OrderHistory from "../../assets/svgs/orderHistory.svg";
import Headphone from "../../assets/svgs/headphone.svg";

import Wallet from "../../assets/svgs/wallet.svg";
import GradientWallet from "../../assets/svgs/gradientWallet.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedMenu,
  setSelectedMenu,
} from "../../redux/reducers/authReducer";
import { appStyles } from "../../utils/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

interface Props {
  isModalVisible?: boolean;
  setModalVisible?: any;
  modalBackgroundColor?: any;
  setIsLogoutVisible?: any;
  signatureBottomSheetRef?: any;
}

const CustomDrawer: React.FC<Props> = ({ isModalVisible, setModalVisible }) => {
  const dispatch = useDispatch();
  const windowWidth = useWindowDimensions().width;
  const selectedMenu = useSelector(getSelectedMenu);
  const [isShowModal, setIsShowModal] = useState(false);

  const navigation:any=useNavigation()

  const menuData = [
    {
      id: 1,
      title: "أعدادات الكابتن",
      icon:
        selectedMenu === 1 ? (
          <GradientCapitalSetting
            width={sizeHelper.calWp(40)}
            height={sizeHelper.calWp(40)}
          />
        ) : (
          <CapitalSetting
            width={sizeHelper.calWp(40)}
            height={sizeHelper.calWp(40)}
          />
        ),
      onPress: () => {
        dispatch(setSelectedMenu(1));
        setModalVisible(false);

        setTimeout(() => {
          navigation.navigate("CaptainSettings");
        }, 500);
      },
    },

    {
      id: 2,
      title: "المعاملات",
      icon:
        selectedMenu === 2 ? (
          <GradientTransactions
            width={sizeHelper.calWp(40)}
            height={sizeHelper.calWp(40)}
          />
        ) : (
          <Transactions
            width={sizeHelper.calWp(40)}
            height={sizeHelper.calWp(40)}
          />
        ),
      onPress: () => {
        dispatch(setSelectedMenu(2));
        setModalVisible(false);

        setTimeout(() => {
          // navigation.navigate("Invoices");
        }, 500);
      },
    },

    {
      id: 3,
      title: "سجل الطلبات",
      icon:
        selectedMenu === 3 ? (
          <GradientOrderHistory
            width={sizeHelper.calWp(40)}
            height={sizeHelper.calWp(40)}
          />
        ) : (
          <OrderHistory
            width={sizeHelper.calWp(40)}
            height={sizeHelper.calWp(40)}
          />
        ),
      onPress: () => {
        dispatch(setSelectedMenu(3));
        setModalVisible(false);

        setTimeout(() => {
          navigation.navigate("OrderHistory");
        }, 500);
      },
    },

    {
      id: 4,
      title: "المحفظة",
      icon:
        selectedMenu === 4 ? (
          <GradientWallet
            width={sizeHelper.calWp(40)}
            height={sizeHelper.calWp(40)}
          />
        ) : (
          <Wallet width={sizeHelper.calWp(40)} height={sizeHelper.calWp(40)} />
        ),
      onPress: () => {
        dispatch(setSelectedMenu(4));
        setModalVisible(false);

        setTimeout(() => {
          navigation.navigate("WalletScreen");
        }, 500);
      },
    },
  ];

  useEffect(() => {
    if (isModalVisible) {
      setTimeout(() => {
        setIsShowModal(true);
      }, 300);
    } else {
      setIsShowModal(false);
    }
  }, [isModalVisible]);

  return (
    <>
      <Modal
        style={{
          flex: 1,
          margin: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isShowModal ? "rgba(0,0,0,.2)" : "transparent",
          //   backgroundColor: isModalVisible?  'rgba(0,0,0,.4)':"transparent",
        }}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        deviceWidth={windowWidth}
        isVisible={isModalVisible}
        onBackButtonPress={() => setModalVisible?.(false)}
        onBackdropPress={() => setModalVisible?.(false)}
        backdropColor="transparent"
        customBackdrop={
          <Pressable
            style={{ height: "100%", width: "100%" }}
            onPress={() => setModalVisible?.(false)}
          ></Pressable>
        }
      >
        <View style={styles.container}>
          <View
            style={{
              alignSelf: "flex-end",
              flexDirection: "row-reverse",
              gap: sizeHelper.calWp(30),
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(140),
                height: sizeHelper.calWp(140),
                borderRadius: sizeHelper.calWp(140),
              }}
              source={images.user}
            />
            <View style={{ alignItems: "flex-end" }}>
              <GradientText
                text={"اديب الجوابرة"}
                size={27}
                style={{
                  textAlign: "center",
                }}
              >
                <CustomText
                  text={"اديب الجوابرة"}
                  fontFam={fonts.IBMPlexSansArabic_Bold}
                  fontWeight="700"
                  style={{ lineHeight: sizeHelper.calHp(40) }}
                  size={34}
                />
              </GradientText>

              <CustomText
                text={"+972 50-123-1234"}
                fontFam={fonts.IBMPlexSansArabic_Medium}
                fontWeight="600"
                style={{ lineHeight: sizeHelper.calHp(35) }}
                size={22}
              />

              <CustomText
                text={"info@yallajetk.com"}
                fontFam={fonts.IBMPlexSansArabic_Medium}
                fontWeight="600"
                style={{ lineHeight: sizeHelper.calHp(35) }}
                size={22}
              />
            </View>
          </View>

          <View style={{ flex: 1 }}>
            {menuData.map((item, index) => {
              return (
                <TouchableOpacity
                key={index.toString()}
                  onPress={item?.onPress}
                  style={{
                    ...appStyles.row,
                    gap: sizeHelper.calWp(15),
                    alignSelf: "flex-end",
                    paddingVertical: sizeHelper.calHp(17),
                  }}
                >
                  <GradientText
                    gradent={
                      item?.id == selectedMenu
                        ? ["#FB6D23", "#E91219"]
                        : ["#333333", "#333333"]
                    }
                    text={"اديب الجوابرة"}
                    size={27}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <CustomText
                      text={item?.title}
                      fontFam={fonts.IBMPlexSansArabic_Bold}
                      fontWeight="700"
                      style={{ lineHeight: sizeHelper.calHp(40) }}
                      size={30}
                    />
                  </GradientText>
                  {item?.icon}
                </TouchableOpacity>
              );
            })}
          </View>

          <CustomButton
            text="مركز خدمة الزبائن"
            width={"100%"}
            onPress={() =>
              setTimeout(() => {
                setModalVisible(false);
              }, 500)
            }
            height={73}
          >
            <Headphone
              width={sizeHelper.calWp(40)}
              height={sizeHelper.calWp(40)}
            />
          </CustomButton>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "80%",
    paddingTop: "10%",
    backgroundColor: theme.colors.white,
    gap: sizeHelper.calHp(70),
    paddingBottom: sizeHelper.calHp(50),
    paddingHorizontal: sizeHelper.calWp(30),
    alignSelf: "flex-end",
    borderTopLeftRadius: sizeHelper.calWp(20),
    borderBottomLeftRadius: sizeHelper.calWp(20),
  },
});

export default CustomDrawer;
