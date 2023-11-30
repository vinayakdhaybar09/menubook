import {
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Category from "../components/Category";
import RestaurentCard from "../components/RestaurentCard";
import { collection, query, where, getDocs } from "firebase/firestore";

const Restaurents = () => {
  const getResData = async () => {
    const q = query(collection(db, "cities"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  useEffect(() => {
    getResData();
  }, []);

  return (
    <View style={styles.restaurentsContainer}>
      <Text style={styles.logo}>MENUBOOK</Text>
      <Text style={styles.restaurentsProfileName}>Welcome vinayak,</Text>
      <Text style={styles.restaurentsMsg}>Choose Your Happyday !</Text>
      <View style={styles.restaurentsSearchContainer}>
        <View style={styles.restaurentsSearchBar}>
          <TextInput
            placeholder="Search"
            value=""
            style={styles.restaurentsSearchInput}
          />
          <Ionicons name="ios-search" size={22} color="#0D0D0D" />
        </View>
        <View style={styles.restaurentsCamera}>
          <Feather name="camera" size={20} color="white" />
        </View>
        <View style={styles.restaurentsFilter}>
          <FontAwesome name="filter" size={22} color="#514EB6" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Category />
        <RestaurentCard />
      </ScrollView>
    </View>
  );
};

export default Restaurents;

const styles = StyleSheet.create({
  restaurentsContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 12,
  },
  logo: {
    color: "#514EB6",
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
  },
  restaurentsProfileName: {
    fontSize: 12,
    color: "#8E8E8E",
    marginTop: 10,
  },
  restaurentsMsg: {
    fontSize: 14,
  },
  restaurentsSearchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginVertical: 20,
  },
  restaurentsSearchBar: {
    shadowColor: "#000",
    width: "74%",
    backgroundColor: "#fff",
    borderRadius: 4,
    elevation: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  restaurentsSearchInput: {
    height: 46,
  },
  restaurentsCamera: {
    width: 46,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#514EB6",
    height: 46,
    borderRadius: 4,
  },
  restaurentsFilter: {
    // width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 46,
  },
});
