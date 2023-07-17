import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';



const Stack = createNativeStackNavigator();

function MyTabs() {



    return (
        <Stack.Navigator>
            <Stack.Screen options={{ 
                headerStyle: { backgroundColor: '#111827' }, headerTitleStyle: { color: '#111827' } }} name="Home" component={Home} />

            <Stack.Screen  options={{ 
                headerBackVisible: true, headerTitleStyle: { color: '#111827' }, headerTintColor: '#fff', headerStyle: { backgroundColor: '#111827' }, headerTitleAlign: 'center' }}
            name="Page 2" component={Login} />

        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

