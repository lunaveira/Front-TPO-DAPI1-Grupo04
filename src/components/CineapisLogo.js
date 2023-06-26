import { View, Image, Text } from 'react-native';

export default function CineapisLogo() {
    return (
      <View className="h-56 w-80 items-center">
      
      <Image  className='h-28 w-28'source={require('../images/MovieIcon.png')}/>
      <Text className='text-red-600 text-6xl'>CineApis </Text>
      </View>
    );
  };