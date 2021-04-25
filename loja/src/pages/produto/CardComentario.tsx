import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Comentario } from '../../models/dto/Comentario';
import { Tema } from '../../styles/styles';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Star from '../../components/Star';

interface Props {
  comentario: Comentario;
  onPresX: () => void;
}
const CardComentario = ({ comentario, onPresX }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.bannerDelete}>
        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="close" type="Ionicons" style={styles.icon} onPress={onPresX} />
        </TouchableOpacity>
      </View>
      <Image style={styles.imagem} source={{ uri: comentario.imagem }} />
      <View style={styles.descricao}>
        <Text style={styles.titulo}>{comentario.nome}</Text>
        <Text style={styles.comentario}>{comentario.comentario}</Text>
        <Star quantidade={comentario.estrelas} />
      </View>
    </View>
  );
};

export default CardComentario;

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
  bannerDelete: {
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 2,
    right: 0,
    zIndex: 1,
    backgroundColor: Tema.VERMELHO,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 7
  },
  icon: { color: Tema.BRANCO },
  imagem: { width: 120, height: 120, marginRight: 15 },
  descricao: { flex: 1, justifyContent: 'space-around' },
  titulo: { fontSize: moderateScale(16, 0.5), fontWeight: 'bold' },
  comentario: { fontSize: moderateScale(14, 0.5), textAlign: 'justify' }
});
