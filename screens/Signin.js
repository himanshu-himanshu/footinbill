import { Text, View } from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";

export class Signin extends Component {
  render() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      return () => {
        navigation.setOptions({ headerShown: false });
      };
    }, []);
    return (
      <View>
        <Text>Signin</Text>
      </View>
    );
  }
}

export default Signin;
