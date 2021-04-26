import React, { useEffect, useState } from 'react';
import { Tema } from '../../styles/styles';
import { Container, Content, Text } from 'native-base';
import { carregarProduto } from '../../api/api';
import { Produto } from '../../models/dto/Produto';
import { ActivityIndicator, Alert, Image, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useProduto } from '../../providers/produtoProvider';
import { AdMobBanner } from 'expo-ads-admob';

const ProdutoInformacoes = () => {
  const { produtoId } = useProduto();
  const [loading, setLoading] = useState(true);
  const [produto, setProduto] = useState<Produto>({} as Produto);

  useEffect(() => {
    async function reload() {
      try {
        let produto = await carregarProduto(produtoId);
        setProduto(produto);
        setLoading(false);
      } catch (erro) {
        setLoading(false);
        Alert.alert('Erro ao carregar o produto', 'Por favor, tente novamente em alguns minutos.');
        console.log('Erro ao carregar produto', erro);
      }
    }
    reload();
  }, []);

  const bannerError = (e: any) => console.log(e);

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

      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={bannerError}
      />
      <Content contentContainerStyle={styles.container}>
        <Image style={styles.imagem} source={{ uri: produto?.imagem }} />
        <Text style={styles.titulo}>{produto?.nome}</Text>
        <Text style={styles.titulo}>R$ {produto?.preco}</Text>
        <Text style={styles.descricao}>{produto?.descricao}</Text>
      </Content>
    </Container>
  );
};

export default ProdutoInformacoes;

const styles = StyleSheet.create({
  container: { backgroundColor: Tema.FUNDO_CINZA, alignItems: 'center' },
  tituloBanner: { color: Tema.BRANCO, fontSize: moderateScale(15, 0.5) },
  imagem: { width: 250, height: 250, margin: 15 },
  bannerEstoque: { backgroundColor: Tema.VERDE_CLARO1, width: '100%', padding: 8 },
  titulo: {
    fontSize: moderateScale(22, 0.5),
    textTransform: 'capitalize',
    fontWeight: 'bold',
    margin: 10,
    color: Tema.CINZA_ESCURO_HEADER
  },
  descricao: {
    fontSize: moderateScale(15, 0.5),
    textAlign: 'justify',
    margin: 20,
    color: Tema.CINZA_ESCURO_TEXTO
  }
});
