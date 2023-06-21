import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ListCinemaRoom() {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Cinema Room Detail");
    };
    return (

        <TouchableOpacity onPress={handlePress}>
            <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
                <Text className="text-white">Sala 1</Text>

            </View>
        </TouchableOpacity>
    );
}
