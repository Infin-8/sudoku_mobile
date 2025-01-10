import {
  SafeAreaView,
  Text
} from "react-native";
import BoardGrid from "../components/BoardGrid";

const Board = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "space-around", backgroundColor: "mintcream", alignItems: "center"}}>
        <Text style={{
            fontSize: 125, 
            textAlign: "center", 
            color: "white",     
            textShadowColor: "black",
            textShadowOffset: {width: 3, height: 3},
            textShadowRadius: 5
            }}>Sudoku</Text>
        <BoardGrid length={81} fontSize={18} columns={9} />
        <BoardGrid length={9} fontSize={18} columns={9} tools />
    </SafeAreaView>
  );
};

export default Board;
