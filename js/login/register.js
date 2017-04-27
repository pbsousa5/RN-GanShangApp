/**
 * Created by fanmaoyu on 2017/3/20.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';

const IMG_SHOUJIHAOMA = require('./img/shoujihaoma.png');
const IMG_YANZHENGMA = require('./img/yanzhengma.png');
const IMG_SHEZHIMIMA = require('./img/shezhimima.png');
const IMG_SHURUNICHENG = require('./img/shurunicheng.png');
const IMG_XIEYI_CHECKED = require('./img/xieyi-checked.png');

import BaseComponent from '../base/BaseComponent'


export default class RegisterPage extends BaseComponent{

    static defaultProps = {
        title:'注册'
    }

    getVerifyCode(){

    }

    finishRegisterBtnAction(){

    }

    createView(){
        return (
            <ScrollView style={[styles.flex, styles.bgColor]}>
                <View style={styles.cell}>
                    <Image source={IMG_SHOUJIHAOMA} style={styles.cell_image}/>
                    <TextInput keyboardType='numeric' style={[styles.flex, styles.cell_input, styles.cell_font, {marginLeft:15}]} placeholder="手机号码"/>
                    <TouchableOpacity style={styles.cell_radius} onPress={this.getVerifyCode}>
                       <Text style={styles.cell_btn}>获取验证码</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cell}>
                    <Image source={IMG_YANZHENGMA} style={styles.cell_image}/>
                    <TextInput keyboardType='numeric' style={[styles.flex, styles.cell_input, styles.cell_font]} placeholder="验证码"/>
                </View>
                <View style={styles.cell}>
                    <Image source={IMG_SHEZHIMIMA} style={styles.cell_image}/>
                    <TextInput style={[styles.flex, styles.cell_input, styles.cell_font]} placeholder="设置密码"/>
                </View>
                <View style={styles.cell}>
                    <Image source={IMG_SHURUNICHENG} style={styles.cell_image}/>
                    <TextInput style={[styles.flex, styles.cell_input, styles.cell_font]} placeholder="输入昵称"/>
                </View>

                <TouchableOpacity style={styles.finish_btn} onPress={this.finishRegisterBtnAction}>
                    <Text style={{color:'#4A4A4A', fontWeight:'bold'}}>完成</Text>
                </TouchableOpacity>

                <View style={styles.view_xieyi}>
                    <TouchableWithoutFeedback>
                        <Image source={IMG_XIEYI_CHECKED} style={{marginLeft:50}}/>
                    </TouchableWithoutFeedback>
                    <Text style={[styles.xieyi_font, {color:'#4A4A4A', marginLeft:5}]}>同意</Text>
                    <TouchableOpacity>
                        <Text style={[styles.xieyi_font, {color:'#FC5268', marginLeft:5}]}>用户协议</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },

    bgColor:{
        backgroundColor:'white'
    },

    view_xieyi:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
    },

    xieyi_font:{
        fontSize:10,
    },

    finish_btn:{
        borderRadius:5,
        borderColor:'#4A4A4A',
        borderWidth:1,
        marginTop:100,
        marginLeft:50,
        marginRight:50,
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },

    cell:{
        flexDirection:'row',
        height:40,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#F0F0F0',
    },

    cell_image:{
        marginLeft:15,
    },

    cell_font:{
        fontSize:14
    },

    cell_input:{
        marginLeft:10,
        paddingLeft:5,
    },

    cell_radius:{
        borderRadius:3,
        overflow:'hidden',
    },

    cell_btn:{
        backgroundColor:'#4A4A4A',
        marginRight:10,
        padding:5,
        color:'white',
        fontSize:12,
    }
});