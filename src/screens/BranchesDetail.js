import { View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import ListDetailBranches from "../components/ListDetailBranches";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atob } from 'react-native-quick-base64';


export default function BranchesDetail() {

    const [branches, setBranches] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = await AsyncStorage.getItem('@token')
            const idSocio = JSON.parse(atob(token.split('.')[1]))
            console.log(idSocio)
            const response = await fetch(`https://backendmobile-production.up.railway.app/api/branches/${id}/${idSocio.user.id}`);
            const result = await response.json();
            console.log(result.sucursal)
            setBranches(result.sucursal);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

      function getBranches() {
       
      }


    return(

        <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>

            <ListDetailBranches branches={branches}/>


        </ScrollView>


    );

}