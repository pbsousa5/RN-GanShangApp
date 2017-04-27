/**
 * Created by fanmaoyu on 2017/4/1.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

import BaseComponent from '../base/BaseComponent';
import ModifyNichengPage from './ModifyNichengPage';

var ImagePicker = require('react-native-image-picker');


const IMG_RADIUSTOUXIANG = require('./img/radiustouxiang.png');


export default class PersonalInfoPage extends BaseComponent{

    sureBtnAction(){

    }

    go_camera(){
        var options = {
            title: '获取头像',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    go_nicheng_page(){
        this.props.navigator.push({component:ModifyNichengPage, title:'昵称'})
    }

    createView() {
        return (<ScrollView>


        </ScrollView>);
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    rowDirection:{
        flexDirection:'row'
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

    input:{
        height:100,
        marginTop:10,
        marginHorizontal:15,
        borderWidth:1,
        borderColor:'#F0F0F0',
        padding:5,
        fontSize:12,
        borderRadius:5,
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

    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});