import React from 'react';
import { Icon } from 'native-base';
import { Text } from 'react-native';
import { Tema } from '../styles/styles';

interface Props {
  quantidade: number;
}

function estrelas(quantidade: number) {
  let estrelas = [];
  for (var i = 0; i < quantidade; i++) {
    estrelas.push(
      <Icon key={i} type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
    );
  }
  return <Text>{estrelas}</Text>;
}

export default function Star({ quantidade }: Props) {
  return estrelas(quantidade);
}
