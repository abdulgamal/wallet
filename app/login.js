import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  function renderLogo() {
    return (
      <View
        style={{
          marginTop: 10 * 5,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/dukaapp.png")}
          resizeMode="contain"
          style={{
            width: "60%",
          }}
        />
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: 10 * 3,
          marginHorizontal: 10 * 3,
        }}
      >
        {/* Phone Number */}
        <View style={{ marginTop: 10 * 2 }}>
          <Text style={{ color: "#E6FEF0", fontSize: 16 }}>Phone Number</Text>

          <View style={{ flexDirection: "row" }}>
            {/* Country Code */}
            {/* Phone Number */}
            <TextInput
              style={{
                flex: 1,
                marginVertical: 10,
                borderBottomColor: "#FFFFFF",
                borderBottomWidth: 1,
                height: 40,
                color: "#FFFFFF",
                fontSize: 16,
              }}
              placeholder="Enter Phone Number"
              placeholderTextColor={"#FFFFFF"}
              selectionColor={"#FFFFFF"}
            />
          </View>
        </View>

        {/* Password */}
        <View style={{ marginTop: 10 * 2 }}>
          <Text style={{ color: "#E6FEF0", fontSize: 16 }}>Password</Text>
          <TextInput
            style={{
              marginVertical: 10,
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1,
              height: 40,
              color: "#FFFFFF",
              fontSize: 16,
            }}
            placeholder="Enter Password"
            placeholderTextColor={"#FFFFFF"}
            selectionColor={"#FFFFFF"}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={
                showPassword
                  ? require("../assets/disable_eye.png")
                  : require("../assets/eye.png")
              }
              style={{
                height: 20,
                width: 20,
                tintColor: "#FFFFFF",
              }}
            />
          </TouchableOpacity>
        </View>
        <Link
          href="/sign-up"
          style={{
            color: "blue",
            fontSize: 16,
            marginTop: 5,
            textAlign: "right",
          }}
        >
          Forgot Password?
        </Link>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={{ margin: 10 * 3 }}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: "#1E1F20",
            borderRadius: 30 / 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.push("/home")}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 15, display: "flex", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 16 }}>
            Don't have an Account?
          </Text>
          <Link
            href="/sign-up"
            style={{ color: "blue", fontSize: 16, marginTop: 15 }}
          >
            Sign Up
          </Link>
        </View>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient colors={["#00BA63", "#2BC978"]} style={{ flex: 1 }}>
        <ScrollView>
          {renderLogo()}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Login;
