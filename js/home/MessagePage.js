/**
 * Created by fanmaoyu on 2017/3/20.
 */
import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


import BaseComponent from '../base/BaseComponent';

export default class MessagePage extends BaseComponent{

    static defaultProps = {
        title:'消息'
    }

    createView(){
        return (
            <View><Text>消息</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },

    bgColor:{
        backgroundColor:'white'
    },
});