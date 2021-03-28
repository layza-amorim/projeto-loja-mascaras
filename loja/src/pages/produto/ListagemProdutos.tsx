import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Tema } from "../../styles/styles";
import { Container } from "native-base";
import { ActivityIndicator, Alert, FlatList, Text } from "react-native";
import { listarProdutos } from "../../api/api";
import { Produto } from "../../models/dto/Produto";
import { ProdutoPages } from "../Pages";
import { moderateScale } from "react-native-size-matters";
import CardProduto from "./CardProduto";
import SearchBar from "../../components/SearchBar";

const ListagemProdutos = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);

  useEffect(() => {
    setLoading(true);
    listarProdutos()
      .then((produtos) => {
        setLoading(false);
        setProdutos(produtos);
        setProdutosFiltrados(produtos);
      })
      .catch((erro) => {
        setLoading(false);
        Alert.alert( "Erro ao carregar os produtos", "Por favor, tente novamente em alguns minutos.");
        console.log("Erro ao carregar produtos", erro);
      });
  }, []);

  const buscarProdutos = (nome: string) => {
    if (nome) {
      setProdutosFiltrados( produtos.filter((produto) => produto.nome.includes(nome.toUpperCase())));
    } else {
      setProdutosFiltrados(produtos);
    }
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" style={{ alignSelf: "center", marginTop: 16 }} color={Tema.ROXO}/>
    );
  }

  return (
    <Container style={{ backgroundColor: Tema.FUNDO_CINZA }}>
      <SearchBar
        onEndEditing={(nome) => {buscarProdutos(nome);}}
        placeholder="Buscar produto na loja"/>
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardProduto
            produto={item}
            onPress={() => navigation.navigate(ProdutoPages.Produto, {id: item.id})}/>
        )}
        ListEmptyComponent={
          <Text style={{ fontSize: moderateScale(14, 0.5), textAlign: "center" }}>
            Nenhum produto encontrado
          </Text>
        }/>
    </Container>
  );
};

export default ListagemProdutos;
