import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Image, StyleSheet, StatusBar } from "react-native";
import { Tema } from "../styles/styles";
import { Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { ProdutoPages } from "./Pages";
import Button from "../components/Button";

//export const imageInicio = require("../../assets/imagem_tela_inicio.png");

export const imageInicio = require("../../assets/mask_pana.png");

const Inicio = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Tema.VERDE_CLARO1, Tema.VERDE_CLARO2]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1.5, y: 1 }}>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
          <Image style={styles.imagem} source={imageInicio} />
        </View>
        <Text style={styles.texto}>
          Bem vindo(a) a {"\n"}Loja Virtual de Máscaras
        </Text>
        <Button
          titulo="Acessar"
          onPress={() => navigation.navigate(ProdutoPages.ListagemProdutos)}
        />
      </View>
    </LinearGradient>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "space-around", flex: 1 },
  containerImagem: {
    backgroundColor: Tema.BRANCO,
    width: "100%",
    height: "45%",
    alignItems: "center",
    borderBottomLeftRadius: 70,
    borderTopRightRadius: 115,
    borderTopLeftRadius: 200,
  },
  imagem: {
    maxWidth: 320,
    maxHeight: 320,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 100,
  },
  texto: {
    fontSize: 28,
    textAlign: "center",
    fontStyle: "italic",
    color: Tema.BRANCO,
  },
});
