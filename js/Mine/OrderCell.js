/**
 * Created by fanmaoyu on 2017/4/1.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

const IMG_ORDER_TOUXIANG = require('./img/ordertouxiang.png');
const IMG_ORDER_ZUOPIN = require('./img/orderzuopin.png');

export default class OrderCell extends Component{

    render(){
        return (<View style={styles.flex}>
            <View style={[styles.rowDirection, styles.section0, {alignItems:'center', paddingLeft:10, paddingRight:10}]}>
                <Image source={IMG_ORDER_TOUXIANG}/>
                <Text style={[styles.font, {marginLeft:5}]}>阿拉蕾</Text>
                <Text style={[styles.flex, styles.font, styles.redFont, {textAlign:'right'}]}>买家未付款</Text>
            </View>
            <View style={[styles.rowDirection, styles.section1, {backgroundColor:'#F2F2F2',  paddingLeft:10, paddingRight:10}]}>
                <View style={{justifyContent:'center'}}><Image source={IMG_ORDER_ZUOPIN}/></View>
                <View style={[styles.flex, {justifyContent:'space-around'}]}>
                    <Text style={styles.font14}>黑胶防晒伞晴雨两用太阳伞女遮阳伞防紫外线小清新折叠伞</Text>
                    <Text style={styles.font14}>¥99.00</Text>
                </View>
            </View>
            <View style={[styles.rowDirection, styles.section2, {justifyContent:'flex-end', alignItems:'center'}]}>
                <Text style={[styles.font14,{marginRight:10}]}>共1件商品  需付款:￥99.00</Text>
            </View>
            <View style={styles.borderBottom1}></View>
            <View style={[styles.rowDirection, styles.section3, {justifyContent:'flex-end', alignItems:'center'}]}>
                <TouchableOpacity style={[styles.btn, {marginRight:10}]}>
                    <Text style={styles.font}>取消订单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, {marginRight:10}]}>
                    <Text style={[styles.font]}>付款</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.borderBottom3}></View>
        </View>);
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },

    font:{
        fontSize:12
    },

    rowDirection:{
        flexDirection:'row',
    },

    section0:{
        height:40
    },

    section1:{
        height:100
    },

    section2:{
        height:30
    },

    section3:{
        height:40
    },

    redFont:{
        color:'#FC5268'
    },

    font14:{
        fontSize:14,
        fontWeight:'300',
        paddingLeft:10
    },

    btn:{
        borderColor:'#4A4A4A',
        borderWidth:1,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        width:80,
        height:25
    },
    borderBottom1: {
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    borderBottom3: {
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 3
    }
});