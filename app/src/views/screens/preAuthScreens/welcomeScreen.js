import React, { useState, useCallback } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const WelcomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onInputChange = (value, setState) => {
    setState(value);
  };

  const onUserAuthentication = () => {
    console.log("User authentication button clicked");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to our App!</Text>
      <View>
        <TextInput
          style={styles.inputs}
          placeholder="Enter your email here.."
          value={email}
          onChangeText={(value) => onInputChange(value, setEmail)}
        />
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          placeholder="Enter your password here.."
          value={password}
          onChangeText={(value) => onInputChange(value, setPassword)}
        />
        <Button title="AUTHENTICATE" onPress={onUserAuthentication} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputs: {
    width: 300,
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
  },
});

export default WelcomeScreen;
