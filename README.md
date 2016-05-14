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
import { Component } from 'react';

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import KeyboardResponsiveView from 'react-native-keyboard-responsive-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#FAFAFA',
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
  },
});

class InvertedScrollComponent extends Component {

  render() {
    return (
      <KeyboardResponsiveView>
        <ScrollView style={styles.container}>
          <View style={styles.row} />
          <View style={styles.row} />
          <View style={styles.row} />
          <View style={styles.row} />
          <View style={styles.row} />
          <View style={styles.row} />
          <View style={styles.row} />
          <View style={styles.row} />
        </ScrollView>
        <TextInput style={styles.textInput}>
      </KeyboardResponsiveView>
    );
  }

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
