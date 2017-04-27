/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

import Navigation from './js/navigation/Navigation';
import TabbarController from './js/tabs/TabbarController';

export default class GanShangApp extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
  }

  render() {
      var _that = this;
      return (
          <Navigation component={TabbarController} />
      );
  }
}

AppRegistry.registerComponent('GanShangApp', () => GanShangApp);
