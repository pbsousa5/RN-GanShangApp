/**
 * Created by fanmaoyu on 2017/4/1.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native';

import BaseComponent from '../base/BaseComponent';

export default class ModifyNichengPage extends BaseComponent{

    createView(){
        return (<View>
            <TextInput style={styles.input} placeholder="请输入..."/>
        </View>);
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },

    input:{
        height:40,
        marginTop:20,
        marginHorizontal:15,
        borderWidth:1,
        borderColor:'#F0F0F0',
        padding:5,
        fontSize:12,
        borderRadius:5,
    },
});