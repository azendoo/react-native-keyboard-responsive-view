# KeyboardResponsiveView

[![NPM version](https://badge.fury.io/js/react-native-keyboard-responsive-view.svg)](http://badge.fury.io/js/react-native-keyboard-responsive-view)

KeyboardResponsiveView is a React Native component which will resize depending on the keyboard position.
This package will only work on iOS as on Android, the keyboard management is handle via the `AndroidManifest`.

## Installation
Use this with react-native 0.20.0 or later.

```
npm install react-native-keyboard-responsive-view
```

## Usage

Just wrap the component you want to be responsive to the keyboard.

```js
import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import KeyboardResponsiveView from 'react-native-keyboard-responsive-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F0F0F0',
  },
  row: {
    height: 64,
    margin: 13,
    backgroundColor: '#F68B38',
    borderRadius: 3,
  },
  textInput: {
    height: 44,
    alignSelf: 'stretch',
    padding: 10,
    backgroundColor: 'white',
  },
  fakeTabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  fakeTabBarItem: {
    width: 38,
    height: 38,
    margin: 10,
    backgroundColor: '#4C4C4C',
    borderRadius: 3,
  },
});

class KeyboardResponsiveViewExample extends Component {

  render() {
    return (
      <View style={styles.container}>
        <KeyboardResponsiveView>
          <ScrollView>
            <View style={styles.row} />
            <View style={styles.row} />
            <View style={styles.row} />
            <View style={styles.row} />
            <View style={styles.row} />
            <View style={styles.row} />
            <View style={styles.row} />
            <View style={styles.row} />
          </ScrollView>
          <TextInput style={styles.textInput} placeholder={"Type me"}/>
        </KeyboardResponsiveView>
        <View style={styles.fakeTabBarContainer}>
          <View style={styles.fakeTabBarItem} />
          <View style={styles.fakeTabBarItem} />
          <View style={styles.fakeTabBarItem} />
          <View style={styles.fakeTabBarItem} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('KeyboardResponsiveViewExample', () => KeyboardResponsiveViewExample);
```

**NOTE:** The `KeyboardResponsiveView` does not do anything on Android, if you want to handle your keyboard, report to the **Android** section below :down:.

## Tips and Caveats

- It will handle elements below your `KeyboardResponsiveView` to fit correctly, (with a tab bar for instance)
- You shouldn't use nested `KeyboardResponsiveView`
- It currently doesn't handle very well `keyboardDismissMode="interactive"` BTW if you have a solution for this, please open an issue or submit a PR :smile:


## Android

As we Android currently doesn't provide a way to listen the keyboard (or I just didn't noticed how to, please tell me if I'm wrong),
we use the `android:windowSoftInputMode="adjustResize"` in our Manifest.
It will then work as if you have your `KeyboardResponsiveView` at the root of your Application.
