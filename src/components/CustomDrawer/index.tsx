import React, { useState } from "react";
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

interface Props {
  isModalVisible?: boolean;
  setModalVisible?: any;
  modalBackgroundColor?: any;
  setIsLogoutVisible?: any;
  signatureBottomSheetRef?: any;
}

const CustomMenu: React.FC<Props> = ({
  isModalVisible,
  setModalVisible,
  modalBackgroundColor,
  setIsLogoutVisible,
  signatureBottomSheetRef,
}) => {
  const windowWidth = useWindowDimensions().width;
  // const [selectedMenu,setSelectedMenu]=useState(-1)
 
//   const menuData = [
//     {
//       title: "Profile",
//       icon: images.profile,

//       onPress: (title: any) => {
//         dispatch(setSelectedMenu(title));
//         setModalVisible(false);
//         setTimeout(() => {
//           setSelectedMenu(-1);

//           navigation.navigate("Profile", { id: authUser?.id });
//         }, 500);
//       },
//     },

//     {
//       title: "Invoices",
//       icon: images.invoice,

//       onPress: (title: any) => {
//         dispatch(setSelectedMenu(title));
//         setModalVisible(false);
//         setTimeout(() => {
//           navigation.navigate("Invoices");
//         }, 500);
//       },
//     },
//     {
//       title: "Change Password",
//       icon: images.lock,

//       onPress: (title: any) => {
//         dispatch(setSelectedMenu(title));
//         setModalVisible(false);
//         setTimeout(() => {
//           navigation.navigate("UpdatePassword");
//         }, 500);
//       },
//     },

//     {
//       title: "Videos",
//       icon: images.video_player,

//       onPress: (title: any) => {
//         dispatch(setSelectedMenu(title));
//         setModalVisible(false);
//         setTimeout(() => {
//           navigation.navigate("VideoGuide");
//         }, 500);
//       },
//     },
//   ];

  return (
    <>
      <Modal
        style={{
          flex: 1,
          margin: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          //   backgroundColor: isModalVisible?  'rgba(0,0,0,.4)':"transparent",
        }}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
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
          
        </View>
      </Modal>

     
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "70%",
    paddingTop: "7%",
    backgroundColor: theme.colors.white,
    gap: sizeHelper.calHp(15),
    paddingBottom: sizeHelper.calHp(50),
    alignSelf: "flex-start",
  },
  
});

export default CustomMenu;
