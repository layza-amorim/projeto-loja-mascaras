import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { InicioPages, ProdutoPages, TabPages } from './src/pages/Pages';
import { Tema } from './src/styles/styles';
import { Icon } from 'native-base';
import { ProdutoProvider } from './src/providers/produtoProvider';
import Inicio from './src/pages/Inicio';
import ListagemProdutos from './src/pages/produto/ListagemProdutos';
import ProdutoComentarios from './src/pages/produto/ProdutoComentarios';
import ProdutoInformacoes from './src/pages/produto/ProdutoInformacoes';
import CadastroComentario from './src/pages/produto/CadastroComentario';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const InformacoesStack = createStackNavigator();
const ComentariosStack = createStackNavigator();

const defaultScreenOptions = () => ({
  headerStyle: { backgroundColor: Tema.ROXO },
  headerTintColor: Tema.BRANCO,
  headerTitleStyle: { color: Tema.BRANCO },
  headerBackTitleStyle: { color: Tema.BRANCO },
  headerRightContainerStyle: { marginHorizontal: 20 }
});

function InformacoesStackScreen() {
  return (
    <InformacoesStack.Navigator screenOptions={defaultScreenOptions}>
      <InformacoesStack.Screen
        name={ProdutoPages.ProdutoInformacoes}
        component={ProdutoInformacoes}
        options={{ title: 'INFORMAÇÕES' }}
      />
    </InformacoesStack.Navigator>
  );
}

function ComentarioStackScreen() {
  return (
    <ComentariosStack.Navigator screenOptions={defaultScreenOptions}>
      <ComentariosStack.Screen
        name={ProdutoPages.ProdutoComentarios}
        component={ProdutoComentarios}
        options={{ title: 'COMENTÁRIOS' }}
      />
    </ComentariosStack.Navigator>
  );
}

function ProdutoTabs() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: Tema.ROXO, inactiveTintColor: Tema.CINZA_ESCURO_TEXTO }}>
      <Tab.Screen
        name={TabPages.Informacoes}
        component={InformacoesStackScreen}
        options={{
          title: 'Informações',
          tabBarIcon: ({ color, size }) => (
            <Icon type="FontAwesome" name="file-text" style={{ color: color, fontSize: size }} />
          )
        }}
      />
      <Tab.Screen
        name={TabPages.Comentarios}
        component={ComentarioStackScreen}
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
        <Stack.Navigator screenOptions={defaultScreenOptions}>
          <Stack.Screen name={InicioPages.Inicio} component={Inicio} options={{ headerShown: false }} />
          <Stack.Screen name={ProdutoPages.Produto} component={ProdutoTabs} options={{ headerShown: false }} />
          <Stack.Screen
            name={ProdutoPages.ListagemProdutos}
            component={ListagemProdutos}
            options={{ title: 'PRODUTOS' }}
          />
          <Stack.Screen
            name={ProdutoPages.CadastroComentario}
            component={CadastroComentario}
            options={{ title: 'ADICIONAR COMENTÁRIO', headerTitleStyle: { fontSize: 18 } }}
          />
        </Stack.Navigator>
      </ProdutoProvider>
    </NavigationContainer>
  );
}
