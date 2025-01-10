import { FlatList, TouchableOpacity, Text, View } from "react-native";
import styles from "../util/styles";
const { board, boardEffects } = styles;

const BoardGrid = ({ length, fontSize, columns, tools = false }) => (
  <View style={boardEffects(tools)}>
    <FlatList
      data={Array.from({ length }, (_, i) => i + 1)}
      renderItem={({ item }) => (
        <TouchableOpacity style={board(item, tools)}>
          <Text style={{ fontSize }}>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.toString()}
      numColumns={columns}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  </View>
);

export default BoardGrid;
