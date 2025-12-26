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
import CrossBtn from "../../assets/svgs/cross.svg";

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

const ViewOrderModal: React.FC<Props> = ({
  isModalVisible,
  setModalVisible,
}) => {
  const dispatch = useDispatch();
  const windowWidth = useWindowDimensions().width;
  const selectedMenu = useSelector(getSelectedMenu);
  const [isShowModal, setIsShowModal] = useState(false);

  const navigation: any = useNavigation();

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

  // useEffect(() => {
  //   if (isModalVisible) {
  //     setTimeout(() => {
  //       setIsShowModal(true);
  //     }, 300);
  //   } else {
  //     setIsShowModal(false);
  //   }
  // }, [isModalVisible]);

  const OrderTimelineContainer = () => {
    return (
      <View style={{ alignSelf: "flex-end" }}>
        <View
          style={{ flexDirection: "row-reverse", gap: sizeHelper.calWp(15) }}
        >
          <CustomText
            text={"16:52"}
            fontFam={fonts.IBMPlexSansArabic_Medium}
            fontWeight="600"
            color={theme.colors.jet_black}
            size={30}
          />

          <View
            style={{ ...styles.checkBox, marginTop: sizeHelper.calHp(10) }}
          />

          <View
            style={{ alignItems: "flex-end", marginTop: sizeHelper.calHp(5) }}
          >
            <CustomText
              text={"تم ألتقاط الطلب من X Cafe"}
              fontFam={fonts.IBMPlexSansArabic_Medium}
              fontWeight="600"
              size={22}
            />
            <CustomText
              text={"تم استلام في 1د و 20ث"}
              color={theme.colors.steel_gray}
              size={21}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        style={{
          margin: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,.2)",
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
          <TouchableOpacity
            style={{ padding: sizeHelper.calWp(30), alignSelf: "flex-start" }}
          >
            <CrossBtn
              width={sizeHelper.calWp(30)}
              height={sizeHelper.calWp(30)}
            />
          </TouchableOpacity>

          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(30),
              gap: sizeHelper.calHp(20),
            }}
          >
            <View style={{ alignSelf: "flex-end", gap: sizeHelper.calHp(5) }}>
              <CustomText
                text={"1209212122"}
                fontFam={fonts.IBMPlexSansArabic_Bold}
                fontWeight="700"
                size={34}
              />
              <View
                style={{
                  paddingHorizontal: sizeHelper.calWp(40),
                  paddingVertical: sizeHelper.calHp(1),
                  borderRadius: 999,
                  backgroundColor: theme.colors.light_green,
                  alignSelf: "flex-end",
                }}
              >
                <CustomText
                  text={"نقدي"}
                  color={theme.colors.green}
                  size={22}
                />
              </View>
            </View>
            <View style={styles.line} />

            <CustomText
              text={"الجدول الزمني للطلب"}
              style={{ alignSelf: "flex-end" }}
              fontFam={fonts.IBMPlexSansArabic_Bold}
              fontWeight="700"
              size={30}
            />

            <OrderTimelineContainer />
          </View>
          {/* <View
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
          </View> */}

          {/* <View style={{ flex: 1 }}>
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
          </View> */}

          {/* <CustomButton
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
          </CustomButton> */}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    width: "85%",
    backgroundColor: theme.colors.white,
    paddingBottom: sizeHelper.calHp(50),
    alignSelf: "center",
    borderRadius: sizeHelper.calWp(25),
  },
  line: {
    width: "100%",
    height: sizeHelper.calHp(1.5),
    backgroundColor: theme.colors.border,
  },
  checkBox: {
    width: sizeHelper.calWp(30),
    height: sizeHelper.calWp(30),
    borderRadius: sizeHelper.calWp(30),
    borderWidth: 1.3,
    borderColor: theme.colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ViewOrderModal;
