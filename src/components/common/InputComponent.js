import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

/**
 * Input reusable Component
 * @param {String} label           "label of the input"
 * @param {[type]} value           [description]
 * @param {[type]} onChangeText    [description]
 * @param {String} placeholder     "some text to fill"
 * @param {Prop} secureTextEntry   "Prop that assure that the input assume 'dots' instead of chars"
 */
const InputComponent = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

  const { inputStyle, labelStyle, container } = styles;

  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3,
    height:30,
    width: 200,
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});
