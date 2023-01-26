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
        <View className="w-full p-4 flex flex-col justify-center items-center space-x-4 my-20">
          <Icon name="paw" size={90} color="#B392AC" />
          <Text
            className="text-2xl uppercase font-extrabold tracking-wider text-[#B392AC] pt-6"
            style={{ fontFamily: "Raleway" }}
          >
            FootInBill
          </Text>
          {/* <Text className="flex justify-center items-center p-2 font-semibold uppercase text-slate-600">
            <Icon name="dollar" size={15} />
            plitting made effortless
          </Text> */}
        </View>
        <View className=" p-4 flex flex-col justify-center items-center">
          <Text
            className="text-gray-600 mb-10"
            style={{ fontFamily: "Raleway" }}
          >
            Splitting made effortless, Join now
          </Text>
          <View className="w-[70%] mb-4 border-l-2 border-t border-r border-b-4 border-[#B392AC] shadow-md rounded-full">
            <TouchableOpacity>
              <Text className="text-center px-10 py-4 text-[#B392AC] font-bold text-lg">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-[70%] shadow-md bg-[#B392AC] rounded-full">
            <TouchableOpacity>
              <Text className="text-center px-10 py-4  text-white font-bold text-lg rounded-full">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <View className="bg-[#D1B3C4] h-[40px] w-full absolute bottom-20"></View>
      <View className="bg-[#B392AC] h-[40px] w-full absolute bottom-10"></View>
      <View className="bg-[#735D78] h-[40px] w-full absolute bottom-0"></View>
    </View>
  );
};

export default Welcome;
