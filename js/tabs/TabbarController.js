/**
 * Created by fanmaoyu on 2017/4/27.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Tab_shouye from './shouye';
import Tab_shejishi from './gouwuche';
import Tab_wode from './wode';

/*-----------------------------------images------------------------------------*/
//no-select
const IMG_SHOUYE = require('./img/tab-shouye-icon.png');
const IMG_GOUWUCHE = require('./img/tab-gouwuche-icon.png');
const IMG_WODE = require('./img/tab-wode-icon.png');

//select
const IMG_SHOUYE_SELECT = require('./img/tab-shouye-select-icon.png');
const IMG_GOUWUCHE_SELECT = require('./img/tab-gouwuche-select-icon.png');
const IMG_WODE_SELECT = require('./img/tab-wode-select-icon.png');

export default class TabbarController extends Component{
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {selectedTab:'首页'};
    }
    render(){
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '首页'}
                    title="首页"
                    titleStyle={[styles.tab_common, styles.tab_no_select]}
                    tabStyle={styles.tab_style}
                    selectedTitleStyle={styles.tab_select}
                    renderIcon={() => <Image source={IMG_SHOUYE} />}
                    renderSelectedIcon={() => <Image source={IMG_SHOUYE_SELECT} />}
                    onPress={() => this.setState({ selectedTab: '首页' })}>

                    <Tab_shouye navigator={this.props.navigator}/>

                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '购物车'}
                    title="购物车"
                    titleStyle={[styles.tab_common, styles.tab_no_select]}
                    selectedTitleStyle={styles.tab_select}
                    tabStyle={styles.tab_style}
                    renderIcon={() => <Image source={IMG_GOUWUCHE} />}
                    renderSelectedIcon={() => <Image source={IMG_GOUWUCHE_SELECT} />}
                    onPress={() => this.setState({ selectedTab: '购物车' })}>

                    <Tab_shejishi navigator={this.props.navigator}/>

                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '我的'}
                    title="我的"
                    titleStyle={[styles.tab_common, styles.tab_no_select]}
                    tabStyle={styles.tab_style}
                    selectedTitleStyle={styles.tab_select}
                    renderIcon={() => <Image source={IMG_WODE} />}
                    renderSelectedIcon={() => <Image source={IMG_WODE_SELECT} />}
                    onPress={() => this.setState({ selectedTab: '我的' })}>

                    <Tab_wode navigator={this.props.navigator}/>

                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tab_common:{
        fontSize:10,
    },
    tab_style:{
        paddingBottom:5
    },
    tab_no_select:{
        fontWeight:'300',
        color:'#9B9B9B',
    },
    tab_select:{
        fontWeight:'500',
        color:'#E66020',
    }
});
