import {View, Text, TextInput} from 'react-native';
import React, {forwardRef} from 'react';
import ReactiveEditTextProps from './interfaces';

import Styles from './reactive-edit-text.styles';

const ReactiveEditText = forwardRef(
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
    }: ReactiveEditTextProps,
    ref: any,
  ) => {
    return (
      <View>
        <Text
          style={[
            Styles.lable,
            {...lableStyle},
            isDisabled && Styles.lableDisabled,
          ]}>
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
  },
);

export default ReactiveEditText;
