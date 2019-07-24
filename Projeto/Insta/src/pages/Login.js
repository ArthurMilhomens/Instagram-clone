import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Back from "../assets/alo.jpg";

function Login(props) {
  const [login, setLogin] = useState("");
  const [pswd, setPswd] = useState("");
  return (
    <>
      <StatusBar
        backgroundColor="rgba(0,0,0,0)"
        translucent={true}
        barStyle="light-content"
      />
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#000015" }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 200,
            width: "90%",
            marginHorizontal: "5%"
          }}
        >
          <TextInput
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              color: "#fff",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              marginHorizontal: "10%",
              borderBottomWidth: 2,
              borderBottomColor: "#0bd3d3"
            }}
            placeholder="Usuário"
            placeholderTextColor="#fff"
            onChangeText={text => setLogin(text)}
          />
          <TextInput
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              color: "#fff",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              marginHorizontal: "10%",
              borderBottomWidth: 2,
              borderBottomColor: "#0bd3d3"
            }}
            onPress={{}}
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#fff"
            onChangeText={text => setPswd(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            bottom: 0,
            position: "absolute",
            backgroundColor: "#0bd3d3",
            borderTopLeftRadius: 85
            // marginHorizontal:"10%"
          }}
          onPress={() => {
            if (login === "Rafaelgay" && pswd === "Meupau")
              props.navigation.navigate("SignedIn");
            else Alert.alert("Mongoloide");
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 25
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Login;
