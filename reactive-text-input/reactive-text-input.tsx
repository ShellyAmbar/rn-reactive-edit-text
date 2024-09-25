import {View, Text, TextInput, Keyboard} from "react-native";
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
      errorInputStyle,
      errorTextStyle,
      inputDisabledStyle,
      placeHolderColor,
      debounceDelay = 1,
      onDebounce,
      containerStyle,
      defaultValue,
      ...props
    }: ReactiveTextInputProps,
    ref: any
  ) => {
    const [searchTerm, setSearchTerm] = useState<string>(
      defaultValue ? defaultValue : ""
    );
    const debounce = useDebounce({text: searchTerm, delay: debounceDelay});
    useEffect(() => {
      onDebounce && onDebounce(debounce);
    }, [debounce]);
    return (
      <View style={[Styles.container, {...containerStyle}]}>
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
          textAlignVertical={"top"}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          value={searchTerm}
          onChangeText={(v) => {
            setSearchTerm(v);
            props.onChangeText && props.onChangeText(v);
          }}
          ref={ref}
          allowFontScaling={false}
          editable={!isDisabled}
          style={[
            Styles.textInput,
            {...textInputStyle},
            isError && !isDisabled && {...Styles.errorView, ...errorInputStyle},

            isDisabled && {...Styles.inputDisabled, ...inputDisabledStyle},
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
