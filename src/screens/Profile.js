import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";
import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";

const ShowQrCode = () => {
  const qrValue = "12345";
  return (
    <View style={styles.showQrCodeModal}>
      <QRCode value={qrValue} color="#000" size={200} backgroundColor="#fff" />
      <TouchableOpacity style={styles.downloadBtn}>
        <Text style={styles.downloadBtnText}>Download QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const SignOutAlert = () => {
  const navigation = useNavigation()
  const handleSignout = () => {
    if (auth.currentUser) {
      signOut(auth).then(()=> navigation.navigate("signin")).catch(("Something went wrong"))
    }
  };
  return (
    <View style={styles.showQrCodeModal}>
      <Text>Are you sure ?</Text>
      <TouchableOpacity style={styles.downloadBtn} onPress={handleSignout}>
        <Text style={styles.downloadBtnText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const Profile = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [signOutModal, setSignOutModal] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    // <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
    <View style={styles.profilePage}>
      <TouchableOpacity
        style={styles.resBtn}
        onPress={() => navigation.navigate("addrestaurent")}
      >
        <Text style={styles.resBtnText}>Restaurant Owner</Text>
      </TouchableOpacity>
      <View style={styles.userView}>
        <Feather name="user" size={50} color="#fff" />
      </View>
      <Text style={styles.userName}>Vinayak Dhaybar</Text>
      <View style={styles.profileOptionsView}>
        <View style={styles.profileOptionsBtn}>
          <Ionicons name="phone-portrait-sharp" size={24} color="gray" />
          <Text style={styles.profileOptions}>9876543210</Text>
        </View>
        <View style={styles.profileOptionsBtn}>
          <MaterialCommunityIcons name="email-outline" size={24} color="gray" />
          <Text style={styles.profileOptions}>vinayakdhaybar09@gmail.com</Text>
        </View>
        <View style={styles.profileOptionsBtn}>
          <Ionicons name="location-sharp" size={24} color="gray" />
          <Text style={styles.profileOptions}>Pune</Text>
        </View>
        <TouchableOpacity
          style={styles.profileOptionsBtn}
          onPress={() => navigation.navigate("addrestaurent")}
        >
          <Text style={styles.profileOptions}>Restaurant Owner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileOptionsBtn} onPress={showModal}>
          <Text style={styles.profileOptions}>Get QR code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileOptionsBtn}
          onPress={() => setSignOutModal(true)}
        >
          <Text style={styles.profileOptions}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={visible} onDismiss={hideModal} style={{ flex: 1 }}>
        <ShowQrCode />
      </Modal>

      <Modal
        visible={signOutModal}
        onDismiss={() => setSignOutModal(false)}
        style={{ flex: 1 }}
      >
        <SignOutAlert />
      </Modal>
    </View>
    // {/* </ScrollView> */}
  );
};

export default Profile;

const styles = StyleSheet.create({
  profilePage: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  resBtn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#514EB6",
    alignSelf: "flex-end",
    marginTop: 30,
  },
  resBtnText: {
    color: "#514EB6",
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
    flexDirection: "row",
    alignItems: "center",
  },

  profileOptions: {
    fontSize: 16,
    color: "#3f3f3f",
    padding: 16,
  },
  showQrCodeModal: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 40,
    alignItems: "center",
    borderRadius: 10,
  },

  downloadBtn: {
    width: "100%",
    backgroundColor: "#514EB6",
    marginTop: 40,
    borderRadius: 8,
    paddingVertical: 12,
  },
  downloadBtnText: {
    color: "white",
    textAlign: "center",
  },
});
