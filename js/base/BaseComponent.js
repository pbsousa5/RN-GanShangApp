/**
 * Created by fanmaoyu on 2017/3/23.
 */
import React, {Component} from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

import NavigatorBar from '../navigation/NavigatorBar';

export default class BaseComponent extends Component {

    navigationBar(){
        return <NavigatorBar leftView={this.props.leftView} rightView={this.props.rightView} titleView={this.props.titleView} title={this.props.title} navigator={this.props.navigator}/>;
    }

    createView(){
        return null;
    }

    render(){
        return (
            <View style={[styles.flex, styles.bgColor]}>
                {this.navigationBar()}
                {this.createView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    bgColor:{
        backgroundColor:'white'
    }
});