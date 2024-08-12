import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
  },
  textInput: {},

  lable: {
    fontSize: 13,
    textAlign: "left",
    marginBottom: 0,
    color: "#000",
  },

  errorView: {
    borderColor: "#F72525",
    backgroundColor: "#FFEAEA",
    color: "#F72525",
    borderBottomColor: "#F72525",
  },
  errorText: {
    paddingTop: 8,
    fontSize: 13,
    color: "red",
    textAlign: "left",
  },
  lableDisabled: {
    color: "#919399",
  },
  inputDisabled: {
    backgroundColor: "#F0F1F4",
  },

  placeHolder: {
    color: "#acaeb5",
  },
});
