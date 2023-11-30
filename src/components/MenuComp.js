import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Platform } from "react-native";

const MenuComp = () => {
  return (
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
  );
};

export default MenuComp;

const styles = StyleSheet.create({
  menuCard: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    padding: 10,
    // borderWidth:1,
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
});
