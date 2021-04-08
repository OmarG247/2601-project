# COMP 2601 Final Project

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
   
2. An input component should be used to get the user's query and then a button along with it to call the Unsplash API. This input query should be cleared from any starting and trailing spaces in order to obtain a clear query. Along with this, another button should be implemented that will clear the text input. An alert should be displayed if the search is attempted with an empty query.
   
3. When the search button or the search key on the keyboard is pressed, a fetch function should be used in order to do a GET request to the unsplash api with endpoint `https://api.unsplash.com//search/photos?client_id=<token>?&query=<string>&page=<number>`. Once this request is completed the result JSON should be parsed in order to obtain an array of resulting image data objects. The API will require an access token which can be obtained by signing up for an account on Unsplash. This access token should not be hard coded onto the application. To solve this problem, it will be written onto a `.env` file that will only be used on compilation.
   
4. While the request is processed, some sort of loading state should be implemented which should respectively be `true` when a request is sent, and `false` when a request is completed. This state should be reflected on the UI somehow.
   
5. The result of the API request should be displayed as a vertical gallery of all the images. These images should be rendered as clickable views that will be opening a details view. However, if the query has no results, an alert should be displayed with a message to notify the user.
   
6. At the bottom of the image gallery, a "more" button should be displayed in order to allow the user to see more pages of the results. This button should use the Unsplash service and the API endpoint in order to query for the following pages. This should also display the "loading" state of the application.

7.  Once am image is clicked, an image details screen should be displayed. This screen should display the image as well as details of the image such as the photographer, when the picture was taken, as well as topics related to the image which may or may not be included in the API data.
    
8. The size of the image should be considered when styling. The ratio of height / width should be used to render a specific height and width that will not cover the entire height of the screen, this should include modifyiing the aspect ratio in which the image is displayed.
    
9. Two options should be displayed at the bottom of this view, a button to return to the main gallery, as well as a share button to share a link to the original Unsplash page of the image. Thoese options should always be visible to the user no matter the height of the image or the amount of information displayed. This should be taken into account.
    
10. The sharing button should use the device's native options to share the image link. This should include sharing it to contacts, recent apps used, as well as opening it in the device's default browser.

## Compilation & Installation Instructions

1. Unzip application directoy
   
2. Install dependencies with `npm i`
   
3. Install expo globally with `npm i -g expo`
   
4. Compile application using `npm start` which will launch a browser window containing a QR Code which will be scanned using the Expo application.
   
5. Download the official Expo application from either the [App Store](https://apps.apple.com/ca/app/expo-go/id982107779) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA&gl=US)
   
6. Once the QR code is scanned the mobile application should compile and appear on your device.
