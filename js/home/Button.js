/**
 * Created by fanmaoyu on 2017/3/29.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';


export default class Button extends Component {


    render() {
        return (<TouchableOpacity style={[styles.flex, styles.center]} onPress={this.props.action}>
                <Image source={this.props.img}></Image>
                <Text style={styles.text}>{this.props.text}</Text>
        </TouchableOpacity>);
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },

    center:{
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },

    text:{
        marginTop:5,
        color:'#4A4A4A',
        fontSize:12
    }

});