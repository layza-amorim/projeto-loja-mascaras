import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { InicioPages, ProdutoPages } from "./src/pages/Pages";
import { Tema } from "./src/styles/styles";
import Inicio from "./src/pages/Inicio";
import ListagemProdutos from "./src/pages/produto/ListagemProdutos";
import Produto from "./src/pages/produto/Produto";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={Tema.ROXO} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Tema.ROXO },
          headerTintColor: Tema.BRANCO,
          headerTitleStyle: { color: Tema.BRANCO },
          headerBackTitleStyle: { color: Tema.BRANCO },
        }}>
        <Stack.Screen
          name={InicioPages.Inicio}
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ProdutoPages.ListagemProdutos}
          component={ListagemProdutos}
          options={{ title: "PRODUTOS" }}
        />
        <Stack.Screen
          name={ProdutoPages.Produto}
          component={Produto}
          options={{ title: "INFORMAÇÕES" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
