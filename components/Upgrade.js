
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Upgrade({ score, setScore, power, setPower }) {
  const upgradePower = () => {
    console.log("Текущее количество монет перед улучшением:", score);
    if (score >= 10) {
      setScore((prevScore) => {
        const newScore = prevScore - 10;
        console.log("Новые монеты после улучшения:", newScore);
        return newScore;
      });

      setPower((prevPower) => {
        const newPower = prevPower + 2;
        console.log("Новые Power после улучшения:", newPower);
        return newPower;
      });

    } else {
      console.log("Недостаточно монет для улучшения");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={upgradePower}>
        <Text style={styles.buttonText}>⚡ Улучшить (10 монет)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ffcc00",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});