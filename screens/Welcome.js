import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";

const Welcome = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    return () => {
      navigation.setOptions({ headerShown: false });
    };
  }, []);

  const [fontsLoaded] = useFonts({
    Pacifico: require("../assets/fonts/Pacifico-Regular.ttf"),
    Raleway: require("../assets/fonts/Raleway-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="w-full h-full bg-white relative">
      <SafeAreaView>
        <View className="w-full p-4 flex flex-col justify-center items-center space-y-4 my-20">
          <Icon name="paw" size={90} color="#99D98C" />
          <Text
            className="text-2xl uppercase font-extrabold tracking-wider text-[#76C893] pt-4"
            style={{ fontFamily: "Raleway" }}
          >
            FootInBill
          </Text>
          <Text
            className="text-gray-600 mb-10"
            style={{ fontFamily: "Raleway" }}
          >
            Splitting made effortless, Join now
          </Text>
        </View>
        <View className=" p-4 flex flex-col justify-center items-center">
          <View className="w-[70%] mb-4 border-2 border-primary shadow-md rounded-full">
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="text-center px-10 py-4 text-gray-600 font-bold text-lg">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-[70%] shadow-md bg-primary rounded-full">
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text className="text-center px-10 py-4  text-gray-700 font-bold text-lg rounded-full">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <View className="bg-[#99D98C] h-[40px] w-full absolute bottom-20"></View>
      <View className="bg-[#76C893] h-[40px] w-full absolute bottom-10"></View>
      <View className="bg-[#52B69A] h-[40px] w-full absolute bottom-0"></View>
    </View>
  );
};

export default Welcome;
