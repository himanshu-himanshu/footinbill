import { Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
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
          <View className="flex w-full justify-center items-center py-12">
            <Text className="text-3xl font-Raleway font-semibold tracking-wide py-4">
              Log In
            </Text>
            <Text className="font-light text-gray-700">
              Please login to continue using our app
            </Text>
          </View>
          <View className="flex w-[90%] justify-center border border-gray-300 mx-auto my-2 rounded-sm">
            <TextInput
              secureTextEntry={false}
              placeholder="Email"
              className="p-4 text-xl text-gray-700"
            />
          </View>
          <View className="flex w-[90%] justify-center border border-gray-300 mx-auto my-2 rounded-sm">
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              className="p-4 text-xl text-gray-700"
            />
          </View>
          <View className="flex w-[90%] justify-end items-start mt-2 mx-auto">
            <TouchableOpacity>
              <Text className="text-gray-400">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View className="w-[90%] mx-auto shadow-md bg-[#b5e48c] rounded-sm mt-12">
            <TouchableOpacity>
              <Text className="text-center px-10 py-4 text-gray-700 capitalize font-bold text-xl rounded-full">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex w-[90%] justify-end items-center mt-8 mx-auto">
            <TouchableOpacity className="flex flex-row space-x-2">
              <Text className="text-gray-500 tracking-wide">
                Don't have an account?
              </Text>
              <Text className="text-[#52b69a] font-bold tracking-wide">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex w-full justify-center items-center mt-24">
            <Text className="text-gray-400 tracking-wide py-4">Or</Text>
            <View className="flex flex-row space-x-4">
              <View className="bg-[#34A0A4] p-4 w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <Icon name="facebook" size={25} color="#b5e48c" />
              </View>
              <View className="bg-[#34A0A4] p-4 w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <Icon
                  name="twitter"
                  size={25}
                  color="#b5e48c"
                  className="shadow-lg"
                />
              </View>
              <View className="bg-[#34A0A4] p-4 w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <Icon name="github" size={25} color="#b5e48c" />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;

/***
 * OLD CODE FOR LOGIN SCREEN TAKE REFERENCE FROM IT
 */

/*
import React, {useEffect} from 'react';
import isEmpty from './app/validations/isEmpty';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/welcomeScreen';
import ProfileScreen from './app/screens/profile/profileScreen';
import UpdatePasswordScreen from './app/screens/password/updatePasswordScreen';
import ForgotPasswordScreen from './app/screens/password/forgotPasswordScreen';
import VerifyForgotPasswordOtpScreen from './app/screens/password/verifyForgotPasswordOtpScreen';
import SettingsScreen from './app/screens/settings/settingsScreen';
import LoginScreen from './app/screens/auth/loginScreen';
import RegisterScreen from './app/screens/auth/registerScreen';
import SelectQuizCategoryScreen from './app/screens/quiz/selectQuizCategoryScreen';
import SelectQuizViaCategoryIdScreen from './app/screens/quiz/selectQuizViaCategoryIdScreen';
import ScoreBoardScreen from './app/screens/quiz/scoreBoardScreen';
import HomeScreen from './app/screens/homeScreen';

const App = () => {
  let auth = useSelector(state => state.auth);
  let Stack = createNativeStackNavigator();
  let isLoggedIn = isEmpty(auth) ? false : true;

  console.log('8888888 888888 route', Stack.Navigator);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loginScreen"
          options={isLoggedIn ? {title: 'Home'} : {title: 'Login'}}
          component={isLoggedIn ? HomeScreen : LoginScreen}
        />
        <Stack.Screen
          name="homeScreen"
          options={isLoggedIn ? {title: 'Home'} : {title: 'Login'}}
          component={isLoggedIn ? HomeScreen : LoginScreen}
        />
        <Stack.Screen
          name="forgotPasswordScreen"
          options={isLoggedIn ? {title: 'Home'} : {title: 'Forgot Password'}}
          component={isLoggedIn ? HomeScreen : ForgotPasswordScreen}
        />
        <Stack.Screen
          name="verifyForgotPasswordOtpScreen"
          options={isLoggedIn ? {title: 'Home'} : {title: 'Verify OTP'}}
          component={isLoggedIn ? HomeScreen : VerifyForgotPasswordOtpScreen}
        />
        <Stack.Screen
          name="updatePasswordScreen"
          options={{title: 'Update Password'}}
          component={UpdatePasswordScreen}
        />
        <Stack.Screen
          name="settingsScreen"
          options={isLoggedIn ? {title: 'Settings'} : {title: 'Login'}}
          component={isLoggedIn ? SettingsScreen : LoginScreen}
        />
        <Stack.Screen
          name="welcomeScreen"
          options={isLoggedIn ? {title: 'Welcome'} : {title: 'Login'}}
          component={isLoggedIn ? WelcomeScreen : LoginScreen}
        />
        <Stack.Screen
          name="profileScreen"
          options={isLoggedIn ? {title: 'My Profile'} : {title: 'Login'}}
          component={isLoggedIn ? ProfileScreen : LoginScreen}
        />
        <Stack.Screen
          name="registerScreen"
          options={isLoggedIn ? {title: 'Home'} : {title: 'Register'}}
          component={isLoggedIn ? HomeScreen : RegisterScreen}
        />
        <Stack.Screen
          name="selectQuizCategoryScreen"
          options={isLoggedIn ? {title: 'Quiz Category'} : {title: 'Login'}}
          component={isLoggedIn ? SelectQuizCategoryScreen : LoginScreen}
        />
        <Stack.Screen
          name="selectQuizViaCategoryIdScreen"
          options={isLoggedIn ? {title: 'The Quiz'} : {title: 'Login'}}
          component={isLoggedIn ? SelectQuizViaCategoryIdScreen : LoginScreen}
        />
        <Stack.Screen
          name="scoreBoardScreen"
          options={isLoggedIn ? {title: 'My Scoreboard'} : {title: 'Login'}}
          component={isLoggedIn ? ScoreBoardScreen : LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
*/
