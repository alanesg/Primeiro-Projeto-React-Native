import * as React from 'react';
 import { View, Text} from 'react-native';
 import styles from '../styles/homeStyles';

 function HomeScreen({navigation}) {
     return (
     <View style={ styles.container}>
        <Text style={styles.title}>
            Bem Vindo(a)!
        </Text>
        <Text style={styles.description}>
            Página inicial do aplicativo.
        </Text>
     </View>
     );
 }

 export default HomeScreen;