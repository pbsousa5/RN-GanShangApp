/**
 * Created by fanmaoyu on 2017/3/20.
 */

import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native';

import LoginPage from '../login/login';
import BaseComponent from '../base/BaseComponent';
import NavigatorBar from '../navigation/NavigatorBar';

import PersonalInfoPage from '../Mine/PersonalInfoPage';
import SettingPage from '../Mine/SettingPage';
import MyOrderPage from '../Mine/MyOrderPage';



const screenWidth = Dimensions.get('window').width;

class WodeNavigator extends NavigatorBar {

    leftView() {
        return (<TouchableOpacity onPress={()=>{this.props.navigator.push({component:SettingPage, title:'设置'})}}><Image source={IMG_SHEZHI}/></TouchableOpacity>);
    }

    rightView() {
        return (<TouchableOpacity onPress={()=>{this.props.navigator.push({component:PersonalInfoPage,  title:'个人信息'})}}><Image source={IMG_BIANJI}/></TouchableOpacity>);
    }
}


export default class Tab_wode extends BaseComponent {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {show_search: false};
    }

    navigationBar() {
        return <WodeNavigator title='我的' navigator={this.props.navigator}/>
    }

    go_login_page() {
        this.props.navigator.push({component: LoginPage});
    }

    go_myorder_page(){
        this.props.navigator.push({component:MyOrderPage, title:'我的订单'});
    }

    createView() {
        return (
            <ScrollView style={styles.flex}>

            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },

    rowDirection: {
        flexDirection: 'row'
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
    },

    font: {
        fontSize: 12,
        color: '#4A4A4A',
    },

    fontBold: {
        fontWeight: 'bold'
    },

    fontLight: {
        fontWeight: '300'
    },

    borderBottom2: {
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 2
    },

    borderBottom5: {
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 5
    },

    line: {
        height: 15,
        borderRightWidth: 1,
        borderRightColor: '#F0F0F0',
        alignSelf: 'center'
    }
});