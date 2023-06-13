import {View, Text, TextInput} from 'react-native'
import HomeButton from '../components/HomeButton';
import ImageUploader from '../components/ImageUploader';


export default function CreateNewBranch2({navigation}) {

    return (
        <View className=" items-center bg-gray-900 h-screen"> 

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Precio de la funcion" placeholderTextColor="white" />

        <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Cerrado temporalmente / tiene q ser dropdown" placeholderTextColor="white" />


        <ImageUploader />

           
        </View>
    );

}