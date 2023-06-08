import React from 'react';
import { View, Image } from 'react-native';


const data = [
  { id: 1, image: require('./assets/image1.jpg') },
  { id: 2, image: require('./assets/image2.jpg') },
  { id: 3, image: require('./assets/image3.jpg') },
  // Agrega más imágenes aquí
];

const GridItem = ({ item }) => {
  return (
    <View className="w-1/2 p-2">
      <Image source={item.image} style={{ width: '100%', height: '100%' }} />
    </View>
  );
};

const GridScreen = () => {
  return (
    <View className="flex-1 p-4 bg-white">
      <NativeWind.Grid numColumns={2}>
        {data.map((item) => (
          <GridItem key={item.id} item={item} />
        ))}
      </NativeWind.Grid>
    </View>
  );
};

export default GridScreen;
