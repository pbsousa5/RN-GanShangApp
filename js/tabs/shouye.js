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
    Dimensions,
    TextInput
} from 'react-native';

import BaseComponent from '../base/BaseComponent';
import NavigatorBar from '../navigation/NavigatorBar';
import MessagePage from '../home/MessagePage';
import Banner from '../home/Banner';
import Button from '../home/Button';
import ProductCell from '../home/ProductCell';
import ProductSection from '../home/ProductSection';
import SearchPage from '../home/SearchPage';
import ProductDetailPage from '../home/ProductDetailPage';

const IMG_ERWEIMA = require('./img/erweima-icon.png');
const IMG_MSG = require('./img/warn-icon.png');
const IMG_DIANCHAOJI = require('./img/dianchaoji.png');
const IMG_DIAMOND = require('./img/diamond.png');
const IMG_BANNER = require('../home/img/banner.png');


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


class List_shouye extends Component{

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

    go_page(){

    }

    didselect(title){
        this.props.navigator.push({component:ProductDetailPage, title:title});
    }


    render() {
        return (
            <ScrollView style={styles.flex} refreshControl={
                                                <RefreshControl refreshing={this.state.isRefreshing}
                                                onRefresh={this._onRefresh.bind(this)}
                                                tintColor="#ff0000"
                                                title="Loading..."
                                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                                progressBackgroundColor="#ffff00"/>}>
                <Banner radio={144/320} data={[IMG_BANNER, IMG_BANNER, IMG_BANNER]}/>

                <View style={styles.fourButtons}>
                    <View style={{width:screenWidth/4}}><Button text="点钞机" img={IMG_DIANCHAOJI}/></View>
                    <View style={{width:screenWidth/4}}><Button text="点钞机" img={IMG_DIANCHAOJI}/></View>
                    <View style={{width:screenWidth/4}}><Button text="点钞机" img={IMG_DIANCHAOJI}/></View>
                    <View style={{width:screenWidth/4}}><Button text="点钞机" img={IMG_DIANCHAOJI}/></View>
                    <View style={{width:screenWidth/4}}><Button text="点钞机" img={IMG_DIANCHAOJI}/></View>
                    <View style={{width:screenWidth/4}}><Button text="点钞机" img={IMG_DIANCHAOJI}/></View>
                </View>

                <View>
                    <ProductSection title="敢尚优秀产品" img={IMG_DIAMOND} action={this.go_page.bind(this)}/>
                    <ProductCell didselect={this.didselect.bind(this, 'product')}/>
                    <ProductCell/>
                    <ProductCell/>
                </View>

            </ScrollView>
        );
    }
}

class ShouyeNavigator extends NavigatorBar{
    leftView(){
        return <TouchableOpacity style={styles.btnPadding} onPress={this.props.leftAction}><Image source={IMG_ERWEIMA}></Image></TouchableOpacity>;
    }

    titleView(){
        return <TextInput onFocus={this.props.searchAction} style={styles.titleView}></TextInput>
    }

    rightView(){
        return <TouchableOpacity style={styles.btnPadding} onPress={this.props.rightAction}><Image source={IMG_MSG}></Image></TouchableOpacity>;
    }
}


export default class Tab_shouye extends BaseComponent {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    navigationBar() {
        return <ShouyeNavigator title='私匠' leftAction={()=>{this.go_scan_page()}}
                                rightAction={()=>{this.go_message_page()}} searchAction={()=>{this.go_search_page()}}/>
    }

    go_scan_page() {
        this.props.navigator.push({component:MessagePage});
    }

    go_message_page() {
        this.props.navigator.push({component:MessagePage});
    }

    go_search_page(){
        this.props.navigator.push({component:SearchPage});
    }

    createView() {

        return (
            <View style={[styles.flex]}>
                <List_shouye navigator={this.props.navigator}/>
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

    fourButtons:{
        flexDirection:'row',
        borderBottomColor:'#F0F0F0',
        borderBottomWidth:5,
        flexWrap:'wrap',
    },

    titleView:{
        borderWidth:1,
        borderColor:'#9B9B9B',
        borderRadius:12.5,
        height:25,
        width:270,
        marginTop:10,
        paddingLeft:20,
        fontSize:14
    },

    btnPadding:{
        padding:10
    },

    good:{

    }
});