
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.icon}>🏪</Text>

      <Text style={styles.title}>
        Welcome to My Sari-Sari Store
      </Text>

      <Text style={styles.subtitle}>
        Your friendly neighborhood store
      </Text>

      <Text style={styles.description}>
        We offer snacks, drinks, canned goods,
        and other everyday products.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.buttonText}>
          View Products
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },

  icon: {
    fontSize: 70,
    marginBottom: 20,
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#166534",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#22C55E",
    marginTop: 8,
    textAlign: "center",
  },

  description: {
    fontSize: 15,
    color: "#475569",
    textAlign: "center",
    lineHeight: 23,
    marginTop: 20,
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#16A34A",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

