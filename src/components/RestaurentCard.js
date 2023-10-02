import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const restaurantsData = [
  {
    res_no: 1,
    uri: "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/4ad20-pune-restaurants.jpg?fit=1000%2C667&ssl=1",
    res_name: "One eight restaurant",
    rating: "4.5",
    lacation: "Ram Nagar",
    time_status: "Open Now",
  },
  {
    res_no: 2,
    uri: "https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2017/09/image1-1030x538.jpg",
    res_name: "One eight restaurant",
    rating: "4.5",
    lacation: "Ram Nagar",
    time_status: "Open Now",
  },
  {
    res_no: 3,
    uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    res_name: "One eight restaurant",
    rating: "4.5",
    lacation: "Ram Nagar",
    time_status: "Open Now",
  },
];

const RestaurentCard = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.allRestaurents}>
    {
        restaurantsData?.map((item)=>{
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("restaurentinfo")}
                activeOpacity={0.7}
                style={styles.restaurentContainer}
                key={item.res_no}
              >
                <Image
                  style={styles.restaurentImage}
                  source={{
                    uri: item.uri,
                  }}
                />
                <Text style={styles.restaurentName}>{item.res_name}</Text>
                <View style={styles.restaurentInfoContainer}>
                  <View style={styles.restaurentInfoBox}>
                    <AntDesign name="star" size={16} color="#F6C74E" />
                    <Text style={styles.restaurentInfoText}>{item.rating}</Text>
                  </View>
                  <Text>|</Text>
                  <View style={styles.restaurentInfoBox}>
                    <Ionicons
                      name="ios-location-outline"
                      size={18}
                      color="#8E8E8E"
                    />
                    <Text style={styles.restaurentInfoText}>
                      {item.lacation}
                    </Text>
                  </View>
                  <Text>|</Text>
                  <View style={styles.restaurentInfoBox}>
                    <Feather name="clock" size={16} color="#8E8E8E" />
                    <Text style={styles.restaurentInfoText}>
                      {item.time_status}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
        })
    }
      
    </View>
  );
}

export default RestaurentCard

const styles = StyleSheet.create({
    allRestaurents:{
        gap:18
    },
  restaurentContainer: {
    borderRadius: 8,
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
  restaurentImage: {
    height: 100,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  restaurentName: {
    fontSize: 16,
    fontWeight: 600,
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  restaurentInfoContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
    paddingHorizontal: 10,
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
});