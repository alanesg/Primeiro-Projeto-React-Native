
import React, { useState, useCallback } from 'react';

import {
  View,
  Text,
  FlatList,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/consultaStyles';

export default function ConsultaScreen() {

  const [itens, setItens] = useState([]);

  async function carregarItens() {
    try {
      const dadosSalvos = await AsyncStorage.getItem('@itens_casamento');

      const lista = dadosSalvos ? JSON.parse(dadosSalvos) : [];

      setItens(lista);

    } catch (error) {
      console.log('Erro ao carregar os itens:', error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      carregarItens();
    }, [])
  );

  // Quantidade de itens cadastrados
  const totalItens = itens.length;

  // Soma dos valores considerando as quantidades
  const valorTotal = itens.reduce((total, item) => {
    const preco = Number(
      String(item.preco).replace(',', '.').replace(/[^\d.]/g, '')
    );

    return total + (preco * Number(item.quantidade));
  }, 0);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Meu casamento 💍
      </Text>

      <Text style={styles.description}>
        Tudo o que você está planejando, em um só lugar.
      </Text>

      {/* RESUMO DOS CADASTROS */}
      <View style={styles.resumoContainer}>

        <View style={styles.resumoCard}>
          <Text style={styles.resumoNumero}>
            {totalItens}
          </Text>

          <Text style={styles.resumoLabel}>
            Itens cadastrados
          </Text>
        </View>

        <View style={styles.resumoCard}>
          <Text style={styles.resumoNumero}>
            {valorTotal.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Text>

          <Text style={styles.resumoLabel}>
            Valor previsto
          </Text>
        </View>

      </View>

      <Text style={styles.listaTitle}>
        Minha lista de itens
      </Text>

      {itens.length === 0 ? (

        <Text style={styles.description}>
          Nenhum item cadastrado ainda.
        </Text>

      ) : (

        <FlatList
          data={itens}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (

            <View style={styles.card}>

              <Text style={styles.itemNome}>
                {item.nome}
              </Text>

              <Text style={styles.categoria}>
                {item.categoria}
              </Text>

              <Text style={styles.itemInfo}>
                Quantidade: {item.quantidade}
              </Text>

              <Text style={styles.itemValor}>
                R$ {item.preco}
              </Text>

            </View>
          )}
        />

      )}

    </View>
  );
}
