import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommmunityIcons } from "@expo/vector-icons";
import ArtistCard from "../components/ArtistCard";
import RencentlyPlayedCard from "../components/RecentlyPlayedCard";

const HomeScreen = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [recentlyplayed, setRecentlyPlayed] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const greetingMessage = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return "Bom dia";
    } else if (currentTime < 16) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

  const message = greetingMessage();
  const getProfile = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer + ${accessToken}`,
        },
      });
      const data = await response.json();
      setUserProfile(data);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getProfile();
    console.log(er.message);
  }, []);
  console.log(userProfile);
  const getRecentlyPlayedSongs = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me/player/recently-played?limit=4",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const tracks = response.data.items;
      setRecentlyPlayed(tracks);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getRecentlyPlayedSongs();
  }, []);
  console.log(recentlyplayed);
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginVertical: 8,
          backgroundColor: "#282828",
          borderRadius: 4,
          elevation: 3,
        }}
      >
        <Image
          style={{ height: 55, width: 55 }}
          source={{ uri: item.track.album.images[0].url }}
        />
        <View
          style={{ flex: 1, marginHorizontal: 8, justifyContent: "center" }}
        >
          <Text
            numberOfLines={2}
            style={{ fontSize: 13, fontWeight: "bold", color: "white" }}
          >
            {item.tracks.name}
          </Text>
        </View>
      </Pressable>
    );
  };
  useEffect(() => {
    const getTopItems = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("token");
        if (!accessToken) {
          console.log("Token de acesso nao encontrado");
          return;
        }
        const type = "artists";
        const response = await axios.get(
          `https://api.spotify.com/v1/ne/top/${type}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setTopArtists(response.data.items);
      } catch (err) {
        console.log(err.message);
      }
    };
  }, []);
  console.log(topArtists);
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                resizeMode: "cover",
              }}
              source={{ uri: userProfile?.images[0].uri }}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              {message}
            </Text>
          </View>
          <MaterialCommmunityIcons
            name="lightning-bolt-outline"
            size={24}
            color="white"
          />
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#282828",
              padding: 10,
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>Música</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#282828",
              padding: 10,
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>
              Podcasts & Shows
            </Text>
          </Pressable>
        </View>

        <View style={{ height: 10 }} />

        <View>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              flexDirection: "row",
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3,
            }}
          >
            <LinearGradient colors={["#33006f", "#FFFFFF"]}>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <AntDesign name="heart" size={24} color="black" />
              </Pressable>
            </LinearGradient>
            <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
              Sons curtidos
            </Text>
          </Pressable>
        </View>
        <View style={{ height: 10 }} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Pressable></Pressable>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              flexDirection: "row",
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3,
            }}
          >
            <Image
              style={{ width: 55, height: 55 }}
              source={{ uri: "https://i.pravatar.cc/100" }}
            />
            <View style={styles.randomArtist}></View>
            <Text>Hiphop</Text>
          </View>
          <Text></Text>
        </View>
        <FlatList
          data={recentlyplayed}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          Seus artistas favoritos
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {topArtists.map((item, index) => (
            <ArtistCard item={item} key={index} />
          ))}
        </ScrollView>
        <View style={{ heigth: 10 }} />
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          Últimas tocadas
        </Text>
        <FlatList
          data={recentlyplayed}
          renderItem={({ item }) => (
            <RencentlyPlayedCard item={item} key={index} />
          )}
        ></FlatList>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
