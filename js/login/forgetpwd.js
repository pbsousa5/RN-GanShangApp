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

import BaseComponent from '../base/BaseComponent'

export default class ForgetPwdPage extends BaseComponent{

    static defaultProps = {
        title:'忘记密码'
    }

    finishModifyBtnAction(){

    }

    getVerifyCode(){

    }

    createView(){
        return (
            <ScrollView style={[styles.flex, styles.bgColor]}>
                <View style={styles.cell}>
                    <Text style={{marginLeft:15, color:'#4A4A4A'}}>+86</Text>
                    <Text style={[{marginLeft:20, color:'#4A4A4A'}, styles.flex]}>133****1200</Text>
                    <TouchableOpacity style={[{marginRight:10}, styles.cell_radius]} onPress={this.getVerifyCode}>
                        <Text style={[styles.cell_btn]}>获取验证码</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cell}>
                    <TextInput style={[styles.flex, styles.cell_input, styles.cell_font]} placeholder="输入验证码"/>
                </View>
                <View style={styles.cell}>
                    <TextInput style={[styles.flex, styles.cell_input, styles.cell_font]} placeholder="设置新密码"/>
                </View>

                <TouchableOpacity style={styles.finish_btn} onPress={this.finishModifyBtnAction}>
                    <Text style={{color:'#4A4A4A', fontWeight:'bold'}}>完成修改</Text>
                </TouchableOpacity>
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
        borderWidth:StyleSheet.hairlineWidth,
        marginTop:100,
        marginLeft:50,
        marginRight:50,
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },

    cell:{
        flex:1,
        flexDirection:'row',
        height:40,
        alignItems:'center',
        borderBottomWidth:StyleSheet.hairlineWidth,
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
        borderColor:'#4A4A4A',
        borderWidth:StyleSheet.hairlineWidth,
        backgroundColor:'#4A4A4A',
        overflow:'hidden',
    },

    cell_btn:{
        padding:5,
        color:'white',
        fontSize:12,
    }
});