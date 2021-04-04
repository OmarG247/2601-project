import React, { useState } from "react";
import { Image, Text, TextInput, TouchableHighlight, View } from "react-native";
import { AppStyles } from "./Styles";
import logo from "./assets/logo.png";
import { useFonts } from "expo-font";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [fontsLoaded] = useFonts({
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
  });

  return (
    fontsLoaded && (
      <View style={AppStyles.parent}>
        <View style={AppStyles.topContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Image source={logo} style={AppStyles.logo} />
            <Text style={[AppStyles.header, { marginLeft: 16 }]}>home</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: 'row'
            }}
          >
            <TextInput
              placeholder={"🔍 dogs, cats, lego, city"}
              placeholderTextColor={"rgba(0, 0, 0, 0.25)"}
              style={AppStyles.input}
            />
            <TouchableHighlight style={AppStyles.searchButton}>
              <Text style={AppStyles.search}>search</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    )
  );
};

export default App;
