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
          {/********* Header View **********/}
          <View className="flex w-full justify-center items-center pt-8 pb-12">
            <Text className="text-3xl font-Raleway font-bold tracking-wide py-4">
              Log in
            </Text>
            <Text className="font-light text-gray-700">
              Welcome back, login to continue
            </Text>
          </View>

          {/********* Email & Password View **********/}
          <View className="flex w-[90%] justify-center border border-gray-300 mx-auto my-2 rounded-sm">
            <TextInput
              secureTextEntry={false}
              placeholder="Email"
              name="email"
              className="p-4 text-xl text-gray-700"
            />
          </View>
          <View className="flex w-[90%] justify-center border border-gray-300 mx-auto my-2 rounded-sm">
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              name="password"
              className="p-4 text-xl text-gray-700"
            />
          </View>

          {/********* Forgot password View **********/}
          <View className="flex w-[90%] justify-end items-end mt-2 mx-auto">
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text className="text-gray-400">Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/********* Login Button View **********/}
          <View className="w-[90%] mx-auto shadow-md bg-primary rounded-sm mt-12">
            <TouchableOpacity>
              <Text className="text-center px-10 py-4 text-gray-700 font-bold text-xl rounded-full">
                Log in
              </Text>
            </TouchableOpacity>
          </View>

          {/********* Signup View **********/}
          <View className="flex w-[90%] justify-end items-center mt-8 mx-auto">
            <TouchableOpacity
              className="flex flex-row space-x-2"
              onPress={() => navigation.navigate("Signin")}
            >
              <Text className="text-gray-500 tracking-wide">
                Don't have an account?
              </Text>
              <Text className="text-[#52b69a] font-bold tracking-wide">
                Sign in
              </Text>
            </TouchableOpacity>
          </View>

          {/********* Social Media View **********/}
          <View className="flex w-full justify-center items-center mt-20">
            <Text className="text-gray-400 tracking-wide py-4">Or</Text>
            <View className="flex flex-row space-x-4">
              <TouchableOpacity className="bg-[#34A0A4] p-4 w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <Icon name="facebook" size={25} color="#b5e48c" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#34A0A4] p-4 w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <Icon name="google" size={25} color="#b5e48c" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#34A0A4] p-4 w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <Icon name="instagram" size={25} color="#b5e48c" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;

/***
 * OLD PROJECT CODE FOR LOGIN SCREEN
 */

/*
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {loginUser} from '../../actions/authAction';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';

let validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email('Not a valid email.')
    .required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

export const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // let formObject = {email: '', password: ''};
  let formObject = {email: 'test@yopmail.com', password: '12345678'};

  let performLogin = async values => {
    let payload = {
      email: values.email,
      password: values.password,
    };
    let response = await dispatch(loginUser(payload));
    if (response && response.success) {
      navigation.navigate('homeScreen');
      AsyncStorage.setItem('userToken', response.token);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Formik
        initialValues={formObject}
        validationSchema={validationSchema}
        onSubmit={(values, formikActions) => {
          performLogin(values);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          let {email, password} = values;
          return (
            <>
              <View style={styles.body}>
                <View style={styles.imageView}>
                  <Image
                    source={require('../../../assets/images/image2.jpg')}
                    style={styles.image}
                  />
                </View>

                <View style={styles.brandView}>
                  <Text style={[styles.brandText, styles.shadowSm]}>
                    Quizkaro
                  </Text>
                </View>
                <View style={styles.welcomeView}>
                  <Text style={styles.welcomeText}>
                    Welcome back, log in into your account
                  </Text>
                </View>
                <View style={styles.inputBox}>
                  {touched.email && errors.email ? (
                    <Text style={styles.error}>{errors.email}</Text>
                  ) : (
                    ''
                  )}
                </View>
                <View style={styles.inputBox}>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry={true}
                    placeholder="Password"
                  />
                  {touched.password && errors.password ? (
                    <Text style={styles.error}>{errors.password}</Text>
                  ) : (
                    ''
                  )}
                </View>
                <View style={[styles.button, styles.shadowSm]}>
                  <TouchableOpacity
                    onPress={
                      isSubmitting == false ? handleSubmit : handleSubmit
                    }>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.extraInputBox}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('forgotPasswordScreen')}>
                    <Text style={styles.forgotPasswordText}>
                      Reset Password
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.inputBox, styles.signUpView]}>
                  <Text style={styles.bottomText}>Don't have an account ?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('registerScreen')}>
                    <Text style={styles.signUp}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default LoginScreen;

 */
