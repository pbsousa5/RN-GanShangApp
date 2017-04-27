/**
 * Created by fanmaoyu on 2017/3/23.
 */
import React, {Component} from 'react';

import{
    Navigator,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Navigation extends Component{
    render() {
        return (
            <Navigator
                initialRoute={{component: this.props.component, title:this.props.title, params:this.props.params, pushType:this.props.pushType}}
                configureScene={(route) => {
                    if(route.pushType == 'fromBottom'){
                        return Navigator.SceneConfigs.FloatFromBottom;
                    }
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component title={route.title} {...route.params} navigator={navigator} />
                }}
                //navigationBar={
                //    <Navigator.NavigationBar
                //    style={styles.navBar}
                //    routeMapper={NavigationBarRouteMapper}/>
                //}

            />
        );
    }
}

// 导航栏的Mapper
var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {

        if(route.name === 'shouye')
        {
            return <TouchableOpacity style={styles.backBtn} onPress={route.params.leftAction}><Image source={IMG_SEARCH} /></TouchableOpacity>

        }else{
            if (index > 0) {
                return <TouchableOpacity style={styles.backBtn} onPress={()=>{navigator.pop();}}><Image
                    source={IMG_BACK}/></TouchableOpacity>;
            }
            else {
                return null;
            }
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {

        if(route.name === 'login'){
            return <TouchableOpacity style={styles.regBtn} onPress={()=>{navigator.push({title:'注册', component:RegisterPage});}}><Text style={styles.regTitle}>注册</Text></TouchableOpacity>
        }
        else if(route.name === 'shouye'){
            return <TouchableOpacity style={styles.regBtn} onPress={()=>{navigator.push({title:'消息', component:MessagePage});}}><Image source={IMG_WARN} /></TouchableOpacity>
        }else{
            return null;
        }
    },
    // 标题
    Title(route, navigator, index, navState) {

        return (
            <View style={styles.titleView}>
                <Text style={styles.title}>
                    {route.title}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    navBar:{
        backgroundColor:'white',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#F0F0F0',
    },
    backBtn:{
        padding:15,
        marginLeft:5,
    },

    regBtn:{
        padding:15,
        marginTop:-2
    },

    regTitle:{
        color:'#FC5268',
        fontSize:14
    },

    titleView:{
        marginTop:12
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    }
});