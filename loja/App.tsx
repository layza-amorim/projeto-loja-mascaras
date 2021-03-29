import React from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { InicioPages, ProdutoPages, TabPages } from './src/pages/Pages';
import { Tema } from './src/styles/styles';
import { Icon } from 'native-base';
import Inicio from './src/pages/Inicio';
import ListagemProdutos from './src/pages/produto/ListagemProdutos';
import ProdutoComentarios from './src/pages/produto/ProdutoComentarios';
import ProdutoInformacoes from './src/pages/produto/ProdutoInformacoes';
import { ProdutoProvider } from './src/providers/produtoProvider';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route: RouteProp<Record<string, object | undefined>, string>) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'INFORMAÇÕES';
  switch (routeName) {
    case TabPages.Informacoes:
      return 'INFORMAÇÕES';
    case TabPages.Comentarios:
      return 'COMENTÁRIOS';
  }
}

function Produto() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Tema.ROXO,
        inactiveTintColor: Tema.CINZA_ESCURO_TEXTO
      }}>
      <Tab.Screen
        name={TabPages.Informacoes}
        component={ProdutoInformacoes}
        options={{
          title: 'Informações',
          tabBarIcon: ({ color, size }) => (
            <Icon type="FontAwesome" name="file-text" style={{ color: color, fontSize: size }} />
          )
        }}
      />
      <Tab.Screen
        name={TabPages.Comentarios}
        component={ProdutoComentarios}
        options={{
          title: 'Comentários',
          tabBarIcon: ({ color, size }) => (
            <Icon type="FontAwesome" name="commenting" style={{ color: color, fontSize: size }} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={Tema.ROXO} />
      <ProdutoProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Tema.ROXO },
            headerTintColor: Tema.BRANCO,
            headerTitleStyle: { color: Tema.BRANCO },
            headerBackTitleStyle: { color: Tema.BRANCO }
          }}>
          <Stack.Screen name={InicioPages.Inicio} component={Inicio} options={{ headerShown: false }} />
          <Stack.Screen
            name={ProdutoPages.ListagemProdutos}
            component={ListagemProdutos}
            options={{ title: 'PRODUTOS' }}
          />
          <Stack.Screen
            name={ProdutoPages.Produto}
            component={Produto}
            options={({ route }) => ({
              title: 'INFORMAÇÕES',
              headerTitle: getHeaderTitle(route)
            })}
          />
        </Stack.Navigator>
      </ProdutoProvider>
    </NavigationContainer>
  );
}
