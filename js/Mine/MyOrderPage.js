/**
 * Created by fanmaoyu on 2017/4/1.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native';

import BaseComponent from '../base/BaseComponent';
import TabSection from '../home/TabSection';
import OrderCell from './OrderCell';

const tabs = ['全部订单', '待付款', '打样中', '生产中', '待发货', '待收货'];

export default class MyOrderPage extends BaseComponent{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {isRefreshing: false};
    }

    _onRefresh() {

    }

    request(index){

    }

    createView() {
        return (<View style={styles.flex}>
            <TabSection data={tabs} callback={(index)=>{this.request(index)}}/>
            <ScrollView style={styles.flex} refreshControl={
                                                <RefreshControl refreshing={this.state.isRefreshing}
                                                onRefresh={this._onRefresh.bind(this)}
                                                tintColor="#ff0000"
                                                title="Loading..."
                                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                                progressBackgroundColor="#ffff00"/>}>
                <OrderCell />
                <OrderCell />
                <OrderCell />
                <OrderCell />
            </ScrollView>
        </View>);
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },

});