import { Image, StyleSheet, Text, View } from "react-native";
import { productType } from "../types";
import { Rating } from "react-native-ratings";

const Product = ({ product }: { product: productType }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.headerText}>
        {product.title}
      </Text>
      <View style={styles.cardContent}>
        <View>
          <Image style={styles.image} source={{ uri: product.image }} />
        </View>
        <View style={styles.oneLine}>
          <Text style={styles.title}>Price:</Text>
          <Text style={styles.spaced}>
            ${product.price}
          </Text>
        </View>
        <View style={styles.oneLine}>
          <Text style={styles.title}>Category:</Text>
          <Text style={styles.spaced}>
            {product.category}
          </Text>
        </View>
        <View style={styles.oneLine}>
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.spaced}>
            {product.description}
          </Text>
        </View>
        <View style={styles.oneLine}>
          <Text style={styles.title}>Reviews:</Text>
          <Text style={styles.spaced}>
            {product.rating.count}
          </Text>
        </View>
        <View style={styles.oneLine}>
          <Text style={styles.title}>Rating:</Text>
          <Rating
            style={styles.rating}
            imageSize={20}
            startingValue={product.rating.rate}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
    width: "95%"
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
    resizeMode: "contain"
  },
  title: {
    fontWeight: "bold",
    height: "100%",
    flex: 0.4
  },
  oneLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 8
  },
  spaced: {
    marginLeft: 8,
    marginRight: 8,
    flexWrap: "wrap",
    flex: 0.6,
    textTransform: "capitalize",
    lineHeight: 20
  },
  rating: { flex: 0.6, justifyContent: "flex-start", alignItems: "flex-start" },
  cardContent: {}
});

export default Product;
