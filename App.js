import React, { useState, useEffect } from "react";
import {
  Alert,
  Image,
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
  const [fontsLoaded] = useFonts({
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    console.log(images);
  }, [images]);

  const search = () => {
    if (searchQuery.trim() === "") {
      Alert.alert("search cannot me empty");
      return;
    }

    searchImages(searchQuery, page).then((res) => {
      Alert.alert("no results were found with that query");
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
              placeholder={"🔍 dogs, cats, lego, city"}
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
        <View style={AppStyles.galleryContainer}></View>
      </View>
    )
  );
};

export default App;
