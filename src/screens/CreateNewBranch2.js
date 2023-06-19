import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function CreateNewBranch2({ navigation }) {
  const [functionPrice, setFunctionPrice] = useState("");
  const [isTemporarilyClosed, setIsTemporarilyClosed] = useState("");

  const handleCreateBranch2 = async () => {
    try {
      const response = await fetch("https://backendmobile-production.up.railway.app/api/cinema/:id_cinema/branches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          precio: functionPrice,
          cerrado: isTemporarilyClosed,
        }),
      });

      if (response.status === 200) {
        // La sucursal se creó exitosamente
        navigation.navigate("Home");
      } else {
        console.error("Error al crear la sucursal");
      }
    } catch (error) {
      console.error("Error al conectarse con el servidor:", error);
    }
  };

  return (
    <View className="items-center bg-gray-900 h-screen">
      <TextInput
        style={styles.input}
        value={functionPrice}
        onChangeText={setFunctionPrice}
        placeholder="Precio de la función"
        placeholderTextColor="white"
      />

      <TextInput
        style={styles.input}
        value={isTemporarilyClosed}
        onChangeText={setIsTemporarilyClosed}
        placeholder="Cerrado temporalmente"
        placeholderTextColor="white"
      />

      <Button onPress={handleCreateBranch2} title="Guardar" />
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    width: 320,
    height: 40,
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
};
