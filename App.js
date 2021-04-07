import React, { useState, useEffect, useRef } from "react";
import {
  Alert,
  Image,
  Keyboard,
  ScrollView,
  StatusBar,
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
import CancelIcon from "./assets/cancel.png";

const randomDelay = () => Math.floor(Math.random() * 1500 + 500);

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [currQuery, setCurrQuery] = useState("");
  const [loading, setLodaing] = useState(false);
  const [currImage, setCurrImage] = useState(null);
  const scrollRef = useRef(null);
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

  useEffect(() => {
    setPage(1);
    if (scrollRef.current !== null) {
      scrollRef.current.scrollTo({ y: 0 });
    }
  }, [currQuery]);

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
        if (res.results.length === 0) {
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
        <StatusBar translucent backgroundColor="black" />
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
                marginTop: 12,
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder={"📸 dogs, cats, lego, city"}
                placeholderTextColor={"rgba(0, 0, 0, 0.25)"}
                style={AppStyles.input}
                onChangeText={(input) => setSearchQuery(input)}
                value={searchQuery}
                onSubmitEditing={() => search()}
                returnKeyType="search"
                selectTextOnFocus
              />
              {searchQuery !== "" && (
                <TouchableHighlight
                  onPress={() => {
                    setSearchQuery("");
                  }}
                  style={[
                    AppStyles.button,
                    {
                      marginLeft: 8,
                      borderRadius: 100,
                      height: 36,
                      width: 36,
                      borderWidth: 1,
                      borderColor: "black",
                      backgroundColor: "white",
                      color: "black",
                    },
                  ]}
                >
                  <Image
                    source={CancelIcon}
                    style={{ height: 16, width: 16 }}
                  />
                </TouchableHighlight>
              )}
              <TouchableHighlight
                onPress={() => search()}
                style={[
                  AppStyles.button,
                  {
                    marginLeft: 8,
                    backgroundColor: loading ? "rgba(0, 0, 0, 0.5)" : "black",
                  },
                ]}
              >
                <Text style={AppStyles.buttonText}>search</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={AppStyles.galleryContainer}>
            <ScrollView ref={scrollRef} style={{ flex: 1 }}>
              {images.map((image, index) => (
                <TouchableOpacity
                  key={`image-${index}`}
                  activeOpacity={0.75}
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
                <TouchableHighlight
                  onPress={() => setPage(page + 1)}
                  disabled={loading}
                  style={AppStyles.moreButton}
                >
                  <Text style={AppStyles.buttonText}>more</Text>
                </TouchableHighlight>
              )}
            </ScrollView>
          </View>
        </View>
        {currImage && (
          <ImageModal
            image={currImage}
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
            <Text
              style={[AppStyles.buttonText, { marginTop: 12, fontSize: 20 }]}
            >
              loading
            </Text>
          </View>
        )}
      </>
    )
  );
};

export default App;
