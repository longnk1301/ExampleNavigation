import React, { Component } from 'react';
import { Info } from '../screenNames';
import Button from 'react-native-button';
import {
    Text, View, Image
} from 'react-native';
const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {    
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Home';   
        let tabBarIcon = () => (
            <Image
                source={require('../icons/home.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
    
        return { tabBarLabel, tabBarIcon };
    }
    render() {    
        const { navigation } = this.props;   
        let dataSendToInfo = {
            name: "This is info content",
            releaseYear: 2017
        };     
        return (<View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                This is Home Screen
            </Text>
            <Button
                containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                style={{ fontSize: 18, color: 'white' }}
                onPress={() => {
                    console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
                    // const { navigate } = this.props.navigation;
                    navigation.navigate(Info, dataSendToInfo);
                }}>
                Navigate to Detail
            </Button>
        </View>);
    }
}