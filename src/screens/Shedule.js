import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Shedule = () => {
  return (
    <View style={styles.shedulePage}>
      <Text style={styles.sheduleTitle}>Shedulde</Text>
      <View style={styles.sheduleCard}>
        <View style={styles.sheduleDateTime}>
          <Text style={styles.sheduleDateText}>25</Text>
          <Text style={styles.sheduleMonthText}>Oct</Text>
        </View>
        <View style={styles.sheduleInfo}>
          <Text style={styles.sheduleTime}>09:30 PM</Text>
          <Text style={styles.sheduleTime}>3 People</Text>
          <Text style={styles.sheduleTime}>Rameshwaram cafe, Banglore</Text>
        </View>
      </View>
    </View>
  );
};

export default Shedule;

const styles = StyleSheet.create({
  shedulePage: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  sheduleTitle:{
    fontSize:20,
    fontWeight:"600",
    paddingVertical:30,
    textAlign:"center"
  },
  sheduleCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // gap: 20,
    borderWidth: 2,
    borderColor: "#514EB6",
    // padding: 16,
    borderRadius: 20,
  },
  sheduleDateTime: {
    alignItems: "center",
    width:"30%",
    backgroundColor:"#514EB6",
    padding:10,
    borderTopLeftRadius:18,
    borderBottomLeftRadius:18
  },
  sheduleDateText: {
    fontSize: 50,
    fontWeight: "900",
    color: "#fff",
  },
  sheduleMonthText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
  sheduleInfo:{
      width:"66%"
  },
  sheduleTime: {
    color: "#514EB6",
    fontSize: 16,
    flexWrap: "wrap",
    fontWeight: "600",
  },
});
