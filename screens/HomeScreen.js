import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Hamster from "../components/Hamster";
import Upgrade from "../components/Upgrade";

export default function HomeScreen({ navigation }) {
  const [score, setScore] = useState(0);
  const [power, setPower] = useState(0);

  return (
    <View style={styles.container}>
      <Hamster score={score} setScore={setScore} />
      <Upgrade score={score} setScore={setScore} power={power} setPower={setPower} />

      <View style={styles.buttonsContainer}>
        <Button
          title="Главная"
          onPress={() => navigation.navigate("Главная")}
          color="#007BFF"
        />
        <Button
          title="Магазин"
          onPress={() => navigation.navigate("Магазин")}
          color="#007BFF"
        />
        <Button
          title="Профиль"
          onPress={() => navigation.navigate("Профиль")}
          color="#007BFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5dc",
    paddingTop: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 30,
    marginTop: 20,
    justifyContent: "space-between",
  },
});
