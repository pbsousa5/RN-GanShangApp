/**
 * Created by fanmaoyu on 2017/3/23.
 */
import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

const IMG_BACK = require('./img/back.png');

export default class NavigatorBar extends Component {

    titleView(){
        return <View><Text style={styles.title}>{this.props.title}</Text></View>;
    }

    leftView(){
        return <TouchableOpacity style={{padding:10}} onPress={()=>{this.props.navigator.pop();}}><Image source={IMG_BACK}></Image></TouchableOpacity>;
    }

    rightView(){
        return null;
    }

    render(){
        return (
            <View style={[styles.height64, styles.bgColor, styles.borderBottom]}>
                <View style={[styles.flex, styles.marginTop20, styles.direct_row]}>
                    <View style={[styles.leftBtn, styles.direct_row, {justifyContent:'flex-start'}]}>{this.leftView()}</View>
                    <View style={[styles.flex, styles.direct_row, styles.center]}>{this.titleView()}</View>
                    <View style={[styles.rightBtn, styles.direct_row, {justifyContent:'flex-end'}]}>{this.rightView()}</View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },

    title:{
        fontSize:16,
        fontWeight:'bold',
        padding:5
    },

    direct_row:{
        flexDirection:'row'
    },

    borderBottom:{
        borderBottomColor:'#ECEAEC',
        borderBottomWidth:StyleSheet.hairlineWidth,
    },

    layout:{
        paddingTop:10,
        justifyContent:'space-between',
        flexDirection:'row'
    },

    bgColor:{
        backgroundColor:'white'
    },

    marginTop20:{
        marginTop:20,
    },

    height64:{
        height:64
    },

    center:{
        justifyContent:'center',
        alignItems:'center',
    },

    leftBtn:{
        marginLeft:5,
        alignItems:'center',
    },

    rightBtn:{
        marginRight:5,
        alignItems:'center',
    }
});