/**
 * Created by fanmaoyu on 2017/4/25.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';

const IMG_RIGHTARROW = require('./img/right_arrow.png');

export default class ProductSection extends Component{
    render() {
        return (<TouchableOpacity onPress={this.props.action} style={[styles.rowDirection, styles.height, styles.verCenter]}>
                <Image style={{marginLeft:10}} source={this.props.img}/>
                <Text style={{marginLeft:10, flex:1}}>{this.props.title}</Text>
                <Image style={{marginRight:10}} source={IMG_RIGHTARROW}></Image>
        </TouchableOpacity>);
    }
}

const styles = StyleSheet.create({
    rowDirection:{
        flexDirection:'row'
    },
    height:{
        height:40
    },
    verCenter:{
        alignItems:'center'
    }
});