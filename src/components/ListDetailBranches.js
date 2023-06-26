
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext } from 'react';

import GeneralContext from '../context/GeneralContext';


const ListDetailBranches = (props) => {
  const navigation = useNavigation();

  const [branches, setBranches] = useState([]);
  const { lastTouchedBranchId, setLastTouchedBranchId } = useContext(GeneralContext);

  const renderItem = ({ item }) => {
    return (

        <View style={styles.rectangularItem}>
          <Text className="text-white text-lg">{lastTouchedBranchId}</Text>
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
