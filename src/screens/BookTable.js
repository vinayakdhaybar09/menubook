import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BookTable = () => {
  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [time, setTime] = useState();
  const [mode, setMode] = useState("date");
  const navigation = useNavigation()

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const handleBtnClick = ()=>{
    navigation.navigate("bookingconfirm");
  }
  return (
    <View style={styles.bookTablePage}>
      <TouchableOpacity>
        <Ionicons
          name="ios-arrow-back"
          size={28}
          color="black"
          style={styles.backBtn}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.inputout}
        onPress={() => setShowDateModal(true)}
      >
        <Text style={styles.input}>Select Date</Text>
      </TouchableOpacity>
      {showDateModal && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onDateChange}
        />
      )}
      <TouchableOpacity
        style={styles.inputout}
        onPress={() => setShowTimeModal(true)}
      >
        <Text style={styles.input}>Select Time</Text>
      </TouchableOpacity>

      {showTimeModal && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={mode}
          is24Hour={true}
          onChange={onTimeChange}
        />
      )}

      <TextInput
        placeholder="Number of guest"
        keyboardType="number-pad"
        style={styles.inputout}
      />
      <TextInput
        multiline={true}
        numberOfLines={10}
        placeholder="Add note"
        style={styles.inputout}
      />

      <TouchableOpacity style={styles.bookBtn} onPress={handleBtnClick}>
        <Text style={styles.bookBtnText}>Confirm the table</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookTable;

const styles = StyleSheet.create({
  bookTablePage: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 20,
    gap: 20,
  },
  inputout: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
    padding: 16,
    elevation: 10,
    textAlignVertical:"top"
  },
  input: {
    color: "gray",
  },
  bookBtn: {
    backgroundColor: "#514EB6",
    borderRadius: 8,
    paddingVertical: 16,
  },
  bookBtnText: {
    color: "white",
    textAlign: "center",
  },
});
