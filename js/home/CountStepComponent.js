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


export default class CountStepComponent extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {count: 1};
    }


    render(){

        return  (
            <View style={[styles.rowDirection, styles.verCenter, {height:30}]}>
                <Text style={{marginLeft:10, fontSize:12, color:'#4A4A4A', fontWeight:'300'}}>数量</Text>
                <View style={[styles.rowDirection, styles.flex, {justifyContent:'flex-end', marginRight:20, alignItems:'center'}]}>
                    <TouchableOpacity><Text style={[styles.plusFont, styles.borderRound]}>-</Text></TouchableOpacity>
                    <View style={styles.borderVer}><Text style={[{fontSize:16, paddingHorizontal:10,paddingVertical:2}]}>1</Text></View>
                    <TouchableOpacity><Text style={[styles.plusFont, styles.borderRound]}>+</Text></TouchableOpacity>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },

    borderRound:{
        borderWidth:1,
        borderColor:'#E6E5E6'
    },

    borderVer:{
        borderTopWidth:1,
        borderTopColor:'#E6E5E6',
        borderBottomWidth:1,
        borderBottomColor:'#E6E5E6'
    },

    plusFont:{
        paddingHorizontal:6,
        paddingVertical:2,
        fontSize:16,
        fontWeight:'300'
    },

    rowDirection:{
        flexDirection:'row'
    },

    verCenter:{
        alignItems:'center'
    }

});