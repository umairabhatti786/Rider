import React, { useState } from "react";
import {
  FlatList,
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
import CustomHeader from "../../../components/CustomHeader";
import { appStyles } from "../../../utils/GlobalStyles";
import GradientText from "../../../GradientText";

import GradientOrderHistory from '../../../assets/svgs/gradientOrderHistory.svg'
import { fonts } from "../../../utils/Themes/fonts";
import ViewOrderModal from "../../../components/ViewOrderModal";

const OrderHistory = ({ navigation }: any) => {

  const [isViewOrderModal,setIsViewOrderModal]=useState(false)


  const PreviousOrdersData = [
    {
      orderId: "#12122",
      Id_number: "120312837128",
      method: "نقدي",
      date: "9:30 5-11-2025",
      price: "₪112",
    },
    {
      orderId: "#12342",
      Id_number: "16065477888",
      method: " بطاقة أئتمان",
      date: "9:30 5-11-2025",
      price: "₪112",
    },
    {
      orderId: "#16799",
      Id_number: "15731284645",
      method: "Apple Pay",
      date: "9:30 5-11-2025",
      price: "₪112",
    },

     {
      orderId: "#16799",
      Id_number: "15731284645",
      method: "Apple Pay",
      date: "9:30 5-11-2025",
      price: "₪112",
    },
   
  ];

    const PreviousOrderItem=({item,index}:any)=>{

      return(

          <View
                  style={{
                    backgroundColor: theme.colors.white,
                    elevation: 2,
                    shadowRadius: 2,
                    borderRadius: sizeHelper.calWp(30),
                    padding: sizeHelper.calWp(20),
                  }}
                >
                  <View style={appStyles.rowjustify}>
                    <GradientText
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <CustomText
                        text={`${item?.price}`}
                        size={28}
                        fontFam={fonts.IBMPlexSansArabic_Bold}
                        fontWeight="700"
                      />
                    </GradientText>
                    <GradientText
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <CustomText
                        text={`طلب ${item?.orderId} `}
                        size={28}
                        fontFam={fonts.IBMPlexSansArabic_Bold}
                        fontWeight="700"
                      />
                    </GradientText>
                  </View>

                  <View style={{...appStyles.rowjustify}}>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>setIsViewOrderModal(true)}
                      style={{
                        ...appStyles.row,
                        paddingHorizontal: sizeHelper.calWp(30),
                        borderRadius: 999,
                        borderWidth: 1,
                        borderColor: theme.colors.border,
                        paddingVertical: sizeHelper.calHp(3),
                        alignSelf:"flex-end",
                        gap:sizeHelper.calWp(10)
                      }}
                    >
                         <GradientText
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <CustomText
                        text={"رؤية الطلب"}
                        size={28}
                        fontFam={fonts.IBMPlexSansArabic_Bold}
                        fontWeight="700"
                      />
                    </GradientText>

                     <GradientOrderHistory
            width={sizeHelper.calWp(40)}
            height={sizeHelper.calWp(40)}
          />

                    </TouchableOpacity>

                    <View>
                      <CustomText
                        text={`رقم المعرف: ${item?.Id_number}`}
                        size={21}
                        style={{ textAlign: "right" }}
                        color={theme.colors.jet_black}
                      />

                      <CustomText
                        text={`الدفع ${item?.method}`}
                        size={21}
                        style={{ textAlign: "right" }}
                        color={theme.colors.jet_black}
                      />

                      <CustomText
                        text={item?.date}
                        size={21}
                        style={{ textAlign: "right" }}
                        color={theme.colors.jet_black}
                      />
                    </View>
                  </View>

                
                </View>

      )
    }

  return (
    <>

     <ScreenLayout style={{ paddingHorizontal: 0 }}>
      <View style={{ paddingHorizontal: sizeHelper.calWp(30) }}>
        <CustomHeader title={"سجل الطلبات"} />
      </View>

      <View style={{ paddingTop: sizeHelper.calHp(20) }}>
        <CustomText
          text={"الطلبات السابقة"}
          size={30}
          style={{ alignSelf: "flex-end", marginRight: sizeHelper.calWp(30) }}
          fontWeight="700"
          fontFam={fonts.IBMPlexSansArabic_Bold}
        />

        <FlatList
          data={PreviousOrdersData}
          scrollEnabled={true}
          contentContainerStyle={{
            gap: sizeHelper.calWp(20),
            paddingHorizontal: sizeHelper.calWp(30),
            paddingBottom: sizeHelper.calHp(20),
          }}
          renderItem={PreviousOrderItem}
        />
      </View>
    </ScreenLayout>


    <ViewOrderModal
    setModalVisible={setIsViewOrderModal}
    isModalVisible={isViewOrderModal}

    />


    </>
   
  );
};

export default OrderHistory;
const styles = StyleSheet.create({});
