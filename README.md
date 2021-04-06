# COMP 2601 Project Assignment

Omar Garcia Flores 101072514

## Background

This assignment is meant to provide a way to explore pictures from the [unsplash](https://unsplash.com) web [API](https://unsplash.com/developers).

The application will be built using mobile [React Native](https://reactnative.dev/) framework and compiled with [Expo](https://expo.io/) which will make it possible to run it both Android and iOS environments.

## Assignment Requirements

An application will be built that has the ability to perform search queries to the Unsplash api and then render a gallery of photos matching that query. These should include an implementation of pagination.

Once an image is selected, another screen must appear displaying the image as well as details about the image including the photographer, date taken, as well as topics regarding the picture.

In this screen, the user should also be able to share the link to the original Unsplash image website using the device's native sharing options.

Loading states should also be implemented to show the user when requests are being processed.

## Design Requirements

1. The application must be written with the React Native framework. It then should be compiled using the Expo utility. This means that it will be able to run in both Android and iOS devices.
2. An input component should be used to get the user's query and then a button along with it to call the Unsplash API. This input query should be cleared from any starting and trailing spaces in order to obtain a clear query.
3. When the search button is pressed, a fetch function should be used in order to do a GET request to the unsplash api with endpoint `https://api.unsplash.com//search/photos?client_id=<token>?&query=<string>&page=<number>`. Once this request is completed the result JSON should be parsed in order to obtain an array of resulting image data objects.
4. While the request is processed, some sort of loading state should be implemented which should respectively be `true` when a request is sent, and `false` when a request is completed. This state should be reflected on the UI somehow.
5. The result of the API request should be displayed as a vertical gallery of all the images.

## Compilation Instructions

1. Unzip application directoy
2. Install dependencies with `npm i`
3. Install expo globally with `npm i -g expo`
4. Compile application using `npm start` which will launch a browser window containing a QR Code which will be scanned using the Expo application.
5. Download the official Expo application from either the [App Store](https://apps.apple.com/ca/app/expo-go/id982107779) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA&gl=US)
6. Once the QR code is scanned the mobile application should compile and appear on your device.
