import { Text, Pressable, View  } from 'react-native';


export default function HomeButton(props) {
    
    return (
      <Pressable style={{backgroundColor: props.color, width: props.icon && 300, 
        height: props.icon && 65, justifyContent: props.icon && 'center', flexDirection: props.icon && 'row',
        }} className="p-4 rounded-lg  mt-2 h-14 justify-center"  
      onPress={() => props.handler()}>

        <View className='mr-5'>
          {props.icon}
        </View>

        <Text className= "text-white text-center text-base">{props.title}</Text>

       
       
      </Pressable>
    );
}





