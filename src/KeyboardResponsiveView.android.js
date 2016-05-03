import { View, StyleSheet } from 'react-native';
import { Component } from 'react';

/**
* There is no need to handle the keyboard on Android,
* just add android:windowSoftInputMode="adjustResize" in your AndroidManifest.xml
* if you want to have this behaviour.
**/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class KeyboardResponsiveViewAndroid extends Component {

  render() {
    return <View style={[styles.container, this.props.style]}>{this.props.children}</View>
  }

}

export default KeyboardResponsiveViewAndroid;
