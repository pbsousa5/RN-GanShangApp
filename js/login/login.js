/**
 * Created by fanmaoyu on 2017/3/20.
 */
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    Navigator,
    Button
} from 'react-native';

const IMG_SHOUJIHAOMA = require('./img/shoujihaoma.png');
const IMG_SHEZHIMIMA = require('./img/shezhimima.png');
const IMG_OPENSECRET = require('./img/open-secret.png');

const IMG_WECHAT = require('./img/weixin.png');
const IMG_SINA = require('./img/sina.png');
const IMG_QQ = require('./img/qq.png');

import BaseComponent from '../base/BaseComponent';
import ForgetPwdPage from './forgetpwd';
import RegisterPage from './register';
import NavigatorBar from '../navigation/NavigatorBar';

class LoginNavigator extends NavigatorBar{

    rightView(){
        return <TouchableOpacity onPress={this.props.rightAction}><Text style={{color:'#FC5268'}}>注册</Text></TouchableOpacity>
    }
}

export default class LoginPage extends BaseComponent{

    loginBtnAction(){

    }

    go_register_page(){
        this.props.navigator.push({component:RegisterPage});
    }

    go_forgetpwd_page(){
        this.props.navigator.push({component:ForgetPwdPage});
    }

    navigationBar(){
        return <LoginNavigator title='登录' rightAction={()=>{this.go_register_page()}} navigator={this.props.navigator}/>
    }

    createView(){
        return (
            <ScrollView style={[styles.flex, styles.bgColor]}>
                <View style={styles.cell}>
                    <Image source={IMG_SHOUJIHAOMA} style={styles.cell_image}/>
                    <TextInput keyboardType='numeric' style={[styles.flex, styles.cell_input, styles.cell_font, {marginLeft:15}]} placeholder="手机号码"/>
                </View>
                <View style={styles.cell}>
                    <Image source={IMG_SHEZHIMIMA} style={styles.cell_image}/>
                    <TextInput style={[styles.flex, styles.cell_input, styles.cell_font]} placeholder="设置密码"/>
                    <TouchableOpacity>
                        <Image source={IMG_OPENSECRET} style={{marginRight:10}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.view_forget}>
                    <TouchableOpacity onPress={this.go_forgetpwd_page.bind(this)}>
                        <Text style={{color:'#FC5268', fontSize:12, marginRight:10}}>忘记密码?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.finish_btn} onPress={this.loginBtnAction}>
                    <Text style={{color:'#4A4A4A', fontWeight:'bold'}}>登录</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:100}}>
                    <View style={[styles.line, styles.flex, {marginLeft:20}]}></View>
                    <Text style={{fontSize:12, color:'#9B9B9B'}}>使用以下方式快速登录</Text>
                    <View style={[styles.line, styles.flex, {marginRight:20}]}></View>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around', marginLeft:20, marginRight:20, marginTop:20}}>
                    <TouchableWithoutFeedback>
                        <Image source={IMG_WECHAT}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image source={IMG_SINA}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image source={IMG_QQ}/>
                    </TouchableWithoutFeedback>
                </View>

            </ScrollView>
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

    line:{
        height:1,
        backgroundColor:'#F2F2F2'
    },

    view_forget:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'flex-end',
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
        borderRadius:20,
    },

    cell_btn:{
        backgroundColor:'#4A4A4A',
        marginRight:10,
        padding:5,
        color:'white',
        fontSize:12,
    }
});