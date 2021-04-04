import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  parent: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingTop: 40
  },
  searchContainer: {
    display: "flex",
    position: "absolute",
    top: 40,
    left: 0,
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "lightgrey",
  },
  input: {
    width: "100%",
  },
  logo: {
    height: 56,
    width: 64
  }
});
