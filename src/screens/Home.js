import { Text, Button, View } from 'react-native';
export default function Home({navigation}) {
  return (
    <View>
      <Button title='ir a Login' onPress={() => navigation.navigate({name:'Login'})}></Button>

    </View>
  );
}