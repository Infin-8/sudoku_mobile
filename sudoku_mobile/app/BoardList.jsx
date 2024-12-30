import { Text, View, FlatList } from "react-native";
import styles from "../util/styles";
import { getBoards, testString } from "../util/helpers";
const { boardListMain, boardContainers, contentContainer, tester } = styles;

const BoardList = () => (
  <View style={boardListMain}>
    <FlatList
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      style={contentContainer}
      data={getBoards()}
      renderItem={({ item }) => (
        <View
          style={{
            ...boardContainers,
            width: "100%",
            marginBottom: 8,
          }}
        >
          <Text style={tester}>{item}</Text>
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
