import React from "react";
import { useQuery } from "react-query";
import { Text, FlatList, View, StyleSheet } from "react-native";
import { productType } from "../types";
import Product from "./ProductCard";

const ProductList: React.FC = () => {
  const { data, error, isLoading } = useQuery<
    productType[]
  >("products", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: An error occurred</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Product product={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  }
});

export default ProductList;
