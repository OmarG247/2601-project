import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  parent: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingTop: 40,
  },
  topContainer: {
    display: "flex",
    position: "absolute",
    top: 0,
    width: "100%",
    paddingBottom: 16,
    paddingTop: 64,
    paddingHorizontal: 12,
    backgroundColor: "white",
    borderBottomColor: "rgba(0, 0, 0, 0.25)",
    borderBottomWidth: 2,
  },
  input: {
    flex: 1,
    marginTop: 12,
    fontFamily: "DMSans-Regular",
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  logo: {
    height: 56,
    width: 65,
  },
  header: {
    fontFamily: "DMSans-Regular",
    fontSize: 32,
    color: "black",
  },
});
