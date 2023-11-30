import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGC3JYd-THdJHtvD6V9XtPho-9zas7M9I",
  authDomain: "menubook-53719.firebaseapp.com",
  projectId: "menubook-53719",
  storageBucket: "menubook-53719.appspot.com",
  messagingSenderId: "433704381154",
  appId: "1:433704381154:web:ac6a4dca082426684fccbb",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
