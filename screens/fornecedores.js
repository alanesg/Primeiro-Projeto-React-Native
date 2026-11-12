import  React from 'react';
 import { View, Text} from 'react-native';
import styles from '../styles/fornecedoresStyles';


export default function ContactScreen() {

     return (
    <View style={styles.container}>

        <Text style={styles.title}>
            Contate-me!
        </Text>

        <Text style={styles.description}>
            Entre em contato comigo!
        </Text>
    </View>
    
    );
}
