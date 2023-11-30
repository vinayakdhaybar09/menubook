import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import resImg from "../../assets/resImg.jpg";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BookingConfirm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bookingConfirmPage}>
      <View></View>
      <View style={styles.bookingConfirmInfo}>
        <Text style={styles.bookingConfirmText}>Table booked successfully</Text>
        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => navigation.navigate("Restaurents")}
        >
          <Text style={styles.bookBtnText}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.checkText}>Check Bookings</Text>
      </View>

      <Image source={resImg} style={styles.bookingConfirmImg} />
    </View>
  );
};

export default BookingConfirm;

const styles = StyleSheet.create({
  bookingConfirmPage: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    alignItems: "center",
  },
  bookingConfirmInfo: {
    alignItems: "center",
    gap: 10,
  },
  bookingConfirmText: {
    color: "#514EB6",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "600",
  },
  bookingConfirmImg: {
    width: "100%",
    height: 200,
    // marginTop: "auto",
  },
  checkText: {
    color: "#514EB6",
  },
  bookBtn: {
    backgroundColor: "#514EB6",
    borderRadius: 8,
    paddingVertical: 16,
    width: 200,
    marginTop: 30,
  },
  bookBtnText: {
    color: "white",
    textAlign: "center",
  },
});
