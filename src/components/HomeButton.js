import { Text, Pressable  } from 'react-native';


export default function HomeButton(props) {
    
    return (
      <Pressable className="p-4 bg-red-600 rounded-lg mx-28 mt-2 h-14 "  onPress={() => props.handler()}>

        <Text className= "text-white text-center text-base">{props.title}</Text>

       
       
      </Pressable>
    );
}

