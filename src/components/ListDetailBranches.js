
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListDetailBranches = (props) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (

        <View style={styles.rectangularItem}>
          <Text>{item.calle}</Text>
        </View>
 
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
  rectangularItem: {
    height: 12,
    width: 60,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default ListDetailBranches;
