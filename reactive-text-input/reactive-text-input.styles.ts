import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#D7D9DE',
    fontSize: 16,
    textAlign: 'left',
    paddingHorizontal: 12,
    color: '#000',
  },

  lable: {
    fontSize: 13,
    textAlign: 'left',
    marginBottom: 8,
    color: '#000',
  },

  errorView: {
    borderColor: '#F72525',
    backgroundColor: '#FFEAEA',
    stroke: '#F72525',
  },
  errorText: {
    paddingTop: 8,
    fontSize: 13,
    color: 'red',
    textAlign: 'left',
  },
  lableDisabled: {
    color: '#919399',
  },
  inputDisabled: {
    backgroundColor: '#F0F1F4',
  },

  placeHolder: {
    color: '#acaeb5',
  },
});
