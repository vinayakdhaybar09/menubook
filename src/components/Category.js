import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Category = () => {
  return (
    <ScrollView
      style={styles.categoryContainer}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.categoryInnerContainer}>
        <View style={styles.categoryBox}>
          <MaterialIcons name="restaurant" size={24} color="white" />
          <Text style={styles.categoryText}>All</Text>
        </View>
        <View style={styles.categoryBox}>
          <FontAwesome5 name="carrot" size={24} color="white" />
          <Text style={styles.categoryText}>Veg</Text>
        </View>
        <View style={styles.categoryBox}>
          <MaterialCommunityIcons
            name="food-drumstick-outline"
            size={24}
            color="white"
          />
          <Text style={styles.categoryText}>Non-Veg</Text>
        </View>
        <View style={styles.categoryBox}>
          <MaterialCommunityIcons
            name="bowl-mix-outline"
            size={24}
            color="white"
          />
          <Text style={styles.categoryText}>Chinese</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryContainer: {
    // marginVertical: 24,
    height: 130,
  },
  categoryInnerContainer:{
    display:"flex",
    flexDirection:"row",
    gap:24
  },
  categoryBox: {
    backgroundColor: "#514EB6",
    width: 76,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 4,
  },
  categoryText: {
    color: "white",
    fontSize:12
  },
});
