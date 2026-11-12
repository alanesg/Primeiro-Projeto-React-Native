import * as React from 'react';
 import { View, Text} from 'react-native';
 import styles from '../styles/aboutStyles';

 function AboutScreen({navigation}) {
     return (
     <View style={styles.container}>
           <Text style={styles.title}>Sobre Nós</Text>
              <Text style={styles.description}>
                Bem-vindo ao nosso aplicativo! Este é um projeto de exemplo desenvolvido com React Native. Aqui você encontrará informações sobre a nossa equipe, nossos objetivos e como entrar em contato conosco.
              </Text>
     </View>
     );
 }

 export default AboutScreen;