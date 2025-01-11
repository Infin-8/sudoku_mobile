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
  return (
    <>
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
