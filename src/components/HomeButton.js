import { Text, Pressable  } from 'react-native';


export default function HomeButton(props) {
    
    return (
      <Pressable style={{backgroundColor: props.color, width: props.icon && 300, 
        flex: props.icon && 1, justifyContent: props.icon && 'center',
        }} className="p-4 rounded-lg mx-28 mt-2 h-14 "  
      onPress={() => props.handler()}>

        {props.icon}

        <Text className= "text-white text-center text-base">{props.title}</Text>

       
       
      </Pressable>
    );
}

