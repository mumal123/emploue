import React, {Component} from 'react';

import FirstScreen from './screens/FirstScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppDrawerNavigator2 } from './components/AppDrawerNavigator2'
import {StackNavigator} from './components/StackNavigator'

import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import WelcomeScreen2 from './screens/WelcomeScreen2'
import MainScreen from './screens/MainScreen'
import MainScreen2 from './screens/MainScreen2';
import {createStackNavigator} from 'react-navigation-stack'




export default function App () {
 
    return(
        <AppContainer/>
        
    )
}
        const switchNavigator = createSwitchNavigator({
            FirstScreen:{screen: FirstScreen},
            WelcomeScreen:{screen:WelcomeScreen},
            WelcomeScreen2:{screen:WelcomeScreen2},
            MainScreen:{screen:MainScreen},
            Drawer:{screen:AppDrawerNavigator2},
            Drawer:{screen: AppDrawerNavigator},
            MainScreen2:{screen:MainScreen2},
            
            
            
            
            
          })

          
          const AppContainer =  createAppContainer(switchNavigator);

          
          
    
  
