import {View, Text, TextInput} from 'react-native'
import HomeButton from '../components/HomeButton';


export default function CreateNewBranch({navigation}) {

    return (
        <View className=" items-center bg-gray-900 h-screen"> 
            <Text className="text-white"> Poner el logo de la app y el logo del perfil aca arriba</Text>

    

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 h-13 
        mx-2.5 text-base text-white text-center " 
        placeholder="Nombre de la nueva sucursal" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Pais / esto tiene q ser dropdown" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Provincia / esto tiene q ser dropdown" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Localidad" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Calle" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Altura" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Precio de la funcion" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Cerrado temporalmente / tiene q ser dropdown" placeholderTextColor="white" />


        <View border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 h-13> 
            <Text className="text-base text-white text-center"> Ingresa la imagen de tu sucursal </Text>
        </View>

           
        </View>
    );

}