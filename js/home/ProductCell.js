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

const IMG_SAOMIAOQIANG = require('./img/saomiaoqiang.png');
const IMG_XIAOLIANG = require('./img/xiaoliang.png');
const IMG_SHOUCANG = require('./img/shoucang.png');

export default class ProductCell extends Component{
    render(){
        var data = this.props.data;
        return (<TouchableOpacity onPress={this.props.didselect} style={[styles.rowDirection, styles.verCenter, styles.cell_height]}>
            <View style={{flex:1}}><Image source={IMG_SAOMIAOQIANG}/></View>
            <View style={{flex:2}}>
                <Text style={styles.name}>{data.product_name}</Text>
                <Text style={styles.intro}>超市收银快递单专用条形码枪巴把枪器</Text>
                <Text style={styles.price_padding}>￥<Text style={styles.price}>489</Text>.00</Text>
                <View style={[styles.rowDirection, styles.verCenter]}><Image style={styles.icon_margin} source={IMG_XIAOLIANG}/><Text style={styles.intro}>111</Text><Image style={styles.icon_margin} source={IMG_SHOUCANG}/><Text style={styles.intro}>567</Text></View>
                <View style={styles.line}></View>
            </View>
        </TouchableOpacity>);
    }
}

const styles = StyleSheet.create({
    rowDirection:{
        flexDirection:'row'
    },

    verCenter:{
        alignItems:'center'
    },

    cell_height:{
        padding:10
    },

    name:{
        fontWeight:'500',
        padding:5
    },

    intro:{
        fontWeight:'300',
        padding:5,
        fontSize:12
    },

    price:{
        color:'#E66020',
        fontWeight:'500',
        fontSize:18
    },

    price_padding:{
        padding:5,
        color:'#E66020'
    },

    icon_margin:{
        marginLeft:7
    },

    line:{
        height: 1,
        backgroundColor:'#F0F0F0',
        marginTop:5
    }

});

