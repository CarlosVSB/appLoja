import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import Shoes from "../../component/Shoes";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>•</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              alignSelf: "center",
            }}
          >
            <MaterialIcons name="filter-list" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/1.png")}
            cost="R$180,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike air 7 deluxe edition
          </Shoes>
          <Shoes
            img={require("../../assets/2.png")}
            cost="R$280,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike Downshifter 7
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/3.png")}
            cost="R$580,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Adidas Sport Ultra
          </Shoes>
          <Shoes
            img={require("../../assets/4.png")}
            cost="R$180,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Adidas Casual Military
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/5.png")}
            cost="R$380,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Adidas Casual Deluxe
          </Shoes>
          <Shoes
            img={require("../../assets/6.png")}
            cost="R$385"
            onClick={() => navigation.navigate("Detail")}
          >
            Adidas Super Walk
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 6,
  },
  image: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "1%",
  },
  line: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
  },
});
