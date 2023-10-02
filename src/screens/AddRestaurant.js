import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


const AddRestaurant = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.addRestaurantPage}>
      <TouchableOpacity>
        <Ionicons
          name="ios-arrow-back"
          size={28}
          color="black"
          style={styles.backBtn}
        />
      </TouchableOpacity>
      <View style={styles.inputFieldView}>
        <TextInput placeholder="Restaurant name" style={styles.inputField} />
        <TextInput placeholder="Contact no." style={styles.inputField} />
        <TextInput placeholder="Address" style={styles.inputField} />
        <TouchableOpacity style={styles.addImageView}>
          <Ionicons name="image-outline" size={24} color="black" />
          <Text>+ add image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => navigation.navigate("addmenu")}
        >
          <Text style={styles.bookBtnText}>Add Restaurant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddRestaurant;

const styles = StyleSheet.create({
  addRestaurantPage: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  backBtn: {
    marginTop: 20,
  },
  inputFieldView: {
    rowGap: 20,
    marginTop: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#514EB6",
    padding: 10,
  },
  addImageView: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#514EB6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
});
