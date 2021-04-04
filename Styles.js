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
  topContainer: {
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
    flex: 1,
    backgroundColor: 'lightblue'
  },
  logo: {
    height: 56,
    width: 64
  },
  header: {
    fontFamily: 'DMSans-Rregular',
    fontSize: 32,
    color: 'black'
  }
});
