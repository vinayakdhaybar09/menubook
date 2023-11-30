import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Modal, RadioButton } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../config/firebaseConfig";
import { addDoc, arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const AddMenuModal = ({ resData }) => {
  const [foodTitle, setFoodTitle] = useState();
  const [foodType, setFoodType] = useState();
  const [foodPrice, setFoodPrice] = useState();
  const [foodDesc, setFoodDesc] = useState();
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const resName = "kamath";

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

  const handleAddMenu = async () => {
    try {
      if (image != null) {
        const response = await fetch(image?.assets[0].uri);
        const blob = await response.blob();

        const uploadRef = ref(storage, `${resData?.resName}/${Date.now()}`);
        const snapshot = await uploadBytes(uploadRef, blob);

        const url = await getDownloadURL(uploadRef);

        console.log("Image URL:", url);

        // if (resData) {
        console.log("step 2");
        const newMenuItem = {
          foodId: Date.now(),
          foodTitle: foodTitle,
          foodPrice: foodPrice,
          foodType: foodType,
          foodDesc: foodDesc,
          foodImg: url,
        };
        const docRef = doc(db, "restaurants", "Ap3j6UJcZ2Q4GVOJbdUtE3ZnO2I2");
        await setDoc(docRef, {
          foodMenu: arrayUnion(newMenuItem),
        }).then(() => {
          console.log("step 3");
          navigation.navigate("bottomtabs");
        });
        // }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.addmenuModal}>
        <TextInput
          placeholder="Food title"
          style={styles.inputField}
          onChangeText={(value) => setFoodTitle(value)}
        />
        <TextInput
          placeholder="Food price"
          style={styles.inputField}
          keyboardType="number-pad"
          onChangeText={(value) => setFoodPrice(value)}
        />
        <TextInput
          multiline={true}
          numberOfLines={2}
          placeholder="Food desc."
          onChangeText={(value) => setFoodDesc(value)}
          style={styles.inputField}
        />
        <RadioButton.Group
          onValueChange={(value) => setFoodType(value)}
          value={foodType}
        >
          <RadioButton.Item label="Veg" value="veg" />
          <RadioButton.Item label="Non veg" value="nonveg" />
          <RadioButton.Item label="Both" value="both" />
        </RadioButton.Group>
        {image && (
          <Image
            source={{ uri: image.assets[0].uri }}
            style={styles.imgStyle}
          />
        )}
        <TouchableOpacity style={styles.addImageView} onPress={handleAddImg}>
          <Ionicons name="image-outline" size={24} color="black" />
          <Text>+ add image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookBtn} onPress={handleAddMenu}>
          <Text style={styles.bookBtnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const AddMenu = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [resData, setResData] = useState();

  const userUid = "Ap3j6UJcZ2Q4GVOJbdUtE3ZnO2I2";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "restaurants", "Ap3j6UJcZ2Q4GVOJbdUtE3ZnO2I2");
        const docSnap = await getDoc(docRef);

        if (docSnap?.exists()) {
          const data = docSnap?.data();
          console.log(data);
          setResData(data);
        } else {
          // No user data found with the given UID.
          console.log("No user data found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

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
        <Text style={styles.addMenuText}>+ add menu </Text>
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
        <AddMenuModal resData={resData} />
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
    textAlign: "center",
    color: "#fff",
  },
  addImageView: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#514EB6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  dropDownField: {
    borderWidth: 1,
    borderColor: "#514EB6",
    // zIndex: 100,
  },
  addMenuText: {
    marginTop: 6,
  },
  radioBtn: {
    color: "#000",
  },
  imgStyle: {
    width: 80,
    height: 80,
  },
});
