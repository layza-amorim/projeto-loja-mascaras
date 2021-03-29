import React, { useEffect, useState } from 'react';
import { Tema } from '../../styles/styles';
import { Container, Text } from 'native-base';
import { carregarProduto } from '../../api/api';
import { Produto } from '../../models/dto/Produto';
import { ActivityIndicator, Alert, Image, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useProdutoId } from '../../providers/produtoProvider';

const ProdutoInformacoes = () => {
  const { produtoId } = useProdutoId();
  const [loading, setLoading] = useState(false);
  const [produto, setProduto] = useState<Produto>({} as Produto);

  useEffect(() => {
    setLoading(true);
    carregarProduto(produtoId)
      .then(produto => {
        setLoading(false);
        setProduto(produto);
      })
      .catch(erro => {
        setLoading(false);
        Alert.alert('Erro ao carregar os produtos', 'Por favor, tente novamente em alguns minutos.');
        console.log('Erro ao carregar produto', erro);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ alignSelf: 'center', marginTop: 16 }} color={Tema.ROXO} />;
  }

  return (
    <Container style={styles.container}>
      {produto.emEstoque ? (
        <View style={[styles.bannerEstoque, { backgroundColor: Tema.VERDE_CLARO1 }]}>
          <Text style={styles.tituloBanner}>Protudo em estoque!</Text>
        </View>
      ) : (
        <View style={[styles.bannerEstoque, { backgroundColor: Tema.VERMELHO }]}>
          <Text style={styles.tituloBanner}>Protudo fora de estoque!</Text>
        </View>
      )}
      <Image style={styles.imagem} source={{ uri: produto?.imagem }} />
      <Text style={styles.titulo}>{produto?.nome}</Text>
      <Text style={styles.titulo}>R$ {produto?.preco}</Text>
      <Text style={styles.descricao}>{produto?.descricao}</Text>
    </Container>
  );
};

export default ProdutoInformacoes;

const styles = StyleSheet.create({
  container: { backgroundColor: Tema.FUNDO_CINZA, alignItems: 'center' },
  tituloBanner: { color: Tema.BRANCO, fontSize: moderateScale(15, 0.5) },
  imagem: { width: 250, height: 250, margin: 20 },
  bannerEstoque: { backgroundColor: Tema.VERDE_CLARO1, width: '100%', padding: 8 },
  titulo: {
    fontSize: moderateScale(22, 0.5),
    textTransform: 'capitalize',
    fontWeight: 'bold',
    margin: 20,
    color: Tema.CINZA_ESCURO_HEADER
  },
  descricao: {
    fontSize: moderateScale(15, 0.5),
    textAlign: 'justify',
    margin: 30,
    color: Tema.CINZA_ESCURO_TEXTO
  }
});
