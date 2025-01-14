import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BoardGrid from "../components/BoardGrid";
import styles from "../util/styles";
const { boardContainer, boardText, gradient } = styles;

const Board = () => {
  const [matrix, setMatrix] = useState(Array.from({ length: 81 }, () => ""));
  const [currentNum, setCurrentNum] = useState(null);
  const [isSelected, setIsSelected] = useState({
    on: false,
    currentNum,
  });

  const handleInput = (e = null, num, tools, index) => {
    const { on } = isSelected;
    if (on && currentNum === index + 1) {
      setIsSelected({ on: false, currentNum: null });
      setCurrentNum(null);
    } else if (tools) {
      setIsSelected({ on: true, currentNum: num });
      setCurrentNum(num);
    } else if (currentNum && !tools) {
      setMatrix((prev) =>
        [...prev].map((item, i) => (i === index ? currentNum : item))
      );
    }
  };

  return (
    <>
      {console.log("current", currentNum)}
      {console.log("matrix", matrix)}
      {console.log("isSelected", isSelected)}

      <LinearGradient colors={["white", "#C1E3D5"]} style={gradient}>
        <SafeAreaView style={boardContainer}>
          <Text style={boardText}>Sudoku</Text>
          <BoardGrid
            data={matrix}
            length={81}
            fontSize={18}
            columns={9}
            handleInput={handleInput}
          />
          <BoardGrid
            length={9}
            fontSize={18}
            columns={9}
            handleInput={handleInput}
            isSelected={isSelected}
            tools
          />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Board;
