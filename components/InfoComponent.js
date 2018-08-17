import React, { Component } from 'react';
import { DetailScreen, ThirdScreen } from '../screenNames';
import Button from 'react-native-button';
import {
    Text, View, Image
} from 'react-native';
const backgroundColor = '#007256';

export default class InfoComponent extends Component {
    static navigationOptions = ({ navigation }) => {      
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Info';
        let tabBarIcon = () => (
            <Image
                source={require('../icons/info_3-512.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        // console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
        // let paramsFromHomeScreen = this.props.navigation.state.params;
        // console.log(paramsFromHomeScreen);
        return (<View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                This is Info Screen
            </Text>  
            {/* <Text>Movie's name : {paramsFromHomeScreen.name}</Text>           */}
            {/* <Text>release year : {paramsFromHomeScreen.releaseYear}</Text> */}
            <Button
                containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                style={{ fontSize: 18, color: 'white' }}
                onPress={() => {                                        
                    this.props.navigation.goBack();
                }}>
                Back to Home
            </Button>          
        </View>);
    }
}