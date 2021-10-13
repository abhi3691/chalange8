import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './Login'

const stack = createStackNavigator()

function MyStack(){
    return(
        <stack.Navigator>
            <stack.Screen
            name='Login'
            component={Login}
            />
        </stack.Navigator>
    )
}

export default function App(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}


