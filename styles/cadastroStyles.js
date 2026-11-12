import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcc4ab',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#253408',
  },
  
  input: {
    width: '40%',
    height: 55,

    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 20,

    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 18,
    backgroundColor: '#fff',

    placeholderTextColor: '#B5B5B5',
  },

   button: {
    backgroundColor: '#253408',
    paddingVertical: 5,

    width: '20%',
    height: 30,

    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 18,
    addingHorizontal: 15,
    fontSize: 16,  
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});


export default styles;