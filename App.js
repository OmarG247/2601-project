import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { AppStyles } from './Styles';
import logo from './assets/logo.png'

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={AppStyles.parent}>
      <View style={AppStyles.searchContainer}>
        <Image source={logo} style={AppStyles.logo} />
        <TextInput style={AppStyles.input} />
      </View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

export default App;
