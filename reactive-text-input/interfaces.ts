import {TextInputProps, TextStyle, ViewStyle} from "react-native";

export default interface ReactiveTextInputProps extends TextInputProps {
  label?: string;
  isError?: boolean;
  message?: string;
  isDisabled?: boolean;
  isEditable?: boolean;
  textInputStyle?: TextStyle;
  lableStyle?: TextStyle;
  errorViewStyle?: TextStyle;
  errorTextStyle?: TextStyle;
  lableDisabledStyle?: TextStyle;
  inputDisabledStyle?: TextStyle;
  placeHolderColor?: string;
}
