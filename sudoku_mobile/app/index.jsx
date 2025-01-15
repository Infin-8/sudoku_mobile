import React, { useState, useEffect } from "react";
import { createAccount, createSession, getAccount } from "../util/Requests";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Logo from "../components/Logo";
import DifficultyButton from "../components/DIfficultyButton";
import { getStartButtons } from "../util/helpers";
import styles from "../util/styles";

const {
  mainContainer,
  gradient,
  flatList,
  quickFlex: { justifyContent, alignItems },
} = styles;

const App = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const { _j } = getAccount();
    if (_j) {
      let account = createSession();
      console.log("account", account);
    } else {
      let newUser = createAccount();
      console.log("new", newUser);
    }
  }, []);

  return (
    <>
      {console.log("$id", userId)}
      {console.log("name", name)}
      {console.log("email", email)}
      <StatusBar backgroundColor="#000000" style="light" translucent={true} />
      <LinearGradient colors={["white", "#C1E3D5"]} style={gradient}>
        <SafeAreaView style={mainContainer}>
          <Logo />
          <View
            style={{
              justifyContent,
              alignItems,
              marginBottom: "3%",
            }}
          >
            <FlatList
              contentContainerStyle={flatList}
              data={getStartButtons()}
              renderItem={({ item: { value, color } }) => (
                <DifficultyButton title={value} backgroundColor={color} />
              )}
              keyExtractor={({ value }) => value}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default App;
