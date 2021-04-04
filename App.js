import React, { useState, useEffect } from "react";
import {
  Alert,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { AppStyles } from "./Styles";
import logo from "./assets/logo.png";
import { useFonts } from "expo-font";
import { searchImages } from "./unsplash.service";
import loadingIcon from "./assets/loading.gif";
import ImageModal from "./ImageModal";

const randomDelay = () => Math.floor(Math.random() * 1500 + 500);

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [currQuery, setCurrQuery] = useState("");
  const [loading, setLodaing] = useState(false);
  const [currImage, setCurrImage] = useState(null);
  const [fontsLoaded] = useFonts({
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    setLodaing(true);
    setTimeout(() => {
      searchImages(currQuery, page).then((res) => {
        setImages([...images, ...res.results]);
        setLodaing(false);
      });
    }, randomDelay());
  }, [page]);

  const search = () => {
    const trimmed = searchQuery.trim();

    if (trimmed === "") {
      Alert.alert("search cannot me empty");
      return;
    }

    setLodaing(true);
    setTimeout(() => {
      setLodaing(false);
      setCurrQuery(trimmed);
      searchImages(trimmed, page).then((res) => {
        if (res.length === 0) {
          Alert.alert("no results were found with that query");
        } else {
          Keyboard.dismiss();
        }
        setImages(res.results);
        setLodaing(false);
      });
    }, randomDelay());
  };

  return (
    fontsLoaded && (
      <>
        {currImage && (
          <ImageModal
            imageData={currImage}
            handleClose={() => setCurrImage(null)}
          />
        )}
        {loading && (
          <View style={AppStyles.loadingContainer}>
            <Image
              source={loadingIcon}
              style={{
                height: 64,
                width: 64,
              }}
            />
            <Text style={[AppStyles.search, { marginTop: 12, fontSize: 20 }]}>
              loading
            </Text>
          </View>
        )}
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
                style={[
                  AppStyles.searchButton,
                  { backgroundColor: loading ? "rgba(0, 0, 0, 0.5)" : "black" },
                ]}
              >
                <Text style={AppStyles.search}>search</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={AppStyles.galleryContainer}>
            <ScrollView style={{ flex: 1 }}>
              {images.map((image, index) => (
                <TouchableOpacity
                  key={`image-${index}`}
                  onPress={() => setCurrImage(image)}
                >
                  <Image
                    style={[
                      AppStyles.galleryImage,
                      { aspectRatio: image.width / image.height },
                    ]}
                    source={{ uri: image.urls.regular }}
                  />
                </TouchableOpacity>
              ))}
              {images.length > 0 && (
                <View style={{ width: "100%", padding: 16, paddingBottom: 40 }}>
                  <TouchableHighlight
                    onPress={() => setPage(page + 1)}
                    disabled={loading}
                    style={AppStyles.moreButton}
                  >
                    <Text style={AppStyles.search}>more</Text>
                  </TouchableHighlight>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </>
    )
  );
};

export default App;
