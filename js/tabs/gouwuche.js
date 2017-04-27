/**
 * Created by fanmaoyu on 2017/3/20.
 */

import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    RefreshControl,
    Dimensions
} from 'react-native';

import BaseComponent from '../base/BaseComponent';
import NavigatorBar from '../navigation/NavigatorBar';
import MessagePage from '../home/MessagePage';
import TabSection from '../home/TabSection';

class List_shejishi extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isRefreshing: false,
            loaded: 0,
        };
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
    }

    request(index){
        console.log('请求数据：'+ index);
    }

    render() {
        return (
            <View style={styles.flex}>
                <TabSection data={['最新', '热门', '关注', '筛选']} callback={(index)=>{this.request(index)}}/>

                <ScrollView style={styles.flex} refreshControl={
                                                <RefreshControl refreshing={this.state.isRefreshing}
                                                onRefresh={this._onRefresh.bind(this)}
                                                tintColor="#ff0000"
                                                title="Loading..."
                                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                                progressBackgroundColor="#ffff00"/>}>

                </ScrollView>
            </View>
        );
    }
}

class ShouyeNavigator extends NavigatorBar{
    leftView(){
        return <TouchableOpacity onPress={this.props.leftAction}><Image source={IMG_SEARCH}></Image></TouchableOpacity>;
    }

    rightView(){
        return <TouchableOpacity onPress={this.props.rightAction}><Image source={IMG_WARN}></Image></TouchableOpacity>;
    }
}


export default class Tab_shejishi extends BaseComponent {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {show_search: false};
    }

    navigationBar() {
        return <ShouyeNavigator title='设计师' leftAction={()=>{this.go_search_page()}}
                                rightAction={()=>{this.go_message_page()}}/>
    }

    go_search_page() {
        this.setState({show_search: !this.state.show_search});
    }

    go_message_page() {
        this.props.navigator.push({component:MessagePage});
    }

    createView() {

        return (
            <View style={[styles.flex]}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },

    rowDirection:{
        flexDirection:'row'
    },

    zuopinSection:{
        flex:1
    }
});