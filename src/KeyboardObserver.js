import {DeviceEventEmitter} from 'react-native';

class KeyboardObserver {

  constructor() {
    this.keyboardHeight = 0;
    this.animationWillEndAt = 0;
    this.listeners = {};
    this.listenerId = 0;
    DeviceEventEmitter.addListener('keyboardWillShow', this.handleKeyboardWillShow.bind(this));
    DeviceEventEmitter.addListener('keyboardWillHide', this.handleKeyboardWillHide.bind(this));
  }

  addListener(callback) {
    const id = this.listenerId++;
    this.listeners[id] = callback;
    return {remove: () => delete this.listeners[id]};
  }

  notifyListeners() {
    const info = this.getKeyboardInfo();
    Object.keys(this.listeners).forEach(key => this.listeners[key](info));
  }

  handleKeyboardWillShow(frames) {
    this.keyboardHeight = frames.endCoordinates.height;
    this.animationWillEndAt = new Date().getTime() + frames.duration;
    this.notifyListeners()
  }

  handleKeyboardWillHide(frames) {
    this.animationWillEndAt = new Date().getTime() + frames.duration;
    this.keyboardHeight = 0;
    this.notifyListeners()
  }

  getKeyboardInfo() {
    return {
      keyboardHeight: this.keyboardHeight,
      animationWillEndAt: this.animationWillEndAt,
    };
  }
}

export default new KeyboardObserver();
