import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ShopScreen({ navigation }) {
  const [coins, setCoins] = useState(0);
  const [itemPrice, setItemPrice] = useState(10); 
  const [autoIncome, setAutoIncome] = useState(0);
  const [autoIncomePrice, setAutoIncomePrice] = useState(20); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins((prevCoins) => prevCoins + autoIncome);
    }, 1000);
    return () => clearInterval(interval);
  }, []); 

  useEffect(() => {
    if (autoIncome > 0) {
      const incomeInterval = setInterval(() => {
        setCoins((prevCoins) => prevCoins + autoIncome);
      }, 1000);
      return () => clearInterval(incomeInterval);
    }
  }, [autoIncome]);

  const handlePurchase = () => {
    if (coins >= itemPrice) {
      setCoins((prevCoins) => prevCoins - itemPrice + 1);
      setItemPrice((prevPrice) => prevPrice + 1); 
    }
  };

  const upgradeAutoIncome = () => {
    if (coins >= autoIncomePrice) {
      setCoins((prevCoins) => prevCoins - autoIncomePrice);
      setAutoIncome((prevIncome) => prevIncome + 1);
      setAutoIncomePrice((prevPrice) => prevPrice + 5); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Магазин</Text>
      <Text style={styles.info}>💰 Монеты: {coins}</Text>
      <Text style={styles.info}>💲 Цена предмета: {itemPrice}</Text>
      <Text style={styles.info}>⏳ Авто-доход: {autoIncome} / сек</Text>
      <Text style={styles.info}>🔧 Цена улучшения авто-дохода: {autoIncomePrice}</Text>
      
      <TouchableOpacity style={styles.button} onPress={handlePurchase}>
        <Text style={styles.buttonText}>Купить (+1 коин) за {itemPrice}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.upgradeButton]} onPress={upgradeAutoIncome}>
        <Text style={styles.buttonText}>Улучшить авто-доход (+1/сек) за {autoIncomePrice}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.homeButton]} onPress={() => navigation.navigate("Главная")}>
        <Text style={styles.buttonText}>Перейти на Главную</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5dc",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  info: {
    fontSize: 20,
    marginBottom: 10,
    color: "#555",
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    width: "80%",
    elevation: 3,
  },
  upgradeButton: {
    backgroundColor: "#ffc107",
  },
  homeButton: {
    backgroundColor: "#007BFF",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});