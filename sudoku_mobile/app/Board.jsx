import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BoardGrid from "../components/BoardGrid";
import styles from "../util/styles";
import { setConstantValue } from "typescript";
const { boardContainer, boardText, gradient } = styles;

const Board = () => {
  const [matrix, setMatrix] = useState(
    Array.from({ length: 81 }, (_, i) => "")
  );
  const [currentNum, setCurrentNum] = useState(null);

  const handleInput = (e, num, tools, index) => {
    if (tools) setCurrentNum(num);
    if (currentNum && !tools) {
      setMatrix((prev) =>
        [...prev].map((item, i) => (i === index ? currentNum : item))
      );
    }
  };

  return (
    <>
      {console.log("current", currentNum)}
      {console.log("matrix", matrix)}
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
            tools
          />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Board;
