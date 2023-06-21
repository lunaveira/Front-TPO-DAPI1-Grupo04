import { View } from "react-native";
import ListCinemaRoom from "../components/ListCinemaRoom";
import HomeButton from "../components/HomeButton";
import { useNavigation } from "@react-navigation/native";

export default function FunctionDetail() {

    const navigation = useNavigation();

    const handlerEdit = () => {
        navigation.navigate("Edit Function");
    };

    return (

        <View className=" items-center bg-gray-900 h-screen">

            <ListCinemaRoom title="Nombre pelicula"/>

            <ListCinemaRoom title="Sala"/>

            <ListCinemaRoom title="Duracion"/>

            <HomeButton color='#FF3131' title="Editar" handler={handlerEdit}/>
            <HomeButton color='#FF3131' title="Eliminar"/>

        </View>
    );
}