import React, { Component } from 'react';
import {
  StyleSheet,
  Animated,
  View,
  Easing,
  Dimensions,
  InteractionManager,
} from 'react-native';
import KeyboardObserver from './KeyboardObserver';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

class KeyboardResponsiveViewIOS extends Component {

  static propTypes = {
    style: View.propTypes.style,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      keyboardOffset: new Animated.Value(0),
    };
    this.bottomOffset = 0;
    this._onChange = () => this.forceUpdate();
  }

  componentDidMount() {
    this.keyboardListener = KeyboardObserver.addListener(this._onChange);
    setTimeout(() => {
      if (!this.refs.rootView) {
        return;
      }
      this.refs.rootView.measure( (ox, oy, width, height, px, py) => {
        this.bottomOffset = Math.max(Dimensions.get('window').height - py - height, 0);
        this.hanldeKeyboardPosition();
      });
    }, 16);
  }

  componentDidUpdate() {
    this.hanldeKeyboardPosition();
  }

  componentWillUnmount() {
    this.keyboardListener.remove();
  }

  render() {
    const wrapperBottomOffset = {
      marginBottom: this.state.keyboardOffset,
    };
    return (
      <View ref="rootView" style={[styles.container, this.props.style]}>
        <Animated.View style={[styles.wrapper, wrapperBottomOffset]}>
          {this.props.children}
        </Animated.View>
      </View>
    );
  }

  hanldeKeyboardPosition() {
    const {keyboardHeight, animationWillEndAt} = KeyboardObserver.getKeyboardInfo();
    const toValue = Math.max(keyboardHeight - this.bottomOffset, 0);
    let duration = Math.max(animationWillEndAt - new Date().getTime(), 50);
    duration = Math.min(duration, 300); // Safety
    Animated.timing(
      this.state.keyboardOffset,
      { toValue, duration, easing: Easing.out(Easing.ease) }
    ).start();
  }
}

export default KeyboardResponsiveViewIOS;
