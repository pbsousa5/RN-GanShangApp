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
    ScrollView,
    Animated,
    TouchableWithoutFeedback
} from 'react-native';

import Banner from './Banner';
import TabSection from './TabSection';
import SingleBtnComponent from './SingleBtnComponent';
import CountStepComponent from './CountStepComponent';

const IMG_DETAIL_BANNER = require('./img/detail_banner.png');
const IMG_RIGHT_ARROW = require('./img/right_arrow.png');
const IMG_CHOOSE_PRODUCT = require('./img/choose_product.png');
const IMG_CLOSE = require('./img/close.png');

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export  default class ProductDetailPage extends Component{
    // 构造
    constructor(props) {
        super(props);
        this.state = {
            scaleRadio:new Animated.Value(1.0),
            topY:new Animated.Value(screenHeight)
        }
    }

    _refresh(index){

    }

    _push_choose_page(){

        Animated.parallel([
            Animated.spring(
                this.state.scaleRadio,//初始值
                {toValue: 0.9}//结束值
            ),
            Animated.timing(this.state.topY, {
                toValue: 0,    // 返回到起始点开始
                duration:400,
            })
        ]).start();

    }

    _hideChooseComponent(){
        Animated.parallel([
            Animated.timing(this.state.topY, {
                toValue: screenHeight,    // 返回到起始点开始
                duration:400,
            }),
            Animated.spring(
                this.state.scaleRadio,//初始值
                {toValue: 1.0}//结束值
            )
        ]).start();
    }


    render() {
        var _that = this;
        return (
            <View style={[styles.flex, {backgroundColor:'black'}]}>
                <Animated.View style={[styles.flex, styles.bgColor, {transform:[{scale:this.state.scaleRadio}]}]}>
                    <ScrollView>
                        <Banner radio={640/646} data={[IMG_DETAIL_BANNER, IMG_DETAIL_BANNER, IMG_DETAIL_BANNER]}/>
                        <View>
                            <Text style={styles.name}>维融条码有线扫描枪超市收银快递单专用条形码扫码枪</Text>
                            <Text style={styles.price_padding}>¥<Text style={styles.price}>489</Text>.00</Text>
                        </View>
                        <View style={[styles.rowDirection, styles.verCenter, {backgroundColor:'#F8F8F8', height:30}]}>
                            <View style={[styles.flex, styles.rowDirection, styles.horCenter]}>
                                <Text style={styles.threeLabel}>原价：</Text>
                                <Text style={styles.threeContent}>¥999.00</Text>
                            </View>
                            <View style={[styles.flex, styles.rowDirection, styles.horCenter]}>
                                <Text style={styles.threeLabel}>收藏数：</Text>
                                <Text style={styles.threeContent}>56</Text>
                            </View>
                            <View style={[styles.flex, styles.rowDirection, styles.horCenter]}>
                                <Text style={styles.threeLabel}>成交数：</Text>
                                <Text style={styles.threeContent}>12345</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={this._push_choose_page.bind(this)}
                                          style={[styles.borderTop, styles.borderBottom, styles.rowDirection, styles.verCenter, {paddingHorizontal:20, paddingVertical:8}]}>
                            <Text style={[styles.flex, {fontSize:14, fontWeight:'500'}]}>选择 型号颜色分类</Text>
                            <Image source={IMG_RIGHT_ARROW}/>
                        </TouchableOpacity>
                        <TabSection data={['产品详情', '用户评价']} callback={this._refresh.bind(this)}/>
                    </ScrollView>
                </Animated.View>
                <Animated.View style={{position:'absolute', top:this.state.topY, left:0, width:screenWidth, height:screenHeight}}>
                        <TouchableOpacity onPress={this._hideChooseComponent.bind(this)} style={{height:300}}></TouchableOpacity>
                        <View style={{backgroundColor:'white', flex:1}}>
                            <View style={[{height:100}, styles.rowDirection]}>
                                <Image style={{marginTop:-20, marginLeft:10}} source={IMG_CHOOSE_PRODUCT}></Image>
                                <View style={[styles.flex]}>
                                    <View style={styles.flex}>
                                        <TouchableOpacity onPress={this._hideChooseComponent.bind(this)} style={{alignItems:'flex-end', padding:15}}><Image source={IMG_CLOSE}/></TouchableOpacity>
                                    </View>
                                    <View style={[styles.flex, {marginBottom:20}]}>
                                        <Text style={[{color:'#E66020'}, {justifyContent:'flex-end', marginLeft:10, paddingBottom:5}]}>¥<Text style={styles.price}>499</Text>00</Text>
                                        <Text style={[{justifyContent:'flex-end', marginLeft:10, fontWeight:'300', fontSize:12}]}>库存9999件</Text>
                                    </View>
                                </View>
                            </View>
                            <ScrollView style={[styles.flex, {marginBottom:40}]}>
                                <SingleBtnComponent data={['type A', 'type B', 'type C']} title="型号"/>
                                <SingleBtnComponent data={['黄色', '蓝色']} title="颜色"/>
                                <CountStepComponent />
                            </ScrollView>
                            <TouchableOpacity style={[styles.sureBtn, styles.verCenter, styles.horCenter]}><Text style={{color:'white', fontSize:16}}>确定</Text></TouchableOpacity>
                        </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    sureBtn:{
        height:40,
        backgroundColor:'#E66020'

    },
    bgColor:{
        backgroundColor:'white'
    },
    rowDirection:{
        flexDirection:'row'
    },

    name:{
        fontWeight:'500',
        paddingTop:10,
        paddingHorizontal:20
    },

    intro:{
        fontWeight:'300',
        padding:5,
        fontSize:12
    },

    price:{
        color:'#E66020',
        fontWeight:'500',
        fontSize:18
    },

    price_padding:{
        paddingVertical:5,
        paddingHorizontal:20,
        color:'#E66020'
    },

    verCenter:{
        alignItems:'center'
    },

    horCenter:{
        justifyContent:'center'
    },

    threeLabel:{
        fontSize:12,
        color:'#4A4A4A'
    },

    threeContent:{
        fontSize:12,
        color:'#E66020'
    },

    borderTop:{
        borderTopWidth:5,
        borderTopColor:'#F0F0F0'
    },

    borderBottom:{
        borderBottomWidth:5,
        borderBottomColor:'#F0F0F0'
    }
});