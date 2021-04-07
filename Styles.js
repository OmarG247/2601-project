import { Platform, StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  parent: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "black",
    paddingTop: Platform.OS === "ios" ? 40 : 20,
  },
  topContainer: {
    display: "flex",
    width: "100%",
    paddingBottom: 16,
    paddingTop: 24,
    paddingHorizontal: 12,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 12,
    zIndex: 4,
  },
  input: {
    flex: 1,
    fontFamily: "DMSans-Regular",
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  logo: {
    height: 46,
    width: 53,
  },
  header: {
    fontFamily: "DMSans-Regular",
    fontSize: 24,
    color: "black",
  },
  button: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "DMSans-Medium",
    fontSize: 16,
    color: "white",
  },
  galleryContainer: {
    flex: 1,
    width: "100%",
    position: "relative",
    backgroundColor: "white",
  },
  galleryImage: {
    width: "100%",
  },
  moreButton: {
    width: "100%",
    paddingTop: 24,
    paddingBottom: Platform.OS === "ios" ? 40 : 24,
    paddingHorizontal: 12,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
  },
  loadingContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 4,
  },
});
