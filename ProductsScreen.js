
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const products = [
  {
    id: "1",
    name: "Lucky Me Pancit Canton",
    price: "₱15",
    description:
      "A popular instant noodle snack that is easy and quick to prepare.",
  },
  {
    id: "2",
    name: "Coca-Cola",
    price: "₱25",
    description:
      "A refreshing soft drink that is perfect for meals and snacks.",
  },
  {
    id: "3",
    name: "Piattos",
    price: "₱20",
    description:
      "A crispy potato snack available in different flavors.",
  },
  {
    id: "4",
    name: "Argentina Corned Beef",
    price: "₱35",
    description:
      "A canned meat product commonly served with rice.",
  },
  {
    id: "5",
    name: "Bear Brand Milk",
    price: "₱18",
    description:
      "A powdered milk drink that can be enjoyed anytime.",
  },
];

export default function ProductsScreen({ navigation }) {
  const renderProduct = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.productCard}
        onPress={() =>
          navigation.navigate("ProductDetails", {
            product: item,
          })
        }
      >
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🛒</Text>
        </View>

        <View style={styles.productInfo}>
          <Text style={styles.productName}>
            {item.name}
          </Text>

          <Text style={styles.productPrice}>
            {item.price}
          </Text>

          <Text style={styles.viewText}>
            Tap to view details →
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>
        Available Products
      </Text>

      <Text style={styles.subheading}>
        Select a product to see more information.
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingTop: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#166534",
    marginHorizontal: 20,
  },

  subheading: {
    fontSize: 14,
    color: "#64748B",
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 10,
  },

  list: {
    padding: 20,
  },

  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: "#DCFCE7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  icon: {
    fontSize: 27,
  },

  productInfo: {
    flex: 1,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
  },

  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#16A34A",
    marginTop: 4,
  },

  viewText: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 5,
  },
});

