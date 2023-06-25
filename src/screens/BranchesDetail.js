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
        const sucursal = await AsyncStorage.getItem('click_sucursal')
        console.log(sucursal);
        const token_encriptado = await AsyncStorage.getItem('@token')
        const idSocio = JSON.parse(atob(token_encriptado.split('.')[1]))
        const responseSocio = await fetch(`https://backendmobile-production.up.railway.app/api/socios/${idSocio.user.id}`, {
          headers: {
            Authorization: `Bearer ${token_encriptado}`,
          },
        });
        if (responseSocio.ok) {
          const dataSocio = await responseSocio.json();
          const socio = dataSocio.socio[0];
          const response = await fetch(`https://backendmobile-production.up.railway.app/api/branches/${socio.id_empresa}/${socio.id}`);
          const result = await response.json();
          console.log(result)
          // setBranches(result.sucursal);
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);

  function getBranches() {

  }


  return (

    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>

      <ListDetailBranches branches={branches} />


    </ScrollView>


  );

}