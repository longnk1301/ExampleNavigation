/** @format */

import {AppRegistry} from 'react-native';
// import {createStackNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation';
// import App from './App';
import {name as appName} from './app.json';

//Components
import  MainComponent from './components/MainComponent';
import  DetailComponent from './components/DetailComponent';
import  ThirdComponent from './components/ThirdComponent';
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import SettingsComponent from './components/SettingsComponent';
import CloudComponent from './components/CloudComponent';
//Screen names
// import { MainScreen, DetailScreen, ThirdScreen } from './screenNames';
import { Home, Info, Settings, Cloud } from './screenNames';


// const App = createStackNavigator({    
//     MainScreen: {
//         screen: MainComponent,
//         // navigationOptions: {
//         //     headerTitle: 'Main',
//         // },
//     },
//     DetailScreen: {
//         screen: DetailComponent,
//         // navigationOptions: {
//         //     headerTitle: 'Detail',
//         // },
//     },
//     ThirdScreen: {
//         screen: ThirdComponent,
//         // navigationOptions: {
//         //     headerTitle: 'Third',
//         // },
//     },
// });

let routeConfigs = {
    Home: {
        screen: HomeComponent,
    },
    Info: {
        screen: InfoComponent,
    },
    Settings: {
        screen: SettingsComponent,
    },
    Cloud: {
        screen: CloudComponent,
    },
};
let tabNavigatorConfig = {    
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        showIcon: true,
        upperCaseLabel: false,
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'lightgray',
            padding: -10
        },    
        showLabel: true    
    },    
    // order: [Settings, Home, Cloud, Info],
};
const App = TabNavigator(routeConfigs, tabNavigatorConfig);

AppRegistry.registerComponent(appName, () => App);
