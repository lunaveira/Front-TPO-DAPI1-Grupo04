
import React from 'react';

import { useAuth0, Auth0Provider } from 'react-native-auth0';

import {

  StyleSheet,

} from 'react-native';


import Navigation from './Navigation';

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GeneralContext from './context/GeneralContext';


export default function App() {
  const [lastTouchedBranchId, setLastTouchedBranchId] = useState("nico");

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        // Hay un token almacenado, navegar a la página de Main Owner
        navigation.navigate('Main Owner');
      }
    } catch (e) {
      // error al leer el token
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <GeneralContext.Provider value={{ lastTouchedBranchId, setLastTouchedBranchId }}>
      <Navigation />
    </GeneralContext.Provider>
  );
}




    // <Auth0Provider domain='dev-ubrem7ljiuvp24yd.us.auth0.com' clientId='bC8ihap2XK9MYaaXlcpd9R9mg8lgSi9i' >


    // </Auth0Provider>