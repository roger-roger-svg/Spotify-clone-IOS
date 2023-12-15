import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import * as AppAuth from "expo-app-auth";

const LoginScreen = () => {
  async function authenticate() {
    const config = {
      issuer: "https://accounts.spotify.com",
      clientId: "5124d44c3c1443d595ec39df17fa92d6",
      scopes: [
        "user-read-email",
        "user-library-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public", // or "playlist-modify-private"
      ],
      redirectUrl: "exp://localhost:19002/--/spotify-auth-callback",
    };
    const result = await AppAuth.authAsync[config];
    console.log(result);
  }

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <Entypo
          style={{ textAlign: "center" }}
          name="spotify"
          size={24}
          color="white"
        />
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          Millions of Songs Free on spotify!
        </Text>
        <View style={{ height: 80 }} />
        <Pressable
          style={{
            backgroundColor: "#1DB954",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Inscreva-se no Spotify</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            borderColor: "#C0C0C0",
            borderWidth: 0.8,
          }}
        >
          <MaterialIcons name="phone-iphone" size={24} color="white" />
          <Text
            style={{
              fontWeight: "500",
              color: "white",
              textAlign: "center",
              flex: 1,
            }}
          >
            Continuar com um número de telefone
          </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            borderColor: "#C0C0C0",
            borderWidth: 0.8,
          }}
        >
          <FontAwesome5 name="google" size={24} color="red" />
          <Text
            style={{
              fontWeight: "500",
              color: "white",
              textAlign: "center",
              flex: 1,
            }}
          >
            Continuar com google
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            borderColor: "#C0C0C0",
            borderWidth: 0.8,
          }}
        >
          <FontAwesome5 name="facebook" size={24} color="#3b5998" />
          <Text
            style={{
              fontWeight: "500",
              color: "white",
              textAlign: "center",
              flex: 1,
            }}
          >
            Continuar com Facebook
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default LoginScreen;
