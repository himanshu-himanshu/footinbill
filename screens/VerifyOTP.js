import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

const VerifyOTP = () => {
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
    <View className="w-full h-screen bg-white">
      <SafeAreaView>
        <View className="w-full h-full">
          {/********* Header View **********/}
          <View className="flex w-full justify-center items-center pt-8 pb-12">
            <Image
              source={require("../assets/otp.png")}
              className="h-40 w-40"
            />
            <Text className="text-3xl font-Raleway font-semibold tracking-wide py-4">
              Verification
            </Text>
            <Text className="font-light text-gray-700 px-4 text-center">
              We have sent a verification code to your mail for recovering your
              password
            </Text>
          </View>

          {/********* OTP View **********/}
          <View className="flex w-[90%] justify-center border border-gray-300 mx-auto my-2 rounded-sm">
            <TextInput
              secureTextEntry={false}
              placeholder="Enter OTP"
              name="otp"
              keyboardType="numeric"
              className="p-4 text-xl text-gray-700"
            />
          </View>

          {/********* Verify OTP Button View **********/}
          <View className="w-[90%] mx-auto shadow-md bg-primary rounded-sm mt-8">
            <TouchableOpacity>
              <Text className="text-center px-10 py-4 text-gray-700 font-bold text-xl rounded-full">
                Verify OTP
              </Text>
            </TouchableOpacity>
          </View>

          {/********* Resend OTP View **********/}
          <View className="flex w-[90%] justify-end items-center mt-8 mx-auto">
            <TouchableOpacity
              className="flex flex-row space-x-2"
              onPress={() => navigation.navigate("Signin")}
            >
              <Text className="text-gray-500 tracking-wide">
                Haven't recieved yet?
              </Text>
              <Text className="text-[#52b69a] font-bold tracking-wide">
                Resend
              </Text>
            </TouchableOpacity>
          </View>

          {/********* Back to login **********/}
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="flex flex-row items-center w-full justify-center mt-8 space-x-2 text-gray-500"
          >
            <Icon name="arrow-left" color="#777777" />
            <Text className="text-gray-600">Back to Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default VerifyOTP;
