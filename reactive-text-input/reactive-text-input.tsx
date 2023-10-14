import {View, Text, TextInput} from "react-native";
import React, {forwardRef} from "react";
import ReactiveTextInputProps from "./interfaces";

import Styles from "./reactive-text-input.styles";

const ReactiveTextInput = forwardRef(
  (
    {
      label,
      message,
      isError,
      isDisabled,
      textInputStyle,
      lableStyle,
      errorViewStyle,
      errorTextStyle,
      inputDisabledStyle,
      placeHolderColor,
      ...props
    }: ReactiveTextInputProps,
    ref: any
  ) => {
    return (
      <View>
        <Text
          style={[
            Styles.lable,
            {...lableStyle},
            isDisabled && Styles.lableDisabled,
          ]}
        >
          {label}
        </Text>

        <TextInput
          ref={ref}
          allowFontScaling={false}
          editable={!isDisabled}
          style={[
            Styles.textInput,
            {...textInputStyle},
            isError &&
              !isDisabled &&
              (errorViewStyle ? errorViewStyle : Styles.errorView),
            isDisabled &&
              (inputDisabledStyle ? inputDisabledStyle : Styles.inputDisabled),
          ]}
          placeholderTextColor={
            placeHolderColor ? placeHolderColor : Styles.placeHolder.color
          }
          {...props}
        />
        {message && isError && !isDisabled && (
          <Text style={[Styles.errorText, {...errorTextStyle}]}>{message}</Text>
        )}
      </View>
    );
  }
);

export default ReactiveTextInput;
