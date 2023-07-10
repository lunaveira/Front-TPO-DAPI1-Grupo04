import { Text, ScrollView, View, Image } from "react-native";

export default function MovieDetails() {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ backgroundColor: "rgb(17 24 39)", flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>

        <View style={{ width: "80%", marginLeft: "5%" }}>

          <Image source={require("../images/theDarkKnight.jpeg")} style={{ width: "100%", height: "50%", aspectRatio: 2/3, resizeMode: "contain" }} />

          <View className= 'flex-row-reverse'>

          <View className='flex-col ' style={{alignItems:'flex-end', marginTop: -180, marginLeft: 100}}>
            <View style={{ width: 80, height: 80, borderRadius: 45, backgroundColor: "white", marginBottom: 10}}> 
            <Text className='text-sm text-black text-center mt-4'> Genero Accion</Text>
            </View>
            <View style={{width: 80, height: 80, borderRadius: 45, backgroundColor: "white" }}> 
            <Text className='text-black text-sm text-center mt-4'>Duracion 120'</Text>
            </View>
          </View>

          </View>
          
          <View style={{ flexDirection: "column", marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>El caballero oscuro</Text>

            <Text style={{ color: "white", fontSize: 16, textAlign: "left", marginTop: 10 }}>
              Sinopsis de la película: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt justo ac ligula scelerisque varius.
              Nullam in fringilla tellus.
            </Text>

            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", textAlign: "left", marginTop: 10 }}>
              Puntuación: 5.0
            </Text>

          </View>
        
        </View>

      </View>
    </ScrollView>
  );
}
