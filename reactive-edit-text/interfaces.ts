import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export default interface ReactiveEditTextProps extends TextInputProps {
  label: string;
  isError?: boolean;
  message?: string;
  isDisabled?: boolean;
  isEditable?: boolean;
  textInputStyle?: ViewStyle;
  lableStyle?: TextStyle;
  errorViewStyle?: TextStyle;
  errorTextStyle?: TextStyle;
  lableDisabledStyle?: TextStyle;
  inputDisabledStyle?: TextStyle;
  placeHolderColor?: string;
}
