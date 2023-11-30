import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import { Platform } from "react-native";
import MenuComp from "../components/MenuComp";
import ReviewComp from "../components/ReviewComp";
import { useNavigation } from "@react-navigation/native";

const restaurantDetailInfo = {
  res_no: 1,
  uri: "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/4ad20-pune-restaurants.jpg?fit=1000%2C667&ssl=1",
  res_name: "One eight restaurant",
  rating: "4.5",
  lacation: "Ram Nagar",
  time_status: "Open Now",
  res_desc:
    "Mapple Hotels offers hospitality to its guests coming from all around the world. We are focussed to deliver the best value, quality and superior customer service.",
  price: 200,
};

const RestaurentInfo = () => {
  const [showFullText, setShowFullText] = useState(false);
  const navigation = useNavigation();

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const renderText = () => {
    if (showFullText) {
      return restaurantDetailInfo?.res_desc;
    } else {
      const words = restaurantDetailInfo?.res_desc.split(" ");
      const limitedWords = words.slice(0, 150).join(" ");

      return (
        <>
          {limitedWords}...
          <Text style={{ color: "#8E8E8E" }} onPress={toggleShowFullText}>
            Read More
          </Text>
        </>
      );
    }
  };

  return (
    <View style={styles.restaurentInfoContainer}>
      <ScrollView>
        <Image
          source={{ uri: restaurantDetailInfo.uri }}
          style={styles.restaurentImage}
        />
        <View style={styles.restaurentNameBox}>
          <Text style={styles.restaurentName}>
            {restaurantDetailInfo.res_name}
          </Text>
          <TouchableOpacity style={styles.followBtn} activeOpacity={0.6}>
            <Image
              source={require("../../assets/icons/follow.png")}
              style={styles.followIcon}
            />
            <Text style={styles.followIconText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.restaurentInfo}>
          <View style={styles.restaurentInfoBox}>
            <AntDesign name="star" size={16} color="#F6C74E" />
            <Text style={styles.restaurentInfoText}>
              {restaurantDetailInfo.rating}
            </Text>
          </View>
          <Text>|</Text>
          <View style={styles.restaurentInfoBox}>
            <Ionicons name="ios-location-outline" size={18} color="#8E8E8E" />
            <Text style={styles.restaurentInfoText}>
              {restaurantDetailInfo.lacation}
            </Text>
          </View>
          <Text>|</Text>
          <View style={styles.restaurentInfoBox}>
            <Feather name="clock" size={16} color="#8E8E8E" />
            <Text style={styles.restaurentInfoText}>
              {restaurantDetailInfo.time_status}
            </Text>
          </View>
        </View>
        <Text style={styles.restaurentDesc}>{renderText()}</Text>

        <View style={styles.restaurentInfoTag}>
          <TouchableOpacity activeOpacity={0.8} style={styles.restaurentTagBox}>
            <View style={styles.restaurentTagIcon}>
              <FontAwesome name="rupee" size={24} color="#8E8E8E" />
            </View>
            <Text style={styles.restaurentTagText}>
              {restaurantDetailInfo?.price}/-
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.restaurentTagBox}>
            <View style={styles.restaurentTagIcon}>
              <Ionicons name="call-outline" size={24} color="#8E8E8E" />
            </View>
            <Text style={styles.restaurentTagText}>Call Up</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.restaurentTagBox}>
            <View style={styles.restaurentTagIcon}>
              <Feather name="clock" size={24} color="#8E8E8E" />
            </View>
            <Text style={styles.restaurentTagText}>Shedule</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.restaurentTagBox}>
            <View style={styles.restaurentTagIcon}>
              <Ionicons name="md-location-outline" size={24} color="#8E8E8E" />
            </View>
            <Text style={styles.restaurentTagText}>Map</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.restaurentMenuTitle}>Menu</Text>
        <View style={styles.restaurentMenuView}>
          <MenuComp />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.bookBtn}
        onPress={() => navigation.navigate("booktable")}
      >
        <Text style={styles.bookBtnText}>Book a table</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurentInfo;

const styles = StyleSheet.create({
  restaurentInfoContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  restaurentImage: {
    height: 230,
  },
  restaurentNameBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  restaurentName: {
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 12,
  },
  followBtn: {
    flexDirection: "row",
    backgroundColor: "#514EB6",
    height: 36,
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  followIcon: {
    height: 12,
    width: 15,
  },
  followIconText: {
    color: "#fff",
  },
  restaurentInfo: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  restaurentInfoBox: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  restaurentInfoText: {
    color: "#8E8E8E",
    fontSize: 12,
  },
  restaurentDesc: {
    fontSize: 12,
    paddingHorizontal: 20,
  },
  restaurentInfoTag: {
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  restaurentTagBox: {
    alignItems: "center",
    gap: 4,
    width: 100,
  },
  restaurentTagIcon: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 1 },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  restaurentTagText: {
    color: "#8E8E8E",
    fontSize: 12,
  },
  restaurentInfoOpt: {
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  bookBtn: {
    backgroundColor: "#514EB6",
    margin: 12,
    borderRadius: 8,
    paddingVertical: 12,
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  bookBtnText: {
    color: "white",
    textAlign: "center",
  },
  restaurentMenuTitle: {
    paddingHorizontal: 20,
    // fontSize: 18,
    fontWeight: "600",
    marginTop: 20,

    // paddingVertical:10
    textAlign:"center"
  },
  restaurentMenuView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
