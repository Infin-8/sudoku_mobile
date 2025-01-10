import { SafeAreaView, Text } from "react-native";
import BoardGrid from "../components/BoardGrid";
import styles from "../util/styles";
const { boardContainer, boardText } = styles;

const Board = () => {
  return (
    <SafeAreaView style={boardContainer}>
      <Text style={boardText}>Sudoku</Text>
      <BoardGrid length={81} fontSize={18} columns={9} />
      <BoardGrid length={9} fontSize={18} columns={9} tools />
    </SafeAreaView>
  );
};

export default Board;
