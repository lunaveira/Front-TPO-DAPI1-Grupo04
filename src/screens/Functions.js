import { View, Text, Button} from "react-native";
import ListCinemaRoom from "../components/ListCinemaRoom";
import HomeButton from "../components/HomeButton";
import { useNavigation } from "@react-navigation/native";


export default function Functions() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Functions Detail");
    };

    return(

        <View className=" items-center bg-gray-900 h-screen">

            <Text className="text-white mt-10 text-lg"> Funciones </Text>

            <Button title="Crear funcion" onPress={() => navigation.navigate({ name: 'Create Function' })} />

            <ListCinemaRoom title="funcion 1" handler={handlePress}/>

           

        </View>
    );
}