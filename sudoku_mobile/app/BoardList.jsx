import { Text, View, FlatList } from "react-native";
import styles from "../util/styles"; 
import { getBoards } from "../util/helpers";
const { boardContainers } = styles; 
function BoardList() {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        contentContainerStyle={{
          alignItems: "flex-start", 
          justifyContent: "flex-start", 
          paddingBottom: 20,
        }}
        style={{
          width: "100%", 
          marginBottom: "2%",
          padding: ".25%", 
        }}
        data={getBoards()} 
        renderItem={({ item }) => (
          <View
            style={{
              ...boardContainers,
              width: "100%", 
            }}
          >
            <Text style={{ width: "100%" }}>{item}</Text>
          </View>
        )}
        keyExtractor={({ item }) => item != null ? item.toString() : String(Math.random())}
      />
    </View>
  );
}

export default BoardList;
