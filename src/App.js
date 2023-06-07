
import React from 'react';

import {useAuth0, Auth0Provider} from 'react-native-auth0';

import {

  StyleSheet,

} from 'react-native';


import Navigation from './Navigation';


export default function App() {

  

  return (

    <Auth0Provider domain='dev-ubrem7ljiuvp24yd.us.auth0.com' clientId='bC8ihap2XK9MYaaXlcpd9R9mg8lgSi9i' >

    <Navigation />

    </Auth0Provider>


  
  );
}



