import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Index() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#0C4C7B", "#256492", "#0C4C7B"]}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.btn}>
              <FontAwesome5 name="bars" size={18} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <FontAwesome5 name="bell" size={18} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.tab}>
            <View style={styles.cover}>
              <Text>Main</Text>
            </View>
            <View>
              <Text style={styles.tabText}>Saving</Text>
            </View>
            <View>
              <Text style={styles.tabText}>Invest</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "#224660",
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    backgroundColor: "#092437",
    flexDirection: "row",
    padding: 3,
    borderRadius: 20,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabText: {
    color: "white",
  },
  cover: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 45,
    borderRadius: 20,
  },
});
