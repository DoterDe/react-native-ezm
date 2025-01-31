import React, { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : user ? (
        <View style={styles.card}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.info}>Email: {user.email}</Text>
          <Text style={styles.info}>Телефон: {user.phone}</Text>
          <Text style={styles.info}>Город: {user.address.city}</Text>
        </View>
      ) : (
        <Text style={styles.error}>Не удалось загрузить данные</Text>
      )}
      <Button
        title="Перейти на Главную"
        onPress={() => navigation.navigate("Главная")}
        color="#007BFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginBottom: 20,
  },
});
