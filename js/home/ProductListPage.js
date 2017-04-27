/**
 * Created by fanmaoyu on 2017/4/26.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    ListView,
} from 'react-native';

import NavigatorBar from '../navigation/NavigatorBar';
import BaseComponent from '../base/BaseComponent';
import ProductCell from './ProductCell';


export  default class ProductListPage extends BaseComponent{
    // 构造
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    createView() {
        return (
            <View style={[styles.flex]}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>{return (<ProductCell />);}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },

    hisTop:{
        fontSize:16,
        fontWeight:'500',
        padding:10
    },

    his:{
        paddingVertical:5,
        paddingLeft:10,
        fontWeight:'300',
        fontSize:14
    },

    titleView:{
        borderWidth:1,
        borderColor:'#9B9B9B',
        borderRadius:12.5,
        height:25,
        width:280,
        marginTop:10,
        paddingLeft:20,
        fontSize:14
    },
    line:{
        borderBottomWidth:1,
        borderBottomColor:'#F0F0F0',
    }
});