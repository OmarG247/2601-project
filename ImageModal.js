import React from "react";
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ScrollView,
  Share,
  Platform,
} from "react-native";
import { AppStyles } from "./Styles";

const ImageModal = ({ image, handleClose }) => (
  <View style={Modal.container}>
    <View style={Modal.card}>
      <Image
        source={{ uri: image.urls.regular }}
        style={[
          Modal.image,
          {
            maxHeight: image.height > image.width ? "65%" : "100%",
            aspectRatio:
              image.height > image.width
                ? Platform.OS === "ios"
                  ? 0.75
                  : 0.9
                : image.width / image.height,
          },
        ]}
      />
      <View style={Modal.infoContainer}>
        <ScrollView>
          <View style={{ height: 12 }} />
          <View style={Modal.labelContainer}>
            <Text style={Modal.label}>taken by</Text>
            <Text style={Modal.info}>
              {`${image.user.name} @${image.user.username}`}
            </Text>
          </View>
          <View style={Modal.labelContainer}>
            <Text style={Modal.label}>uploaded in</Text>
            <Text style={Modal.info}>
              {`${new Date(image.created_at).toLocaleString("default", {
                month: "long",
              })}, ${new Date(image.created_at).getFullYear()}`}
            </Text>
          </View>
          {image.tags.length > 0 && (
            <View style={Modal.labelContainer}>
              <Text style={Modal.label}>tags</Text>
              <View style={Modal.tagsContainer}>
                {image.tags.map((tag, index) => (
                  <View
                    key={`tag-${index}`}
                    style={[
                      AppStyles.button,
                      {
                        backgroundColor: "white",
                        borderColor: "black",
                        borderWidth: 1,
                        marginHorizontal: 4,
                        marginVertical: 4,
                      },
                    ]}
                  >
                    <Text style={Modal.info}>{tag.title}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
          <View style={{ height: 112 }} />
        </ScrollView>
      </View>
      <View style={Modal.actions}>
        <Text
          onPress={() => {
            Share.share({
              title: "Share this image",
              message: image.links.html,
              url: image.links.html,
            });
          }}
          style={[AppStyles.buttonText, { color: "white", marginRight: 12 }]}
        >
          share
        </Text>
        <TouchableHighlight
          style={[AppStyles.button, { borderWidth: 1, borderColor: "white" }]}
          onPress={() => handleClose()}
        >
          <Text style={AppStyles.buttonText}>done</Text>
        </TouchableHighlight>
      </View>
    </View>
  </View>
);

const Modal = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    position: "absolute",
    zIndex: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 0,
  },
  card: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    padding: 12,
    paddingBottom: Platform.OS === "ios" ? 60 : 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    backgroundColor: "black",
    bottom: -1,
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    paddingHorizontal: 12,
  },
  image: {
    width: "100%",
  },
  labelContainer: {
    width: "100%",
    display: "flex",
    marginVertical: 8,
  },
  label: {
    fontFamily: "DMSans-Medium",
    fontSize: 14,
    marginBottom: 2,
  },
  info: {
    fontFamily: "DMSans-Regular",
    fontSize: 16,
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
    marginLeft: -4,
  },
});

export default ImageModal;
