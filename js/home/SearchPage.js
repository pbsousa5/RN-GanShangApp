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
    AsyncStorage
} from 'react-native';

import NavigatorBar from '../navigation/NavigatorBar';
import BaseComponent from '../base/BaseComponent';
import ProductListPage from './ProductListPage';

class SearchNavigator extends NavigatorBar{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {value:''};
    }

    _getValue(text){
        this.setState({value:text});
    }

    titleView(){
        return <TextInput returnKeyType="search"
                          onChangeText={this._getValue.bind(this)}
                          onSubmitEditing={this.props.submit.bind(this, this.state.value)} style={styles.titleView}></TextInput>
    }

    rightView(){
        return null;
    }
}

export  default class SearchPage extends BaseComponent{
    // 构造
    constructor(props) {
        super(props);

        var data = [];
        var _that = this;

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };

        AsyncStorage.getItem("search_history", function (error, result){
            data = result?JSON.parse(result):[];
            _that.setState({data:data});
            _that.setState({dataSource: ds.cloneWithRows(data)});
        });
    }

    search_submit(text){
        this.state.data.push(text);
        AsyncStorage.setItem("search_history", JSON.stringify(this.state.data), function(error){});
        this.props.navigator.push({component:ProductListPage, title:text});
    }

    navigationBar() {
        return <SearchNavigator navigator={this.props.navigator} submit={this.search_submit.bind(this)}/>
    }


    createView() {
        var _that = this;
        return (
            <View style={[styles.flex]}>
                <Text style={[styles.hisTop, styles.line]}>搜索历史</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    enableEmptySections = {true}
                    renderRow={(rowData) =>{return (<TouchableOpacity onPress={()=>_that.props.navigator.push({component:ProductListPage, title:rowData})}><Text style={[styles.line, styles.his]}>{rowData}</Text></TouchableOpacity>);}}
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