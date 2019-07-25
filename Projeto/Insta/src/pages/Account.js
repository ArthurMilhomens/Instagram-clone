import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

// import { Container } from './styles';

function Account(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Login")}
        style={{ positon: "absolute", top: 100 }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Account;