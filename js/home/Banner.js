/**
 * Created by fanmaoyu on 2017/3/29.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

import ViewPager from 'react-native-viewpager';

const screenWidth = Dimensions.get('window').width;


export default class Banner extends Component {

    constructor(props) {
        super(props);

        var ds = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        this.state = {
            dataSource: ds.cloneWithPages(this.props.data)
        };
    }

    _renderPage(data, pageID){
        return (
            <Image
                source={data}
                style={[styles.page, {height: screenWidth*this.props.radio}]}/>
        );
    }

    render() {
        return (<View style={{height:screenWidth*this.props.radio}}>
            <ViewPager
                style={{flex:1}}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage.bind(this)}
                isLoop={true}
                autoPlay={true}/>
        </View>);
    }
}

const styles = StyleSheet.create({

    page: {
        flex: 1,
        resizeMode: 'stretch'
    }
});