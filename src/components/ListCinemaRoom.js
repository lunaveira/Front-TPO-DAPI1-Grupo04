import { View, Text, TouchableOpacity } from "react-native";


export default function ListCinemaRoom(props) {

    
    return (

        <TouchableOpacity onPress={() => props.handler()}>
            <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
                <Text className="text-white">{props.title}</Text>

            </View>
        </TouchableOpacity>
    );
}
