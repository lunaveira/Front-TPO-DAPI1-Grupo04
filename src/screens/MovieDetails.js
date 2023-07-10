import { Text, ScrollView, View, Image } from "react-native";

export default function MovieDetails() {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ backgroundColor: "rgb(17 24 39)", flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
        <Image source={require("../images/theDarkKnight.jpg")} style={{ width: 200, height: 300 }} /> 
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>El caballero de la noche</Text>
          <Text style={{ color: "white", fontSize: 16, textAlign: "left", marginTop: 10 }}>
            Sinopsis de la película: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt justo ac ligula scelerisque varius.
            Nullam in fringilla tellus. Integer interdum erat vitae arcu tincidunt, at consequat urna vestibulum. Sed mollis ipsum eget urna bibendum,
            vitae consectetur purus tempor. Nullam dapibus lorem vitae semper pharetra. Quisque auctor hendrerit urna non cursus. Mauris convallis,
            nibh at tincidunt ultrices, turpis quam rutrum neque, sed lacinia lacus enim ut lacus.
          </Text>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", textAlign: "right", marginTop: 10 }}>
            Puntuación: 9.0
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}