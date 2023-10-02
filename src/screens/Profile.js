import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";

const resData = {
  id: 12345,
};

const ShowQrCode = () => {
  return (
    <View style={styles.showQrCodeModal}>
      <QRCode value={JSON.stringify(resData)} size={200} />
    </View>
  );
};

const Profile = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.profilePage}>
      <TouchableOpacity>
        <Ionicons
          name="ios-arrow-back"
          size={28}
          color="black"
          style={styles.backBtn}
        />
      </TouchableOpacity>
      <View style={styles.userView}>
        <Feather name="user" size={50} color="#fff" />
      </View>
      <Text style={styles.userName}>Vinayak Dhaybar</Text>
      <View style={styles.profileOptionsView}>
        <TouchableOpacity style={styles.profileOptionsBtn}>
          <Text style={styles.profileOptions}>Ongoing Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileOptionsBtn}>
          <Text style={styles.profileOptions}>Booking History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileOptionsBtn}
          onPress={() => navigation.navigate("addrestaurent")}
        >
          <Text style={styles.profileOptions}>Restaurant Owner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileOptionsBtn} onPress={showModal}>
          <Text style={styles.profileOptions}>Get QR code</Text>
        </TouchableOpacity>
        <Modal visible={visible} onDismiss={hideModal}>
          <ShowQrCode />
        </Modal>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profilePage: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  backBtn: {
    marginTop: 20,
  },
  userView: {
    width: 100,
    height: 100,
    backgroundColor: "#514EB6",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  userName: {
    alignSelf: "center",
  },

  profileOptionsView: {
    marginTop: 50,
  },

  profileOptionsBtn: {
    borderBottomColor: "#8E8E8E",
    borderBottomWidth: 1,
  },

  profileOptions: {
    fontSize: 20,
    color: "#8E8E8E",
    padding: 16,
  },
  showQrCodeModal: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
  },
});
