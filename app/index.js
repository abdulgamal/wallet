import React from "react";
import { StatusBar } from "expo-status-bar";

import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const GetStarted = () => {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            style={styles.banner}
            source={require("../assets/background_v1.png")}
          />
        </View>
        <View style={styles.bottom}>
          <Text
            style={styles.big}
            textStyles={{ width: "70%", marginBottom: 25 }}
          >
            Financial Freedom at Your Fingertips
          </Text>
          <Text
            style={styles.small}
            textStyles={{ width: "70%", marginBottom: 25 }}
          >
            Maximize Your Earnings with Expert Advice and Tools
          </Text>
          <View style={styles.btn}>
            <Link href="/sign-up" style={{ color: "white" }}>
              Get Started
            </Link>
          </View>
        </View>
      </View>
    </>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    backgroundColor: "#2c365a",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  top: {
    width: "100%",
    maxHeight: "55%",
    flex: "1 1 auto",
  },
  bottom: {
    width: "100%",
    padding: 25,
    justifyContent: "flex-end",
    flex: "1 1 auto",
  },
  big: {
    fontSize: 37,
    color: "white",
    textAlign: "center",
  },
  small: {
    fontSize: 18,
    textAlign: "center",
    color: "#D1D5DB",
    marginTop: 20,
  },
  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  btn: {
    width: "100%",
    borderRadius: 40,
    padding: 20,
    alignItems: "center",
    backgroundColor: "blue",
    marginVertical: 20,
  },
});
