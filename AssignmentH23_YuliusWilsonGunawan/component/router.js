import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './home';
import Postpage from "./postpage";

const Stack = createStackNavigator();

const Router = () =>
{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PostPage" component={Postpage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;