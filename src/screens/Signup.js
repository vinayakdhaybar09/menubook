import React, { useState } from "react";
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const navigation = useNavigation();

  const handleSignup = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredentials) => {
          console.log(userCredentials?.user.uid);
          if (userCredentials?.user.uid != null) {
            await setDoc(doc(db, "users", userCredentials?.user.uid), {
              uid: userCredentials?.user.uid,
              email: email,
              name: name,
              city: city,
              phone: phone,
              pwd: password,
            })
              .then(() => navigation.navigate("signin"))
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={styles.signupScrollView}>
      <View style={styles.signupPage}>
        <Text style={styles.authTitle}>Sign Up</Text>
        <View style={styles.inputout}>
          <AntDesign name="user" size={24} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputout}>
          <Entypo name="email" size={24} />
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputout}>
          <Feather name="smartphone" size={24} />
          <TextInput
            keyboardType="name-phone-pad"
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <View style={styles.inputout}>
          <Ionicons name="location-outline" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="City"
            onChangeText={(text) => setCity(text)}
          />
        </View>
        <View style={styles.inputout}>
          <MaterialCommunityIcons name="lock-outline" size={24} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
          />

          <Octicons
            name={showpassword == false ? "eye-closed" : "eye"}
            size={24}
            color="black"
            onPress={() => setShowpassword(!showpassword)}
          />
        </View>

        <TouchableOpacity
          style={styles.authSubmitBtn}
          onPress={() => handleSignup()}
        >
          <Text style={styles.authSubmitBtnTxt}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.authInst}>
          Already have an account?
          <Text
            style={styles.redirectLink}
            onPress={() => navigation.navigate("signin")}
          >
            {" "}
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signupScrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  signupPage: {
    flex: 1,
    alignItems: "center",
    gap: 24,
  },
  authTitle: {
    color: "#514EB6",
    fontSize: 30,
    fontWeight: "500",
    marginTop: 50,
  },
  inputout: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "80%",
    borderRadius: 10,
    padding: 10,
    gap: 10,
    elevation: 15,
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
  },
  authSubmitBtn: {
    width: "80%",
    backgroundColor: "#514EB6",
    padding: 12,
    borderRadius: 10,
  },
  authSubmitBtnTxt: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  or: {
    color: "#514EB6",
    fontSize: 14,
    fontWeight: "600",
  },
  authInst: {
    marginTop: "auto",
  },
  redirectLink: {
    color: "#514EB6",
  },
});
