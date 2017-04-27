/**
 * Created by fanmaoyu on 2017/3/30.
 */
import React, {Component} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


export default class SingleBtnComponent extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {index: 0};
    }


    render(){

        var array = [];
        var _that = this;

        this.props.data.map(function (item, index, arr) {
            array.push(<TouchableOpacity key={index}><Text style={styles.labelFont}>{item}</Text></TouchableOpacity>);
        });

        return  (
            <View style={{paddingBottom:10}}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={ [styles.rowDirection, {flexWrap:'wrap', alignItems:'flex-start', marginLeft:0, marginRight:5}]}>
                    {array}
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },

    title:{
        marginTop:5,
        marginLeft:10,
        fontSize:12,
        fontWeight:'300'
    },

    rowDirection:{
        flexDirection:'row',
    },

    labelFont:{
        fontSize:10,
        color:'#4A4A4A',
        borderColor:'#9B9B9B',
        borderWidth:1,
        paddingHorizontal:5,
        paddingVertical:2,
        borderRadius:3,
        marginLeft:10,
        marginTop:10
    }

});