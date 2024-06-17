import {View, Text, TextInput} from "react-native";
import React, {forwardRef, useEffect, useState} from "react";
import ReactiveTextInputProps from "./interfaces";

import Styles from "./reactive-text-input.styles";
import useDebounce from "./hooks/useDebounce";

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
      debounceDelay = 1,
      onDebounce,
      ...props
    }: ReactiveTextInputProps,
    ref: any
  ) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const debounce = useDebounce({text: searchTerm, delay: debounceDelay});
    useEffect(() => {
      onDebounce && onDebounce(debounce);
    }, [debounce]);
    return (
      <View>
        {label && (
          <Text
            style={[
              Styles.lable,
              {...lableStyle},
              isDisabled && Styles.lableDisabled,
            ]}
          >
            {label}
          </Text>
        )}

        <TextInput
          value={searchTerm}
          onChangeText={(v) => {
            setSearchTerm(v);
          }}
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
