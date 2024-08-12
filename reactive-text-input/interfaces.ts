import {TextInputProps, TextStyle, ViewStyle} from "react-native";

export default interface ReactiveTextInputProps extends TextInputProps {
  label?: string;
  isError?: boolean;
  message?: string;
  isDisabled?: boolean;
  isEditable?: boolean;
  textInputStyle?: TextStyle;
  lableStyle?: TextStyle;
  errorInputStyle?: TextStyle;
  errorTextStyle?: TextStyle;
  lableDisabledStyle?: TextStyle;
  inputDisabledStyle?: TextStyle;
  placeHolderColor?: string;
  debounceDelay?: number;
  containerStyle?: ViewStyle;
  onDebounce?: (debouncedText) => void;
}
