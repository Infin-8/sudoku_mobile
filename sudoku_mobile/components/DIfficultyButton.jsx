import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useRouter } from 'expo-router';
import styles from "../util/styles";

const DifficultyButton = ({ onPress, title, color }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: color }}
      activeOpacity={0.6}
      onPress={() => router.push(`/BoardList?diff=${title.toLowerCase()}`)}
    >
      <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DifficultyButton;