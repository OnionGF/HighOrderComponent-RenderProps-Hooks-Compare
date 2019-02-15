import React from 'react';
import Hook from './pages/Hook'
import HomePage from './HomePage'
import RenderProps from './pages/RenderProps'
import HigherOrderComponent from './pages/HigherOrderComponent'
import {  createStackNavigator,createAppContainer } from 'react-navigation'; // Version can be specified in package.json

const AppNavigator = createStackNavigator({
    HomePage: HomePage,
    Hook: Hook,
    RenderProps: RenderProps,
    HigherOrderComponent:HigherOrderComponent
}, {
    initialRouteName: 'HomePage',
});

export default createAppContainer(AppNavigator);