import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Shoes from "../Shoes";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/3.png")}
              cost="R$580,90"
              onClick={() => navigation.navigate("Detail")}
            >
              Adidas Sport Ultra
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/5.png")}
              cost="R$380,90"
              onClick={() => navigation.navigate("Detail")}
            >
              Adidas Casual Deluxe
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/2.png")}
              cost="R$280,90"
              onClick={() => navigation.navigate("Detail")}
            >
              Nike Downshifter 7
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    fontFamily: "Anton_400Regular",
    marginVertical: "2%",
    marginHorizontal: "2%",
  },
});
