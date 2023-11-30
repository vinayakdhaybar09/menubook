import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
  uploadString,
} from "firebase/storage";
import { auth, db, storage } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const AddRestaurant = () => {
  const navigation = useNavigation();
  const [resName, setResName] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [type, setType] = useState();
  const [speciality, setSpeciality] = useState();
  const [image, setImage] = useState(null);
  const [percent, setPercent] = useState();

  const handleAddImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result);
    }
  };

  // const handleAddRes = async () => {};
  const handleAddRes = async () => {
    try {
      if (image != null) {
        const response = await fetch(image?.assets[0].uri);
        const blob = await response.blob();

        const uploadRef = ref(storage, `${resName}/${Date.now()}`);
        const snapshot = await uploadBytes(uploadRef, blob);

        const url = await getDownloadURL(uploadRef);

        console.log("Image URL:", url);

        if (auth?.currentUser) {
          setDoc(doc(db, "restaurants", auth?.currentUser.uid), {
            resId: Date.now(),
            uid: auth?.currentUser.uid,
            resName: resName,
            phoneNo: phone,
            city: city,
            resType: type,
            resSpeciallity: speciality,
            resImg: url,
          }).then(() => {
            navigation.navigate("addmenu", { resName: resName });
          });
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <ScrollView style={styles.scrollViewStyle}>
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
          <TextInput
            placeholder="Restaurant name"
            style={styles.inputField}
            onChangeText={(text) => setResName(text)}
          />
          <TextInput
            placeholder="Contact no."
            style={styles.inputField}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            placeholder="City"
            style={styles.inputField}
            onChangeText={(text) => setCity(text)}
          />
          <View style={styles.dropDownField}>
            <Picker
              placeholder="Restaurant type"
              selectedValue={type}
              onValueChange={(itemValue, itemIndex) => setType(itemValue)}
            >
              <Picker.Item label="Choose..." value="" />
              <Picker.Item label="Veg" value="veg" />
              <Picker.Item label="Non-Veg" value="nonveg" />
              <Picker.Item label="Both" value="both" />
            </Picker>
          </View>
          <View style={styles.dropDownField}>
            <Picker
              placeholder="Restaurant type"
              selectedValue={speciality}
              onValueChange={(itemValue, itemIndex) => setSpeciality(itemValue)}
            >
              <Picker.Item label="Choose..." value="" />
              <Picker.Item label="North indian food" value="north" />
              <Picker.Item label="South indian food" value="south" />
              <Picker.Item label="Chinese" value="chinese" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.addImageView} onPress={handleAddImg}>
            <Ionicons name="image-outline" size={24} color="black" />
            <Text>+ add restaurant image</Text>
          </TouchableOpacity>
          {image && (
            <Image
              source={{ uri: image.assets[0].uri }}
              style={styles.imgStyle}
            />
          )}
          <TouchableOpacity style={styles.bookBtn} onPress={handleAddRes}>
            <Text style={styles.bookBtnText}>Add Restaurant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddRestaurant;

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
  dropDownField: {
    borderWidth: 1,
    borderColor: "#514EB6",
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
    borderRadius: 8,
    paddingVertical: 12,
  },
  bookBtnText: {
    color: "white",
    textAlign: "center",
  },
  imgStyle: {
    width: "100%",
    height: 100,
  },
});
