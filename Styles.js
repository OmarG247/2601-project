import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  parent: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingBottom: 40,
  },
  topContainer: {
    display: "flex",
    width: "100%",
    paddingBottom: 16,
    paddingTop: 64,
    paddingHorizontal: 12,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 12,
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
  searchButton: {
    alignSelf: "flex-end",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "black",
    marginLeft: 8,
  },
  search: {
    fontFamily: "DMSans-Medium",
    fontSize: 16,
    color: "white",
  },
  galleryContainer: {
    flex: 1,
    width: "100%",
  },
  galleryImage: {
    width: "100%",
  },
  moreButton: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
  },
});
