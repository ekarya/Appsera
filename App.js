/**
 * Belajar Aplikasi React Native by Ferdi Pratama
 * https://github.com/facebook/react-native
 * 
 * Step by Step Membuat Navigasi
 * 1. Instal react-navigation v3 (BACA DOKUMENTASI)
 * 2. Membuat createStackNavigator
 * 3. Membuat createAppContainer
 * 4. Membuat navigationOption di Class
 * 5. Membuat props Navigation di render()
 * 
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";

// @ require components
import Splash from './src/screens/Splash'
import Login from './src/screens/Login'

// // @ Switch Navigation
// const SwitchNav = createSwitchNavigator (
//     {
//         Splash: Splash,
//         Auth: AuthStack,
//         App: AppDrawerNavigation,
//     }, {
//         initialRouteName: 'Splash'
//     }
// )

// @ Navigation with headerMode
const AuthStack = createStackNavigator (
    {
        Splash: Splash,
        Login: Login
    }, {
        headerMode: 'none'
    }
);

// export default class App extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <SwitchNav/>
//         );
//     }
// }

export default createAppContainer(AuthStack);