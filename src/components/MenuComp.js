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
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.menuContainer}>
        <View style={styles.menuBox}>
          <Image
            style={styles.menuImg}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg",
            }}
          />
          <View style={styles.menuInfoBox}>
            <View style={styles.menuInfo}>
              <Text style={styles.menuInfoText}>Momos</Text>
              <Text style={styles.menuInfoText}>120/-</Text>
            </View>
            <TouchableOpacity style={styles.menuAddBtn}>
              <Text style={styles.menuAddBtnText}>Add + </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.menuBox}>
          <Image
            style={styles.menuImg}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg",
            }}
          />
          <View style={styles.menuInfoBox}>
            <View style={styles.menuInfo}>
              <Text style={styles.menuInfoText}>Momos</Text>
              <Text style={styles.menuInfoText}>120/-</Text>
            </View>
            <TouchableOpacity style={styles.menuAddBtn}>
              <Text style={styles.menuAddBtnText}>Add + </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.menuBox}>
          <Image
            style={styles.menuImg}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg",
            }}
          />
          <View style={styles.menuInfoBox}>
            <View style={styles.menuInfo}>
              <Text style={styles.menuInfoText}>Momos</Text>
              <Text style={styles.menuInfoText}>120/-</Text>
            </View>
            <TouchableOpacity style={styles.menuAddBtn}>
              <Text style={styles.menuAddBtnText}>Add + </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MenuComp;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    marginTop: 20,
    gap: 20,
  },
  menuBox: {
    borderRadius: 6,
    width: 200,
    height:162,
    padding: 6,
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 4 },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  menuImg: {
    width: "100%",
    height: 100,
    borderRadius:6
  },
  menuInfoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  menuInfoText: {
    fontSize: 12,
  },
  menuAddBtn: {
    backgroundColor: "#514EB6",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  menuAddBtnText: {
    color: "white",
  },
});
