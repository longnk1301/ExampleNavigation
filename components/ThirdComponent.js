// import React, { Component } from 'react';
// import {
//     Text, View
// } from 'react-native';

// export default class ThirdComponent extends Component {
//     static navigationOptions = ({ navigation }) => {
//         const { params = {} } = navigation.state;
//         let headerTitle = 'Third';
//         let headerTitleStyle = { color: 'red' };        
        
//         return {headerTitle, headerTitleStyle}
//     }
//     render() {
//         console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
//         let paramsFromScreens = this.props.navigation.state.params;
//         return (
//             <View style={{ flex: 1, 
//                     backgroundColor: 'tomato',
//                     alignItems: 'center', 
//                     justifyContent: 'center' }}>
//                 <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
//                     This is Third Screen
//                 </Text>
//                 <Text>Params from Detail Screen: </Text>
//                 <Text>Movie's name : {paramsFromScreens.name}</Text>          
//                 <Text>release year : {paramsFromScreens.releaseYear}</Text>
//             </View>
//         );
//     }
// }