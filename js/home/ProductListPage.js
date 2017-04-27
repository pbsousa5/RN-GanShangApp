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
import Api from '../common/Api';


export  default class ProductListPage extends BaseComponent{
    // 构造
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds
        };
    }

    _getUrl(page){
        return Api.product_list + 'category_id=' + this.props.data.id + '&page=' + page;
    }

    componentDidMount() {
        var _that = this;
        var url = this._getUrl(1);

        Api.GET_Method(url, (json)=>{
            _that.setState({dataSource: this.state.dataSource.cloneWithRows(json.data)});
        }, (error)=>{
            console.log('net work error!' + error);
        });
    }

    createView() {
        return (
            <View style={[styles.flex]}>
                <ListView enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>{return (<ProductCell data={rowData}/>);}}
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