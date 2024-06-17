import {StyleSheet} from "react-native";

export default StyleSheet.create({
  textInput: {
    paddingVertical: 5,
    backgroundColor: "transparent",
    borderColor: "#D7D9DE",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    color: "#000",
    paddingHorizontal: 0,
    borderRadius: 0,
  },

  lable: {
    fontSize: 13,
    textAlign: "left",
    marginBottom: 0,
    color: "#000",
  },

  errorView: {
    borderColor: "#F72525",
    backgroundColor: "#FFEAEA",
    stroke: "#F72525",
    color: "#F72525",
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
