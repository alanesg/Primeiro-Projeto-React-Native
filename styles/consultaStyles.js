import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#bcc4ab',
   padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  
  description: {
    fontSize: 16,
    color: '#59634f',
    textAlign: 'center',
    marginTop: 10,
  },

  resumoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  resumoCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 18,
    borderRadius: 15,
    elevation: 3,
  },

  resumoNumero: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#536347',
  },

  resumoLabel: {
    fontSize: 19,
    color : '#777777',
    marginTop: 5,
  },

  listaTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#536347',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  itemNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#536347',
  },

  categoria: {
    backgroundColor: '#e5eadc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    color: '#536347',
    fontSize: 12,
  },

  itemInfo: {
    fontSize: 14,
    color: '#777777',
    marginTop: 12,
  },

  itemValor: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#536347',
  },

});

export default styles;