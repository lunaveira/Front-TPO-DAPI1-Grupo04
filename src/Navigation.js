import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Register from './screens/Register';
import MainPageOwner from './screens/MainPageOwner';
import CreateNewBranch from './screens/CreateNewBranch';
import CreateNewBranch2 from './screens/CreateNewBranch2';
import Logout from './screens/Logout';
import ProfileLogo from './components/ProfileLogo'
import MovieLogo from './components/MovieLogo'

const Stack = createNativeStackNavigator();

function MyTabs() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerTintColor: 'red', headerStyle: { backgroundColor: 'tomato' }}} name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Forgot Password" component={ForgotPassword} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen options={{headerBackVisible: false, headerRight: () => <ProfileLogo/>,headerStyle: { backgroundColor: '#111827' }, 
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'}} name="Main Owner" component={MainPageOwner} />
            <Stack.Screen name="Create Branch" component={CreateNewBranch} />
            <Stack.Screen name="Create Branch 2" component={CreateNewBranch2} />
            <Stack.Screen name="Logout" component={Logout} />

        </Stack.Navigator>
    );
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}