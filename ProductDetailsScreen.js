
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ProductDetailsScreen({
  navigation,
  route,
}) {
  const { product } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.productIcon}>
        <Text style={styles.icon}>🛍️</Text>
      </View>

      <Text style={styles.name}>
        {product.name}
      </Text>

      <Text style={styles.price}>
        {product.price}
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Description
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Store Information
        </Text>

        <Text style={styles.storeText}>
          🏪 Available at My Sari-Sari Store
        </Text>

        <Text style={styles.storeText}>
          📦 Product is available in store
        </Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>
          ← Back to Products
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FDF4",
    padding: 20,
    alignItems: "center",
  },

  productIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#DCFCE7",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  icon: {
    fontSize: 50,
  },

  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#166534",
    textAlign: "center",
  },

  price: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#16A34A",
    marginTop: 8,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 15,
    marginTop: 20,
    elevation: 3,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#334155",
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: "#64748B",
    lineHeight: 23,
  },

  storeText: {
    fontSize: 14,
    color: "#475569",
    marginVertical: 5,
  },

  backButton: {
    width: "100%",
    backgroundColor: "#16A34A",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
  },

  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

