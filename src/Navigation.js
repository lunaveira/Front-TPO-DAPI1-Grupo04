import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Register from './screens/Register';
import MainPageOwner from './screens/MainPageOwner';
import CreateNewBranch from './screens/CreateNewBranch';
import ProfileLogo from './components/ProfileLogo'
import UserProfileLogo from './components/UserProfileLogo';
import FilterButton from './components/FilterButton';
import MovieLogo from './components/MovieLogo'
import OwnerProfile from './screens/OwnerProfile'
import CinemaRooms from "./screens/CinemaRooms"
import CinemaRoomDetail from './screens/CinemaRoomDetail';
import EditCinemaRoom from './screens/EditCinemaRoom';
import Functions from './screens/Functions';
import FunctionsDetail from './screens/FunctionsDetail';
import EditFunctions from './screens/EditFunctions';
import CreateCinemaRoom from './screens/CreateCinemaRoom';
import CreateFunction from './screens/CreateFunction';
import BranchesDetail from './screens/BranchesDetail';
import EditBranches from './screens/EditBranches';
import MainPageUser from './screens/MainPageUser';
import FiltersMovies from './screens/FiltersMovies';
import UserProfile from './screens/UserProfile';
import MovieDetails from './screens/MovieDetails';

const Stack = createNativeStackNavigator();

function MyTabs() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerStyle: { backgroundColor: '#111827' }, headerTitleStyle: { color: '#111827' } }} name="Home" component={Home} />

            <Stack.Screen options={{ headerTitleStyle: { color: '#111827' }, headerTintColor: '#fff', headerStyle: { backgroundColor: '#111827' }, headerTitleAlign: 'center' }} name="Login" component={Login} />

            <Stack.Screen options={{ headerTitleStyle: { color: '#111827' }, headerTintColor: '#fff', headerStyle: { backgroundColor: '#111827' }, headerTitleAlign: 'center' }} name="Forgot Password" component={ForgotPassword} />

            <Stack.Screen options={{ headerTitleStyle: { color: '#111827' }, headerTintColor: '#fff', headerStyle: { backgroundColor: '#111827' }, headerTitleAlign: 'center' }} name="Register" component={Register} />

            <Stack.Screen options={{
                headerBackVisible: false, headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Main Owner" component={MainPageOwner} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Create Branch" component={CreateNewBranch} />


            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Owner Profile" component={OwnerProfile} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Cinema Rooms" component={CinemaRooms} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Cinema Room Detail" component={CinemaRoomDetail} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Edit Cinema Room" component={EditCinemaRoom} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Functions" component={Functions} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Functions Detail" component={FunctionsDetail} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Edit Function" component={EditFunctions} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Create Cinema Room" component={CreateCinemaRoom} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Create Function" component={CreateFunction} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name='Branches Detail' component={BranchesDetail} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <ProfileLogo />, headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name='Edit Branches' component={EditBranches} />

            <Stack.Screen options={{ headerBackVisible: false,
                headerTintColor: '#fff', headerRight: () => <FilterButton/> , headerStyle: { backgroundColor: '#111827' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center', headerLeft: () => <UserProfileLogo/>            
            }} name='Main User' component={MainPageUser}/>

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <UserProfileLogo/>, headerStyle: { backgroundColor: '#1E1E1E' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name='User Profile' component={UserProfile} />

            <Stack.Screen options={{
                headerTintColor: '#fff', headerRight: () => <FilterButton/> , headerStyle: { backgroundColor: '#3C3B3B' },
                headerTitleColor: '#3C3B3B'}} name='Filters Movies' component={FiltersMovies}/>

            <Stack.Screen options={{ 
                headerTintColor: '#fff', headerRight: () => <UserProfileLogo />, headerStyle: { backgroundColor: '#443D3D' },
                headerTitle: () => <MovieLogo />, headerTitleAlign: 'center'
            }} name="Movie Details" component={MovieDetails} />

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