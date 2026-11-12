import React, {useState} from 'react';
import {
  View, 
  Text,
  TextInput, 
  TouchableOpacity, 
  Alert
} from 'react-native';

import styles from '../styles/cadastroStyles';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CadastroScreen() {

  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');

  async function handleCadastrar() {
    if(nome.trim() === '' ||
     quantidade.trim() === '' ||
     preco.trim() === '') {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    try {
      const dadosSalvos = await AsyncStorage.getItem('@itens_casamento');

      const itens = dadosSalvos ? JSON.parse(dadosSalvos) : []; 

      const novoItem = {
        nome,
        categoria,
        quantidade,
        preco,
      };

      itens.push(novoItem);

      await AsyncStorage.setItem(
        '@itens_casamento', 
        JSON.stringify(itens)
      );
    

   {/* Exibir alerta de sucesso com os dados cadastrados*/}
    Alert.alert('Sucesso', 'cadastro realizado!');

    setNome('');
    setCategoria('');
    setQuantidade('');
    setPreco('');

  } catch (error) {
    Alert.alert('ERRO', 'Não foi possível salvar item.');
  }
}

 { /*FORMULÁRIO DE CADASTRO DO APP.*/}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Adicione o que você precisa {'\n'}
             para o seu casamento!
        </Text>

      
     {/*ENTRADA DE NOME DO ITEM*/}
      <TextInput
        style={styles.input}
        placeholder="Digite o que você precisa..."
        value={nome}
        onChangeText={setNome}
      />

      {/*CATEGORIA DO ITEM QUE O USUÁRIO DESEJA CADASTRAR*/}
      <Picker
        selectedValue={categoria}
        onValueChange={(itemSelecionado) => 
          setCategoria(itemSelecionado)          
        }
        style={styles.input}
      >
        <Picker.Item label="Selecione a categoria..." value="" />
        <Picker.Item label="Decoração" value="decoracao" />
        <Picker.Item label="Buffet" value="buffet" />
        <Picker.Item label="Fotografia" value="fotografia" />
        <Picker.Item label="Música" value="musica" />
        <Picker.Item label="Convites" value="convites" />
      </Picker>

        {/*QUANTIDADE DO ITEM QUE O USUÁRIO DESEJA CADASTRAR*/}
      <TextInput
        style={styles.input}
        placeholder="Digite a quantidade..."  
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      {/*PREÇO DO ITEM QUE O USUÁRIO DESEJA CADASTRAR*/}
      <TextInput
        style={styles.input}
        placeholder="Digite o preço (ex.: R$ 100,00)"
        value={preco}
        onChangeText={setPreco}
        keyboardType="decimal-pad"
      />  

    {/*BOTÃO DE CADASTRAR*/}
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleCadastrar}>

        <Text style={styles.buttonText}>
          Cadastrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}