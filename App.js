
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './screens/home';
import AboutScreen from './screens/about';
import FornecedoresScreen from './screens/fornecedores';
import CadastroScreen from './screens/cadastro';
import ConsultaScreen from './screens/consulta';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'HOME' }}
        />

        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'SOBRE' }}
        />

        <Tab.Screen
          name="Fornecedores"
          component={FornecedoresScreen}
          options={{ title: 'Fornecedores' }}
        />

        <Tab.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ title: 'CADASTRO' }}
        />  

        <Tab.Screen
          name="Consulta"
          component={ConsultaScreen}
          options={{ title: 'CONSULTA' }}
        />  
      </Tab.Navigator>
    </NavigationContainer>
  );
}
