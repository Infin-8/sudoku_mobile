import { Text, View, FlatList, TouchableOpacity } from "react-native";
import styles from "../util/styles";
import { getBoards, testString } from "../util/helpers";
const {
  boardListMain,
  boardContainers,
  contentContainer,
  boardContainerExtras,
  quickFlex,
  playButton,
} = styles;

const BoardList = () => (
  
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
              height: 180,
              borderWidth: 1,
              width: "25%",
              ...quickFlex,
            }}
          >
            <Text>{`Level-${parseInt(index) + 1}`}</Text>
          </View>

          <View style={quickFlex}>
            <Text>{`Playing Since...`}</Text>
          </View>

          <View style={quickFlex}>
            <TouchableOpacity style={playButton} activeOpacity={0.6}>
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
);

export default BoardList;