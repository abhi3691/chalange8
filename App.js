import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from './src/Login'
import Home from "./src/Drawer/Home";
import Profile from "./src/Drawer/Profile";
import Wallet from "./src/Drawer/Wallet";
import Records from "./src/Drawer/Records";
import Policies from "./src/Drawer/policies";
import Settings from "./src/Drawer/Settings";
import About from "./src/Drawer/About";
import Help from "./src/Drawer/Help";
import DrawerContent from "./src/DrawerContent";


const stack = createStackNavigator()
const Drawer = createDrawerNavigator()


function MyStack(){
    return(
        <stack.Navigator >
            <stack.Screen
            name='Login'
            component={Login}
            options={{headerShown:false}}
            />
            <stack.Screen
            name='Drawer'
            component={MyDrawer}
            options ={{headerShown:false}}
            />

        </stack.Navigator>
    )
}

function MyDrawer(){
    return(
        <Drawer.Navigator
        drawerContent ={(props)=> <DrawerContent {...props} /> } >
            <Drawer.Screen
            name ='Home'
            component={Home} />

            <Drawer.Screen
            name ='Profile'
            component={Profile} />

            <Drawer.Screen
            name ='Wallet Balance'
            component={Wallet} />   

            
           <Drawer.Screen
            name ='Records'
            component={Records} />   

           <Drawer.Screen
            name ='Refund and policies'
            component={Policies} />   

           <Drawer.Screen
            name ='Settings'
            component={Settings} />   

           <Drawer.Screen
            name ='About Us'
            component={About} />   

     
            <Drawer.Screen
            name ='Help'
            component={Help} />   
         


        </Drawer.Navigator>
    )
}

export default function App(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}


