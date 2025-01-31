import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Hamster({ score, setScore, power }) {
  const handleAttack = () => {
    console.log("До обновления монет:", score);
    if (power > 1) {
      setScore((prevScore) => prevScore + power);
    } else {
      setScore((prevScore) => prevScore + 1); 
    }

    
  };

  useEffect(() => {
    console.log("Обновленные монеты:", score);
    console.log("Текущая сила:", power); 
  }, [score, power]); 

  return (
    <View style={styles.container}>
      <Text style={styles.score}>💰 {score} монет</Text>
      <Text style={styles.score}>⚡ Сила: {power}</Text> 
      <TouchableOpacity onPress={handleAttack}>
        <Image source={require("../assets/image.png")} style={styles.hamster} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  hamster: {
    width: 200,
    height: 200,
  },
});
