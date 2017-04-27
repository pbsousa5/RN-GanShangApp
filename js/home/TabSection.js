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


export default class TabSection extends Component{

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
            array.push(<TouchableOpacity key={index}
                                         onPress={()=>{_that.setState({index:index}); _that.props.callback(index);}}>
                <View style={_that.state.index === index?styles.select:styles.no_select}>
                    <Text style={[{paddingVertical:5}, _that.state.index === index?styles.text_select:styles.text_no_select]} ref="text">{item}</Text>
                </View>
            </TouchableOpacity>);
        });

        return  (<View style={{height:38}}>
            <View style={[styles.rowDirection, {justifyContent:'space-around', height:36}]}>{array}</View>
        </View>);
    }
}

const styles = StyleSheet.create({
    rowDirection:{
        flexDirection:'row'
    },

    text_select:{
        fontWeight:'bold',
        color:'#E66020'
    },

    text_no_select:{
        fontWeight:'300',
        color:'#9B9B9B'
    },

    select:{
        borderBottomWidth:2,
        borderBottomColor:'#E66020'
    },

    no_select:{

    },
});