import { Button, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Logout({navigation}) {

    async function handleLogout() {

        AsyncStorage.removeItem('@token');

        navigation.navigate('Home');
        
        
      }

    return (

    <View>

    <Button onPress={handleLogout} title='logout'></Button>

    </View>


);


}