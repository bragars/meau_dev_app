import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    color: '#bdbdbd',
    marginTop: 28,
    borderRightColor: '#fafafa',
    borderTopColor: '#fafafa',
    borderLeftColor: '#fafafa',
    borderBottomColor: 'grey',
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    width: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius:3,
    height: 50,
    backgroundColor: '#88c9bf',
    marginEnd: 10,
  },
  buttonText: {
    color: '#434343',
    textAlign: 'center'
  },
  buttonCadastro: {
    flex: 1,
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius:3,
    height: 50,
    backgroundColor: '#88c9bf',
    marginEnd: 10,
  },
  textInfo: {
    marginTop: 28,
    height: 80,
    width: 320,
    color: '#434343',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular'
  },
  registerTitle: {
    marginTop: 28,
    color: '#88c9bf',
    marginBottom: 32,
  },
  inLine: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  spaceWithLine: {
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  }
});