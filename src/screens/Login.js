import {Text, Button, View} from 'react-native'
export default function Login({navigation}) {
    return (

      <View>
      <Text>Login</Text>
      <Button title='atras' onPress={() => navigation.goBack()}></Button>

      



      </View>


  );
}