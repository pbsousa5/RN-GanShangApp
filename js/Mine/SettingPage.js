/**
 * Created by fanmaoyu on 2017/4/1.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import BaseComponent from '../base/BaseComponent';

export default class SettingPage extends BaseComponent{

    static defaultProps={
        title:'设置'
    }

    createView(){
        return (<View><Text>setting </Text></View>);
    }
}

const styles = StyleSheet.create({

});