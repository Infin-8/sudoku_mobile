import { FlatList, TouchableOpacity, Text, View } from "react-native";
import styles from "../util/styles";
const {
  board,
  boardEffects,
  quickFlex: { justifyContent, alignItems },
} = styles;

const BoardGrid = ({
  data,
  length,
  fontSize,
  columns,
  tools = false,
  isSelected = null,
  handleInput = (f) => f,
}) => {
  return (
    <View style={boardEffects(tools)}>
      <FlatList
        data={tools ? Array.from({ length }, (_, i) => i + 1) : data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={board(index, tools, isSelected)}
            onPress={(e) => {
              handleInput(e, item, tools, index);
            }}
          >
            <Text style={{ fontSize }}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(_, i) => i.toString()}
        numColumns={columns}
        contentContainerStyle={{
          justifyContent,
          alignItems,
        }}
      />
    </View>
  );
};

export default BoardGrid;
