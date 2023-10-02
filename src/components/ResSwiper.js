import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';

const ResSwiper = ({ restaurantDetailInfo }) => {
    console.log("hello");
  return (
    <View>
      <Text>Heloo</Text>
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        dotColor={"gray"}
        activeDotColor={"black"}
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
      >
        <View style={styles.slide}>
          <Text>Heloo djwjd</Text>

          {/* <Image
            source={require(restaurantDetailInfo.uri1)}
            style={styles.image}
          /> */}
        </View>
        <View style={styles.slide}>
          <Text>Heloo djwjd</Text>

          {/* <Image
            source={{ uri: restaurantDetailInfo.uri2 }}
            style={styles.image}
          /> */}
        </View>
        <View style={styles.slide}>
          <Text>Heloo djwjd</Text>

          {/* <Image
            source={{ uri: restaurantDetailInfo.uri1 }}
            style={styles.image}
          /> */}
        </View>
      </Swiper>
    </View>
  );
};

export default ResSwiper

const styles = StyleSheet.create({
  offerSlider: {
    // width: "100%",
    height: 200,
    backgroundColor: "red",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  slide: {
    width: "100%",
    height: 200,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
//   buttonText: {
//     color: colors.text1,
//     fontSize: 40,
//     fontWeight: "500",
//     backgroundColor: "white",
//     borderRadius: 20,
//     width: 40,
//     height: 40,
//     textAlign: "center",
//     lineHeight: 40,
//   },
});