import {View, Text, TextInput, Button} from 'react-native'
import HomeButton from '../components/HomeButton';


export default function CreateNewBranch({navigation}) {

    return (
        <View className=" items-center bg-gray-900 h-screen"> 
          

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 h-13 
        mx-2.5 text-base text-white text-center " 
        placeholder="Nombre de la nueva sucursal" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Pais / esto tiene q ser dropdown" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Provincia / esto tiene q ser dropdown" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Localidad" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Calle" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Altura" placeholderTextColor="white" />

        <Button onPress={() => navigation.navigate({ name: 'Create Branch 2' })} title='Siguiente'></Button>

           
        </View>
    );

}