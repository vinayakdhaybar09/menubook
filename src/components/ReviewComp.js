import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ReviewComp = () => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewBox}>
        <Image
          style={styles.reviewImg}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          }}
        />
        <View style={styles.reviewInfo}>
          <View style={styles.reviewNameFlex}>
            <Text style={styles.reviewName}>Vinayak Dhaybar</Text>
            <View style={styles.reviewStar}>
              <Text>Star</Text>
            </View>
          </View>
          <Text style={styles.reviewDesc}>
            This cozy restaurant has left the best impressions! Hospitable
            hosts, delicious dishes, beautiful presentation, read more ...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewComp;

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 12,
    marginTop:16
  },
  reviewBox: {
    flexDirection: "row",
    borderRadius:8,
    padding: 8,
    width: "100%",
    backgroundColor: "#fff",
    // ...Platform.select({
    //   ios: {
    //     shadowOffset: { width: 0, height: 1 },
    //     shadowColor: "rgba(0, 0, 0, 0.25)",
    //     shadowOpacity: 1,
    //     shadowRadius: 5,
    //   },
    //   android: {
    //     elevation: 5,
    //   },
    // }),
  },
  reviewImg: {
    width: "10%",
    aspectRatio: 1,
    borderRadius: 50,
  },
  reviewInfo: {
    width: "90%",
    paddingHorizontal: 8,
  },
  reviewNameFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewName: {},
  reviewDesc: {
    fontSize: 12,
    marginTop: 8,
  },
});
