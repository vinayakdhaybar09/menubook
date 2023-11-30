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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const Signin = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        navigation.navigate("bottomtabs");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.signupPage}>
      <Text style={styles.authTitle}>Sign In</Text>

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
        <MaterialCommunityIcons name="lock-outline" size={24} />
        <TextInput
          keyboardType="visible-password"
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
        onPress={() => handleSignin()}
      >
        <Text style={styles.authSubmitBtnTxt}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.authInst}>
        Don't have an account?
        <Text
          style={styles.redirectLink}
          onPress={() => navigation.navigate("signup")}
        >
          {" "}
          Sign up
        </Text>
      </Text>
      <Text onPress={() => navigation.navigate("bottomtabs")}>Skip</Text>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  signupPage: {
    // backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  authTitle: {
    color: "#514EB6",
    fontSize: 30,
    fontWeight: "500",
    // marginTop: 50,
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
    // marginTop: "auto",
  },
  redirectLink: {
    color: "#514EB6",
  },
});
