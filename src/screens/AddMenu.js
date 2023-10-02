import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native-paper";

const AddMenuModal = () => {
  return (
    <View style={styles.addmenuModal}>
      <TextInput placeholder="Food title" style={styles.inputField} />
      <TextInput placeholder="Food desc." style={styles.inputField} />
      <TextInput placeholder="Food price" style={styles.inputField} keyboardType="number-pad" />
      <TouchableOpacity style={styles.addImageView}>
        <Ionicons name="image-outline" size={24} color="black" />
        <Text>+ add image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.bookBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddMenu = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.addMenuPage}>
      <TouchableOpacity style={styles.backBtn}>
        <Ionicons
          name="ios-arrow-back"
          size={28}
          color="black"
          style={styles.backBtn}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addMenuBtn} onPress={showModal}>
        <MaterialIcons name="restaurant-menu" size={24} color="black" />
        <Text style={styles.bookBtnText}>+ add menu</Text>
      </TouchableOpacity>
      <View style={styles.menuCard}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg",
          }}
          alt="paneer"
          style={styles.foodImg}
        />
        <View style={styles.menuInfo}>
          <Text style={styles.menuTitle}>Butter panner</Text>
          <Text style={styles.menuDesc}>
            lorem sbfcjb cjhdbsc mbssx bg shdj kiqwer
          </Text>
        </View>
        <Text style={styles.menuPrice}>125 /-</Text>
      </View>

      <Modal visible={visible} onDismiss={hideModal}>
        <AddMenuModal />
      </Modal>
    </View>
  );
};

export default AddMenu;

const styles = StyleSheet.create({
  addMenuPage: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  backBtn: {
    marginVertical: 10,
  },
  addMenuBtn: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#514EB6",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    marginBottom: 20,
    borderRadius: 10,
  },
  menuCard: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  foodImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },

  menuInfo: {
    width: "60%",
  },
  menuPrice: {
    alignSelf: "center",
    color: "#514EB6",
    fontWeight: "500",
    fontSize: 16,
  },
  menuDesc: {
    color: "#8E8E8E",
    fontSize: 12,
  },
  addmenuModal: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    rowGap: 20,
    borderRadius: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#514EB6",
    padding: 10,
    borderRadius: 4,
  },
  bookBtn: {
    backgroundColor: "#514EB6",
    margin: 12,
    borderRadius: 8,
    paddingVertical: 12,
  },
  bookBtnText: {
    color: "white",
    textAlign: "center",
  },
  addImageView: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#514EB6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
