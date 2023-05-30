import {Text, View, TextInput} from 'react-native'
import HomeButton from '../components/HomeButton';

export default function ForgotPassword({navigation}) {

    return (
        <View className=" items-center bg-gray-900 h-screen"> 
            <Text className="text-white mt-10">Ingresa tu email para restaurar tu constraseña </Text>

        <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-5 h-13 mx-2.5">
            <TextInput className= "text-base text-white text-center " placeholder="Ingresa tu email" placeholderTextColor="white"/>
        </View>

        <HomeButton title="Recuperar contraseña"> </HomeButton>
        </View>
    );


}