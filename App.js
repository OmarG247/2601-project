import React, { useState, useEffect } from "react";
import {
  Alert,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { AppStyles } from "./Styles";
import logo from "./assets/logo.png";
import { useFonts } from "expo-font";
import { searchImages } from "./unsplash.service";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [currQuery, setCurrQuery] = useState("");
  const [fontsLoaded] = useFonts({
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    searchImages(currQuery, page).then((res) => {
      setImages([...images, ...res.results]);
    });
  }, [page]);

  const search = () => {
    const trimmed = searchQuery.trim();

    if (trimmed === "") {
      Alert.alert("search cannot me empty");
      return;
    }

    setCurrQuery(trimmed);
    searchImages(trimmed, page).then((res) => {
      if (res.length === 0) {
        Alert.alert("no results were found with that query");
      } else {
        Keyboard.dismiss();
      }
      setImages(res.results);
    });
  };

  return (
    fontsLoaded && (
      <View style={AppStyles.parent}>
        <View style={AppStyles.topContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Image source={logo} style={AppStyles.logo} />
            <Text style={[AppStyles.header, { marginLeft: 16 }]}>Images</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 8,
            }}
          >
            <TextInput
              placeholder={"📸 dogs, cats, lego, city"}
              placeholderTextColor={"rgba(0, 0, 0, 0.25)"}
              style={AppStyles.input}
              onChangeText={(input) => setSearchQuery(input)}
              value={searchQuery}
            />
            <TouchableHighlight
              onPress={() => search()}
              style={AppStyles.searchButton}
            >
              <Text style={AppStyles.search}>search</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={AppStyles.galleryContainer}>
          <ScrollView style={{ flex: 1 }}>
            {images.map((image, index) => (
              <Image
                key={`image-${index}`}
                style={[
                  AppStyles.galleryImage,
                  { aspectRatio: image.width / image.height },
                ]}
                source={{ uri: image.urls.regular }}
              />
            ))}
            {images.length > 0 && (
              <View style={{ width: "100%", padding: 16 }}>
                <TouchableHighlight
                  onPress={() => setPage(page + 1)}
                  style={AppStyles.moreButton}
                >
                  <Text style={AppStyles.search}>more</Text>
                </TouchableHighlight>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    )
  );
};

export default App;
