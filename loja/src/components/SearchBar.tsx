import React from 'react';
import { Icon, Input, View } from 'native-base';
import { Tema } from '../styles/styles';

interface Props {
  placeholder: string;
  onEndEditing: (value: string) => void;
}

export default function SearchBar({ placeholder, onEndEditing }: Props) {
  return (
    <View
      style={{
        backgroundColor: Tema.BRANCO,
        margin: 20,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: Tema.CINZA_ESCURO,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
      <Icon style={{ color: Tema.ROXO }} name="ios-search" />
      <Input
        style={{ marginLeft: 5, fontSize: 14 }}
        onEndEditing={event => onEndEditing(event.nativeEvent.text)}
        placeholderTextColor={Tema.CINZA_ESCURO_TEXTO}
        placeholder={placeholder}
      />
    </View>
  );
}
