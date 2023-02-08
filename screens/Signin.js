import { Text, View, TouchableOpacity, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
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
          <View className="flex w-full justify-center items-center pt-8 pb-10">
            <Text className="text-3xl font-Raleway font-semibold tracking-wide py-4">
              Sign up
            </Text>
            <Text className="font-light text-gray-700">
              Please fill details below to create an account
            </Text>
          </View>

          {/********* Username, Email and Password View **********/}
          <View className="flex w-[90%] justify-center border border-gray-300 mx-auto my-2 rounded-sm">
            <TextInput
              secureTextEntry={false}
              placeholder="Username"
              name="username"
              className="p-4 text-xl text-gray-600"
            />
          </View>
          <View className="flex w-[90%] justify-center border border-gray-300 mx-auto my-2 rounded-sm">
            <TextInput
              secureTextEntry={false}
              placeholder="Enter Email"
              name="email"
              className="p-4 text-xl text-gray-600"
            />
          </View>
          <View className="flex w-[90%] justify-center border border-gray-300 mx-auto my-2 rounded-sm">
            <TextInput
              secureTextEntry={true}
              placeholder="Choose Password"
              name="password"
              className="p-4 text-xl text-gray-600"
            />
          </View>
          <View className="flex w-[90%] justify-center mx-auto my-1 rounded-sm">
            <Text className="text-gray-400">
              Password must be atleast 6 character
            </Text>
          </View>

          {/********* Signin Button View **********/}
          <View className="w-[90%] mx-auto shadow-md bg-primary rounded-sm mt-12">
            <TouchableOpacity>
              <Text className="text-center px-10 py-4 text-gray-700 font-bold text-xl rounded-full">
                Create account
              </Text>
            </TouchableOpacity>
          </View>

          {/********* Login View **********/}
          <View className="flex w-[90%] justify-end items-center mt-8 mx-auto">
            <TouchableOpacity
              className="flex flex-row space-x-2"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="text-gray-500 tracking-wide">
                Already have an account?
              </Text>
              <Text className="text-[#52b69a] font-bold tracking-wide">
                Log in
              </Text>
            </TouchableOpacity>
          </View>

          {/********* Social Media View **********/}
          <View className="flex w-full justify-center items-center mt-10">
            <Text className="text-gray-400 tracking-wide py-4">Or</Text>
            <View className="flex flex-row space-x-4">
              <TouchableOpacity className="bg-[#34A0A4] p-4 w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <Icon name="facebook" size={25} color="#b5e48c" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#34A0A4] p-4 w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <Icon name="google" size={25} color="#b5e48c" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignUp;
