/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import type { ColorProp } from 'react-native/Libraries/StyleSheet/ColorPropType';
import type { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import Icon from "../../components/icon/Icon";
// import colors, layout
import Colors from '../../theme/colors';
import data from '../../data/Countries'
// UnderlineTextInput Config
const INPUT_HEIGHT = 44;
const INPUT_WIDTH = '100%';

// UnderlineTextInput Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    width: INPUT_WIDTH
  },    
    iconStyle: {
    color: '#5a52a5',
    fontSize: 28,
    marginLeft: 15
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 0,
    height: INPUT_HEIGHT,
    fontSize: 16,
    color: Colors.primaryText
  }
});

// UnderlineTextInput Props
type Props = {
  onRef: () => {},
  onChangeText: () => {},
  onFocus: () => {},
  inputFocused: boolean,
  onSubmitEditing: () => {},
  returnKeyType: 
    | 'done'
    | 'go'
    | 'next'
    | 'search'
    | 'send',
  blurOnSubmit: boolean,
  keyboardType:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad',
  placeholder: string,
  placeholderTextColor: ColorProp,
  value: string,
  inputTextColor: ColorProp,
  secureTextEntry: boolean,
  borderColor: ColorProp,
  focusedBorderColor: ColorProp,
  inputContainerStyle: StyleProp,
  inputStyle: StyleProp
};

// UnderlineTextInput
const UnderlinePhoneInput = ({
  onRef = () => {},
  onChangeText,
  onFocus,
  inputFocused,
  onSubmitEditing,
  returnKeyType,
  blurOnSubmit,
  keyboardType,
  placeholder,
  placeholderTextColor,
  value,
  inputTextColor,
  secureTextEntry,
  borderColor,
  focusedBorderColor,
  inputContainerStyle,
  inputStyle
}: Props) => (
  <View
    style={[
      styles.container,
      borderColor && { borderColor },
      inputFocused && { borderColor: focusedBorderColor },
      inputContainerStyle && inputContainerStyle
    ]}
  >
    <Icon
  active
  name='md-arrow-dropdown'
  style={[styles.iconStyle, { marginLeft: 0 }]}
/>
    <TextInput
      ref={r => onRef(r)}
      onChangeText={onChangeText}
      onFocus={onFocus}
      inputFocused={inputFocused}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      blurOnSubmit={blurOnSubmit}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      secureTextEntry={secureTextEntry}
      style={[styles.textInput, inputTextColor && { color: inputTextColor }, inputStyle]}
    />
  </View>
);

export default UnderlinePhoneInput;
