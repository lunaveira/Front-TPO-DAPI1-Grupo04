import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListDetailBranches = (props) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Branches Detail', { sucursalId: item.id })}>
        <View style={{ width: 250, backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
          <Text className="text-base text-center text-white justify-center mt-1">{item.nombre}</Text>
        </View>
        <View style={{ width: 250, backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
          <Text className="text-base text-center text-white justify-center mt-1">{item.pais}</Text>
        </View>
        <View style={{ width: 250, backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
          <Text className="text-base text-center text-white justify-center mt-1">{item.provincia}</Text>
        </View>
        <View style={{ width: 250, backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
          <Text className="text-base text-center text-white justify-center mt-1">{item.localidad}</Text>
        </View>
        <View style={{ width: 250, backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
          <Text className="text-base text-center text-white justify-center mt-1">{item.calle} {item.altura}</Text>
        </View>
        <View style={{ width: 250, backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
          <Text className="text-base text-center text-white justify-center mt-1">{item.precio_por_funcion}</Text>
        </View>
        <View style={{ width: 250, backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
          <Text className="text-base text-center text-white justify-center mt-1">{item.cerrado_temporalmente ? 'Cerrado temporalmente' : 'Abierto'}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.branches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

});

export default ListDetailBranches;
