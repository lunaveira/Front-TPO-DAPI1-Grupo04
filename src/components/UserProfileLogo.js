import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});




export default function UserProfileLogo() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate({ name: 'User Profile' })}>
    <Image className='h-11 w-11 mt-2'source={require('../images/ProfileIcon.png')}/>
    
    </TouchableOpacity>
    </View>
  );
  
};


