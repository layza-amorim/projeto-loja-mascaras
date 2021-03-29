import React from 'react';
import { Icon } from 'native-base';
import { Text } from 'react-native';
import { Tema } from '../styles/styles';

interface Props {
  quantidade: number;
}

function estrelas(quantidade: number) {
  let icon = <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />;
  if (quantidade === 2) {
    icon = (
      <>
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
      </>
    );
  } else if (quantidade === 3) {
    icon = (
      <>
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
      </>
    );
  } else if (quantidade === 4) {
    icon = (
      <>
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
      </>
    );
  } else if (quantidade === 5) {
    icon = (
      <>
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
        <Icon type="AntDesign" name="star" style={{ color: Tema.AMARELO_AVALIACAO, fontSize: 19 }} />
      </>
    );
  }
  return <Text>{icon}</Text>;
}

export default function Star({ quantidade }: Props) {
  return estrelas(quantidade);
}
