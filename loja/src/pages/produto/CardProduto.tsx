import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Produto } from '../../models/dto/Produto';
import { Tema } from '../../styles/styles';

interface Props {
  produto: Produto;
  onPress: () => void;
}
const CardProduto = ({ onPress, produto }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.imagem} source={{ uri: produto.imagem }} />
        <View style={styles.descricao}>
          <Text style={styles.titulo}>{produto.nome}</Text>
          <Text style={styles.preco}>R$ {produto.preco}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardProduto;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Tema.BRANCO,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 10,
    borderColor: Tema.ROXO,
    borderWidth: 2,
    flexDirection: 'row'
  },
  imagem: { width: 100, height: 100, marginRight: 20 },
  descricao: { flex: 1, justifyContent: 'space-around' },
  titulo: { fontSize: moderateScale(16, 0.5), textTransform: 'capitalize' },
  preco: { fontSize: moderateScale(20, 0.5), fontWeight: 'bold' }
});
