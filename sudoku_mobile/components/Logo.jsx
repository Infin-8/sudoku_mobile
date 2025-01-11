import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../util/styles";
const { container, spinner, logo, logoText, logoContainer } = styles;

const Logo = () => {
  return (
    <View style={container}>
      <FlatList
        data={["S", "U", "", "", "D", "O", "K", "", "U"]}
        numColumns={3}
        renderItem={({ item, index }) => (
          <View key={index} style={[logo(index), index === 4 && spinner]}>
            <Text style={logoText}>{item}</Text>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={logoContainer}
      />
    </View>
  );
};

export default Logo;
