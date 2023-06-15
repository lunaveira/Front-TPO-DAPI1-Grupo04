import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

const MovieLogo = () => {
  return (
    <View style={styles.container}>
    
    <Image className='h-11 w-11 mt-2'source={require('../images/MovieIcon.png')}/>
    </View>
  );
};

export default MovieLogo;