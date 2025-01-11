import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getBoards, testString } from "../util/helpers";
import { useRouter } from "expo-router";
import styles from "../util/styles";
const {
  boardListMain,
  boardContainers,
  contentContainer,
  boardContainerExtras,
  quickFlex,
  playButton,
  miniGridContainer,
  gradient
} = styles;

const BoardList = () => {
  const router = useRouter();

  return (
    <LinearGradient colors={["white", "#C1E3D5"]} style={gradient}>
    <View style={boardListMain}>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        style={contentContainer}
        data={getBoards()}
        renderItem={({ index }) => (
          <View
            style={{
              ...boardContainers,
              ...boardContainerExtras,
            }}
          >
            <View
              style={{
                ...miniGridContainer,
                ...quickFlex,
              }}
            >
              <Text>{`Level-${parseInt(index) + 1}`}</Text>
            </View>

            <View style={quickFlex}>
              <Text>{`Playing Since...`}</Text>
            </View>

            <View style={quickFlex}>
              <TouchableOpacity
                style={playButton}
                activeOpacity={0.6}
                onPress={() => router.push(`/Board`)}
              >
                <Text style={{ textAlign: "center" }}>{`Play`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={({ item }) => testString(item)}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        excessive
        rendering
        windowSize={5}
      />
    </View>
    </LinearGradient>
  );
};

export default BoardList;
