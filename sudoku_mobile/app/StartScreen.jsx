import { View, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getStartButtons } from "../util/helpers";
import DifficultyButton from "../components/DIfficultyButton";
import Logo from "../components/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../util/styles";
const { mainContainer, gradient, flatList, subContainer } = styles;

export default function HomeScreen() {
  return (
    <>
      <LinearGradient colors={["white", "#C1E3D5"]} style={gradient}>
        <SafeAreaView style={mainContainer}>
          <Logo />
          <View style={subContainer}>
            <FlatList
              contentContainerStyle={flatList}
              data={getStartButtons()}
              renderItem={({ item: { value, color } }) => (
                <DifficultyButton title={value} color={color} />
              )}
              keyExtractor={({ value }) => value}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}
