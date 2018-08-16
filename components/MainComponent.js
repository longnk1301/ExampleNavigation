// import React, { Component } from 'react';
// import { DetailScreen, ThirdScreen } from '../screenNames';
// import Button from 'react-native-button';
// import {
//     Text, View, Image, ActivityIndicator
// } from 'react-native';

// export default class MainComponent extends Component {  
//     static navigationOptions = ({ navigation }) => {
//         const { params = {} } = navigation.state;
//         let headerTitle = 'Main';
//         let headerTitleStyle = { color: 'red' };
//         let headerRight = (<Button
//                 containerStyle={{margin: 5, padding: 10, borderRadius: 10, backgroundColor: 'darkviolet'}}
//                 style={{fontSize: 15, color: 'white'}}
//                 onPress={() => {
//                     params.onSave();
//                 }}
//             >Save</Button>);
//         // let tabBarLabel = 'Home';
//         // let tabBarIcon = () => {
//         //     <Image 
//         //         source={{uri: 'http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-4/256/home-icon.png'}}
//         //         style={{width: 26, height: 26, tintColor: '#0067a7'}}
//         //     />
//         // };
        
//         return {
//             headerTitle, headerTitleStyle, headerRight,
//             // tabBarLabel, tabBarIcon
//         };
//     }
//     _onSave() {
//         // console.log('123');
//         this.props.navigation.setParams({isSaving: true});
//         setInterval(() => {
//             console.log('loaded 5 second :v...');
//             this.props.navigation.setParams({isSaving: false});
//         }, 5000);
//     }  
//     componentDidMount() {
//         this.props.navigation.setParams({onSave: this._onSave.bind(this), isSaving: false});
//     }
//     render() {           
//         const { navigation } = this.props; 
//         let dataSendToDetail = {
//             name: "Star Wars",
//             releaseYear: 1977
//         };
//         let dataSendToThird = {
//             name: "Test",
//             releaseYear: 2017
//         };
//         let mainView = (navigation.state.params && navigation.state.params.isSaving == true)
//             ? <ActivityIndicator />
//             :   <View style={{
//                     flex: 1,
//                     backgroundColor: 'dodgerblue',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }}>
//                     <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
//                         This is Main Screen ahihiSDASD
//                     </Text>   
//                     <Button
//                         containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
//                         style={{ fontSize: 18, color: 'white' }}
//                         onPress={() => {
//                             // this.props.navigate(DetailScreen);
//                             navigation.navigate(DetailScreen, dataSendToDetail);
//                         }}>
//                         Navigate to Detail
//                     </Button>   
//                     <Button
//                         containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
//                         style={{ fontSize: 18, color: 'white' }}
//                         onPress={() => {
//                             navigation.navigate(ThirdScreen, dataSendToThird);
//                         }}>
//                         Navigate to Third
//                     </Button>                           
//                 </View>
//         return mainView;
//     }
// }