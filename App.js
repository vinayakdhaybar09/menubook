import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Restaurents from "./src/screens/Restaurents";
import RestaurentInfo from "./src/screens/RestaurentInfo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Scan from "./src/screens/Scan";
import Shedule from "./src/screens/Shedule";
import Profile from "./src/screens/Profile";
import AddRestaurant from "./src/screens/AddRestaurant";
import AddMenu from "./src/screens/AddMenu";
import Signup from "./src/screens/Signup";
import Signin from "./src/screens/Signin";
import BookTable from "./src/screens/BookTable";
import BookingConfirm from "./src/screens/BookingConfirm";
import { auth } from "./src/config/firebaseConfig";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    if (auth.currentUser) {
      console.log("user is login: ", auth.currentUser);
    } else {
      console.log("please login");
    }
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="bottomtabs" component={BottomNavigator} />
        <Stack.Screen name="restaurentinfo" component={RestaurentInfo} />
        <Stack.Screen name="booktable" component={BookTable} />
        <Stack.Screen name="bookingconfirm" component={BookingConfirm} />
        <Stack.Screen name="addrestaurent" component={AddRestaurant} />
        <Stack.Screen name="addmenu" component={AddMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#514EB6",
        tabBarInactiveTintColor: "#8E8E8E",
      }}
    >
      <Tab.Screen
        name="Restaurents"
        component={Restaurents}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="chef-hat" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="line-scan" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shedule"
        component={Shedule}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome5 name="user-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
